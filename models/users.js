module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define(
        'users',
        {
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
                defaultValue: 'test@gmail.com',
                set(value) {
                    this.setDataValue('email', `${value}@gmail.com`);
                },
            },
            gender: {
                type: DataTypes.STRING,
            },
        },

        {
            // timestamps: false,
            // updatedAt: false,
        },
    );
    return Users;
};
