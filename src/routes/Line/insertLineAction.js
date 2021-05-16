const mysqlConnection = require('../../database');
async function create(insertLineAction){
    
    const result = await mysqlConnection.query(
        `INSERT INTO credi_line_action 
        (id_credi_line_action, id_credi_client, id_credi_item, quantity)
        VALUES (?, ?, ?, ?)`,
        [
            insertLineAction.id_credi_line_action, insertLineAction.id_credi_client, insertLineAction.id_credi_item, insertLineAction.quantity
        ]
    );
    let message = 'Error al momento de insertar la accion';

    if(result.affectedRows){
        message = 'Accion creada satisfactoriamente';
    }
    return {message};
}

module.exports = {
    create
}