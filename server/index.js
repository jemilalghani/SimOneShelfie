const express = require('express');
const bodyParser = require('body-parser');
const controller= require('./controller');
const massive = require('massive');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database=>{
    app.set('db', database);
}).catch(error=>{
    console.error('Error connecting to database', error);
})

app.get('/api/inventory', controller.read);
app.post('/api/inventory', controller.create);
app.put('/api/inventory/:id', controller.update);
// app.delete('/api/inventory/:id', controller.delete);

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, ()=>{
    console.log(`You're tunin' into Port ${SERVER_PORT} 📻 📻`)
})