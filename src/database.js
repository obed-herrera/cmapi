const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'https://credimarketnic.com',
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