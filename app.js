const express = require('express');
const { addUser, crudOperation, queryData, findData, setterGetter } = require('./controllers/userController');
const app = express();

const PORT = 6060;
require('./models')

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/add', addUser);
app.get('/crud', crudOperation);
app.get('/query', queryData);
app.get('/finder', findData);
app.get("/setter-getter", setterGetter)

app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`);
})
