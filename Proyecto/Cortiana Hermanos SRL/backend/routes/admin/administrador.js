var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
    const productos = await productosModel.getProductos();
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
        if(req.body.tipo != "" && req.body.clase != "" && req.body.descripcion != "" ){
            await productosModel.insertProducto(req.body);
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
        let obj = {
            tipo: req.body.tipo,
            clase: req.body.clase,
            cuerpo: req.body.cuerpo
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