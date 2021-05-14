const mysqlConnection = require('../../database');
async function create(insertLine){
    
    const result = await mysqlConnection.query(
        `INSERT INTO credi_line 
        (credi_line_name, credi_line_state, credi_line_code)
        VALUES (?, ?, ?)`,
        [
            insertLine.credi_line_name, insertLine.credi_line_state, insertLine.credi_line_code
        ]
    );
    let message = 'Error al momento de insertar la linea';

    if(result.affectedRows){
        message = 'Linea creada satisfactoriamente';
    }
    return {message};
}

module.exports = {
    create
}