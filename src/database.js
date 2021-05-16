const mysql2 = require('mysql2');

const mysqlConnection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nb_credimarket'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;