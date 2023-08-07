var pool = require('./bd');

async function getProductos(){
        var query = 'select * from productos';
        var rows = await pool.query(query);
        return rows;
   
}

async function insertProducto(obj){
    try{
        var query = "insert into productos set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = {getProductos, insertProducto};