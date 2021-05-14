const mysqlConnection = require('../../database');
async function create(insertLoanArea){
    
    const result = await mysqlConnection.query(
        `INSERT INTO credi_loan_area 
        (area, credi_loan_area_state)
        VALUES (?, ?)`,
        [
            insertLoanArea.name, insertLoanArea.credi_loan_area_state
        ]
    );
    let message = 'Error al momento de insertar el area';

    if(result.affectedRows){
        message = 'Area creada satisfactoriamente';
    }
    return {message};
}

module.exports = {
    create
}