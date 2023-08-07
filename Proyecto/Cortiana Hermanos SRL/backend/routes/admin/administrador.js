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

module.exports = router;