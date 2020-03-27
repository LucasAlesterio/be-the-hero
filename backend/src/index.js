const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors(
    //origin:'link'
));
app.use(express.json());
app.use(routes);

app.listen(3333);

 //Driver: SELECT * FROM users
 //Query Builder: table('users').select('*').where();
 //BD :Sqlite;
 //knex,Sqlite3;
 //http://knexjs.org