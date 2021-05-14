const express = require('express');
const app = express();
const router = express.Router();
const insertLoanArea = require('./insertloanarea');

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});  

const mysqlConnection = require('../../database');

router.get('/LoanArea/loanarea', (req, res)=>{  
    mysqlConnection.query('SELECT * FROM credi_loan_area', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/LoanArea/loanarea',async function(req, res, next){
    try{
        res.json(await insertLoanArea.create(req.body));
    }catch(err){
        console.error('Error al crear el area de prestamo', err.message);
        next(err);
    }
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM credi_line WHERE id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;