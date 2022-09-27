
const express = require('express');
const app = express();
const Router = express.Router()

const node_connection = require('./connectors/db.connection');
app.use(express.json())
app.use('/', Router)

const Joi = require('@hapi/joi');


require('./Router/tblEMP')(Router)

app.listen(3000,function(err){
    if(err) throw err;
    console.log(`server is running ${3000}`);
    
});


