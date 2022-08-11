const { raw } = require('body-parser');
const {
 Sequelize, DataTypes, Op, QueryTypes 
} = require('sequelize');
const { users } = require('../models');
const db = require('../models');

console.log(db.users);
const Users = db.users;

const addUser = async (req, res) => {
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

    // data update
    // data.name = 'dummy';
    // data.save();

    // delete
    // data.destroy();

    const response = {
        data: 'Ok addUser',
    };
    res.status(200).json(response);
};

const crudOperation = async (req, res, next) => {
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

    // UPDATE
    // let data2 = await Users.update(
    //     { name: 'Update Name', email: "update@gmail.com" },
    //     {
    //         where: {
    //             id: 3,
    //         }
    //     },
    // )

    // DELETE
    // let data3 = await Users.destroy({
    //     where: {
    //         id: 6,
    //     }
    // })

    // Delete All
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

    // find
    // let data = await Users.findAll({})
    // let datas = await Users.findOne({})

    const response = {
        data: 'Ok CRUD',
        // data: datas,
    };
    res.status(200).json(response);
};

const queryData = async (req, res, next) => {
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

    // conditions
    const data = await Users.findAll({
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
            offset: 1,
        },
    });

    const response = {
        // data: 'Ok queryData',
        data,
    };
    res.status(200).json(response);
};

const findData = async (req, res, next) => {
    // let data = await users.findAll({})
    // let data = await users.findOne({})
    // let data = await users.findByPk(4);
    // let data = await users.findAndCountAll({
    //     where: {
    //         email: "test1@gmail.com"
    //     }
    // });

    const [data, created] = await users.findOrCreate({
        where: {
            name: 'dummy2',
        },
        defaults: {
            email: 'dummy2@gmail.com',
            gender: 'male',
        },
    });

    const response = {
        data,
        add: created,
    };
    res.status(200).json(response);
};

const setterGetter = async (req, res) => {
    // let data = await users.create({name:'siddiky',email:'test1', gender:'Mail'})
    const data = await Users.findAll({});
    const response = {
        data,
    };
    res.status(200).json(response);
};

const ValidationCount = async (req, res) => {
    try {
        // const data = await users.create({ name: 'siddiky7', email: 'test7', gender: 'male' });
    } catch (error) {
        const messages = {};
        error.errors.forEach((e) => {
            let message;
            // switch (e.validatorKey) {
            //     case 'not_unique':
            //         message = 'Duplicate Value';
            //         break;
            //     case 'equals':
            //         console.log(error.message);
            //         message = 'not match';
            //         break;
            //     case 'isIn':
            //         message = 'gender is not match';
            //         break;
            // }
            message = e.message;
            messages[e.path] = message;
            console.log(error, messages);
        });
    }

    const response = {
        data: 'validation check',
    };
    res.status(200).json(response);
};

const rawQuery = async (req, res) => {
    // const users = await db.sequelize.query('Select * from users where gender IN(:gender)',

    // const users = await db.sequelize.query('Select * from users where email LIKE(:searchEmail)',

    const users = await db.sequelize.query('Select * from users where gender = $gender ', {
        type: QueryTypes.SELECT,
        // model: Users,
        // mapToModel:true,
        // raw: true,
        // replacements: { gender: 'male' },
        // replacements: { gender: ['male', 'female'] },
        // replacements: { searchEmail: '@gmail.com' },
        bind: { gender: 'male' },
    });
    const response = {
        data: 'Raw Query',
        record: users,
    };
    res.status(200).json(response);
};
module.exports = {
    addUser,
    crudOperation,
    queryData,
    findData,
    setterGetter,
    ValidationCount,
    rawQuery,
};
