const mysqlConnection = require('../../database');
async function create(insertItem){
    
    const result = await mysqlConnection.query(
        `INSERT INTO credi_item 
        (credi_item_code, credi_item_name, credi_item_description, credi_item_cost, credi_item_price, credi_item_quantity, credi_item_state)
        VALUES (?, ?,?, ?, ?, ?, ?)`,
        [
            insertItem.credi_item_code, insertItem.credi_item_name, insertItem.credi_item_description,
            insertItem.credi_item_cost, insertItem.credi_item_price, insertItem.credi_item_quantity, insertItem.credi_item_state
        ]
    );
    let message = 'Error al momento de insertar el producto';

    if(result.affectedRows){
        message = 'Producto creado satisfactoriamente';
    }
    return {message};
}

module.exports = {
    create
}