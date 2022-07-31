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
    console.log(data.dataValues);

    //data update
    // data.name = 'dummy';
    // data.save();

    // delete
    // data.destroy();


    let response = {
        data: 'Ok addUser',
    }
    res.status(200).json(response)
}

let crudOperation = async (req, res, next) => {

    // INSERT
    // let data = await Users.create({
    //     name: 'Test Crud',
    //     email: 'test1@gmail.com',
    //     gender: 'male',

    // })

    //UPDATE
    // let data2 = await Users.update(
    //     { name: 'Update Name', email: "update@gmail.com" },
    //     {
    //         where: {
    //             id: 3,
    //         }
    //     },
    // )

    //DELETE
    // let data3 = await Users.destroy({
    //     where: {
    //         id: 6,
    //     }
    // })

    //Delete All
    // let data = await Users.destroy({
    //     truncate: true,
    // })

    // bulk create
    // let data = await Users.bulkCreate([
    //     {
    //         name: 'Test 1',
    //         email: 'test1@gmail.com',
    //         gender: 'male',
    //     },
    //     {
    //         name: 'Test 2',
    //         email: 'test1@gmail.com',
    //         gender: 'male',
    //     },
    //     {
    //         name: 'Test 3',
    //         email: 'test1@gmail.com',
    //         gender: 'male',
    //     },
    //     {
    //         name: 'Test 4',
    //         email: 'test1@gmail.com',
    //         gender: 'male',
    //     }
    // ])

    //find
    // let data = await Users.findAll({})
    let data = await Users.findOne({})


    let response = {
        // data: 'Ok CRUD',
        data: data,
    }
    res.status(200).json(response)
}



module.exports = {
    addUser,
    crudOperation,
}