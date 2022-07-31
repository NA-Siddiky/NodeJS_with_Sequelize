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
        name: 'Test2',
        email: 'test3@gmail.com',
        gender: 'Femel',

    })

    let response = {
        data: 'Ok',
    }
    res.status(200).json(response)
}

module.exports = {
    addUser
}