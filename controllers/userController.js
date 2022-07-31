const db = require('../models');
console.log(db.users);
const Users = db.users;

let addUser = async (req, res) => {

    // let data = await Users.build({
    //     name: 'Test',
    //     email: 'test2@gmail.com'
    // })
    // await data.save();

    let data = await Users.create({
        name: 'Test',
        email: 'test5@gmail.com',
        gender: 'male',

    })
    // console.log(data.dataValues);

    //data update
    // data.name = 'dummy';
    // data.save();

    // delete
    data.destroy();
    console.log(data.dataValues);

    let response = {
        data: 'Ok',
    }
    res.status(200).json(response)
}

module.exports = {
    addUser
}