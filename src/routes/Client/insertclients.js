const mysqlConnection = require('../../database');
async function create(insertClient){
    
    const result = await mysqlConnection.query(
        `INSERT INTO credi_client 
        (first_name, mid_name, last_name, secondary_last_name, national_id, sys_code, phone, status_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            insertClient.first_name, insertClient.mid_name, insertClient.last_name, insertClient.secondary_last_name,
            insertClient.national_id, insertClient.sys_code, insertClient.phone, insertClient.status_id
        ]
    );
    let message = 'Error al momento de insertar cliente';

    if(result.affectedRows){
        message = 'Cliente creado satisfactoriamente';
    }
    return {message};
}

module.exports = {
    create
}