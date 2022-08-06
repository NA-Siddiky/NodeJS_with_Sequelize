const express = require('express');
const app = express();

const PORT = 6060;
require('./models')
let userController = require('./controllers/userController');

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/add', userController.addUser);
app.get('/crud', userController.crudOperation);
app.get('/query', userController.queryData);
app.get('/finder', userController.findData);


app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`);
})
