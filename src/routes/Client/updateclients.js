const mysqlConnection = require("../database");

async function update(id, client){
    const result = await mysqlConnection.query(
        `UPDATE credi_client
        SET first_name = ?, second_name = ?, last_name = ?, secondary_last_name = ?,
        national_id = ?, sys_code = ?, phone = ?, status_id = ? WHERE id = ?`,
        [
            client.first_name, client.second_name, client.last_name, client.secondary_last_name,
            client.national_id, client.sys_code, client.phone, client.status_id
        ] 
    );

    let message = 'Error al tratar de actualizar al cliente';

    if(result.affectedRows){
        message = 'Cliente editado satisfactoriamente';
    }
    return {message};
}

module.exports = {
    update
}