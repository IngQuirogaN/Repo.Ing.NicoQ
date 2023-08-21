var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/* GET home page. */
router.get('/', async function (req, res, next) {
    var productos = await productosModel.getProductos();

    productos = productos.map(producto =>{
        if(producto.img_id){
            const imagen = cloudinary.image(producto.img_id,{
                width: 100,
                crop: 'fill' 
            });
            return{
                ...producto,
                imagen
            }
        }else{
            return{
                ...producto,
                imagen:''
            }
        }
    });



    res.render('admin/administrador', {
        layout: 'admin/layout',
        user_admin: req.session.nombre,
        productos
    });
});

router.get('/nuevo',(req,res,next)=>{
    res.render('admin/nuevo',{
        layout: 'admin/layout'
    });
});


router.post('/nuevo',async(req,res,next)=>{
    try{
        var img_id="";
        if(req.files && Object.keys(req.files).length>0){
            imagen = req.files.imagen;
            img_id=(await uploader(imagen.tempFilePath)).public_id;
        }

        if(req.body.tipo != "" && req.body.clase != "" && req.body.descripcion != "" ){
            await productosModel.insertProducto({
                ...req.body,
                img_id
            });
            res.redirect('/admin/administrador')
        }else{
            res.render('admin/nuevo'),{
                layout: 'admin/layout',
                message:"Todos los campos son requeridos"
            }
        }
    }catch(error){
        console.log(error)
        res.render('admin/nuevo'),{
            layout: 'admin/layout',
            error: true,
            message: "No se cargo el producto"
        }
    }

})


router.get('/eliminar/:id',async (req,res,next)=>{
    var id = req.params.id;
    let producto = await productosModel.getProductoId(id);
    if(producto.img_id){
        await(destroy(producto.img_id));
    }
    await productosModel.eliminarProducto(id);
    res.redirect('/admin/administrador');

});

router.get('/modificar/:id',async(req, res, next)=>{
    let id = req.params.id;
    const producto = await productosModel.getProductoId(id);

    res.render('admin/modificar',{
        layout: 'admin/layout',
        producto,
        
    });
});

router.post('/modificar', async(req, res, next)=>{
    try{
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if(req.body.img_delete == '1'){
            img_id = null;
            borrar_img_vieja = true;
        } else{
            if(req.files && Object.keys(req.files).length>0){
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if(borrar_img_vieja && req.body.img_original){
            await(destroy(req.body.img_original));
        }

        var obj = {
            tipo: req.body.tipo,
            clase: req.body.clase,
            cuerpo: req.body.cuerpo,
            img_id
        }
        
        await productosModel.modificarProductoId(obj, req.body.id);
        res.redirect('/admin/administrador');
    }catch(error){
        console.log(error)
        res.render('admin/modificar',{
            layout: 'admin/layout',
            error: true, message: 'No se modifico el producto'
        })
    }
})

module.exports = router;