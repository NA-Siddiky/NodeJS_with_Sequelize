module.exports = (sequelize, DataTypes) => {
    var Users = sequelize.define("users", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com',
        },
        gender: {
            type: DataTypes.STRING,
        }

    },
        {
            // timestamps: false,
            // updatedAt: false,
        })
    return Users;
}