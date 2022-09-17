const express = require('express');
const {
    addUser,
    crudOperation,
    queryData,
    findData,
    setterGetter,
    ValidationCount,
    rawQuery,
    oneToOne,
    belongsTo,
    oneToMany,
    manyToMany,
    scopes,
} = require('./controllers/userController');

const app = express();

const PORT = 6060;
require('./models');

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/add', addUser);
app.get('/crud', crudOperation);
app.get('/query', queryData);
app.get('/finder', findData);
app.get('/setter-getter', setterGetter);
app.get('/validation', ValidationCount);
app.get('/raw-query', rawQuery);
app.get('/oneToOne', oneToOne);
app.get('/oneToMany', oneToMany);
app.get('/belongsTo', belongsTo);
app.get('/manyToMany', manyToMany);
app.get('/scopes', scopes);

app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`);
});
