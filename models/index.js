const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("all-sequelize", "root", "12345678", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
    pool: { max: 5, min: 0, idle: 10000 },
});

sequelize.authenticate()
    .then(() => {
        console.log("connected");
    })
    .catch(err => {
        console.log("Error" + err);
    })

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./users')(sequelize, DataTypes);
console.log(db.users);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("ReSync Successfully");
    })

module.exports = db;
