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
db.tags = require('./tag')(sequelize, DataTypes);
db.posts_tag = require('./post_tag')(sequelize, DataTypes);
// db.student = require('./student')(sequelize, DataTypes);
// -----Scop----//
db.users.addScope('checkStatus', {
    where: {
        status: 1,
    },
});

db.users.addScope('checkGender', {
    where: {
        gender: 'male',
    },
});

db.users.addScope('includePosts', {
    include: {
        model: db.posts,
    },
});

db.users.addScope('selectUsers', {
    attributes: ['name', 'email'],
});

db.users.addScope('limitCheck', {
    limit: 2,
});
// console.log(db.tag);

// relations of DB;

// ----- One to One-----//
// db.users.hasOne(db.posts, {
//     foreignKey: 'user_id',
//     as: 'postDetail',
// }); // default userID

// ----- One to many-----//
db.users.hasMany(db.posts, {
    foreignKey: 'user_id',
    as: 'postDetail',
});
// db.posts.belongsTo(db.users, {
//     foreignKey: 'user_id',
//     as: 'userInfo',
// });

db.posts.belongsTo(db.users.scope('checkStatus'), {
    foreignKey: 'user_id',
    as: 'userInfo',
});

// ----- many to many-----//
db.posts.belongsToMany(db.tags, {
    through: 'Post_Tag',
});
db.tags.belongsToMany(db.posts, {
    through: 'Post_Tag',
});

// console.log(db.users);
// console.log(db.posts);
// db.sequelize.sync({ force: false }).then(() => {
//     console.log('ReSync Successfully');
// });

module.exports = db;
