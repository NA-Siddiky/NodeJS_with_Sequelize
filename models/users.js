module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
            set(value) {
                this.setDataValue('name', `${value} Islam`);
            },
            // get(value){
            //     return this.getDataValue("name",)+" BD"
            // }
        },
        email: {
            type: DataTypes.STRING,
            // defaultValue: 'test@gmail.com',
            // set(value) {
            //     this.setDataValue('email', `${value}@gmail.com`);
            // },
            allowNull: false,
            unique: true,
        },
        gender: {
            type: DataTypes.STRING,
            validate: {
                // equals: 'male',
                equals: { args: 'male', msg: 'Please entry only male' },
                // isIn: [['male', 'female']],
                isIn: { args: [['male', 'female']], msg: ' Please select from male/female' },
            },
        },
    });
    return Users;
};
