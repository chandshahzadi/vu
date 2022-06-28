const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('./db');
 
const app = express();
app.use(cors());

// parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res)=> {
    res.json({title: 'Hello World'});
});

routes(app);

app.listen(3001, ()=> {
    console.log('App started on http://localhost:3001');
});