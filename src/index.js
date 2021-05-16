const express = require('express');
const app = express();
const morgan = require('morgan');
const { restart } = require('nodemon');


//settings
app.set(`port`, process.env.PORT || 3001);;
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'https://credimarketnic.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(require('./routes/Client/clients'));
app.use(require('./routes/Line/lines'));
app.use(require('./routes/LoanArea/loanarea'));
app.use(require('./routes/Item/items'));
app.use(require('./routes/Client/getClient'));
app.use(require('./routes/Line/lineaction'));

//starting the server
app.listen(3001, ()=>{
    console.log(`Server on port ${3001}`);
});