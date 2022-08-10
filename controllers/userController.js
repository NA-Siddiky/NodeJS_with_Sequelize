const { Sequelize, DataTypes, Op } = require('sequelize');
const { users } = require('../models');
const db = require('../models');
console.log(db.users);
const Users = db.users;

let addUser = async (req, res) => {

    // let data = await Users.build({
    //     name: 'Test',
    //     email: 'test2@gmail.com'
    // })
    // await data.save();

    // let data = await Users.create({
    //     name: 'Test',
    //     email: 'test5@gmail.com',
    //     gender: 'male',

    // })
    // console.log(data.dataValues);

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
    // let data = await Users.create(
    //     {
    //         name: 'Test fields insert',
    //         email: 'insert@gmail.com',
    //         gender: 'insert',
    //     },
    //     {
    //         fields: ['email', 'gender']
    //     }
    // )

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
    // let datas = await Users.findOne({})


    let response = {
        data: 'Ok CRUD',
        // data: datas,
    }
    res.status(200).json(response)
}

let queryData = async (req, res, next) => {
    // let data = await Users.findOne({});
    // let data = await Users.findAll({
    //     attributes: [
    //         'name',
    //         // 'email',
    //         ['email', 'emailID'],
    //         'gender',
    //         // [Sequelize.fn('Count', Sequelize.col('email')), 'emailCount']
    //         [Sequelize.fn('CONCAT', Sequelize.col('email'), ' ID'), 'emailCount']
    //     ]
    // });

    // let data = await Users.findAll({
    //     attributes: {
    //         exclude: ['createdAt', 'updatedAt'],
    //         include: [
    //             [Sequelize.fn('CONCAT', Sequelize.col('name', 'Siddiky'), 'fullName')]
    //         ]
    //     },
    // })

    //conditions
    let data = await Users.findAll({
        where: {
            // id: 2,
            // id: {
            //     [Op.eq]: 3
            // },
            // id: {
            //     [Op.gt]: 2
            // },
            // email: {
            //     [Op.like]: '%gmail.com%'
            // },
            // order: [
            //     ['name', 'DESC'],
            //     ['email', 'DESC'],
            // ],
            group: ['email', 'name'],
            limit: 2,
            offset: 1
        }
    })



    let response = {
        // data: 'Ok queryData',
        data: data,
    }
    res.status(200).json(response)
}

let findData = async (rew, res, next) => {
    // let data = await users.findAll({})
    // let data = await users.findOne({})
    // let data = await users.findByPk(4);
    // let data = await users.findAndCountAll({
    //     where: {
    //         email: "test1@gmail.com"
    //     }
    // });

    let [data, created] = await users.findOrCreate({
        where: {
            name: "dummy2"
        },
        defaults: {
            email: "dummy2@gmail.com",
            gender: "male",
        }
    })


    let response = {
        data: data,
        add: created,
    }
    res.status(200).json(response);
}

var setterGetter=async (req, res)=>{
    // let data = await users.create({name:'siddiky',email:'test1', gender:'Mail'})
    let data = await Users.findAll({});
    let response={
        data: data
    }
    res.status(200).json(response);
}

module.exports = {
    addUser,
    crudOperation,
    queryData,
    findData,
    setterGetter
}