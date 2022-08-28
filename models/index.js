/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('all-sequelize', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: true,
    pool: { max: 5, min: 0, idle: 10000 },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('connected');
    })
    .catch((err) => {
        console.log(`Error${err}`);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({ force: false, match: /all-sequelize$/ }).then(() => {
    console.log('ReSync Successfully');
});
db.users = require('./users')(sequelize, DataTypes);
db.posts = require('./posts')(sequelize, DataTypes);
db.tag = require('./tag')(sequelize, DataTypes);
db.posts_tag = require('./post_tag')(sequelize, DataTypes);

console.log(db.tag);
// relations of DB;
// db.users.hasOne(db.posts, {
//     foreignKey: 'user_id',
//     as: 'postDetail',
// });
db.users.hasMany(db.posts, {
    foreignKey: 'user_id',
    as: 'postDetail',
});
db.posts.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'userInfo',
});

db.posts.belongsToMany(db.tags, {
    through: 'post_tag',
});
db.tags.belongsToMany(db.posts, {
    through: 'post_tag',
});

// console.log(db.users);
// console.log(db.posts);
// db.sequelize.sync({ force: false }).then(() => {
//     console.log('ReSync Successfully');
// });

module.exports = db;
