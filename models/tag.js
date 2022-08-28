/* eslint-disable comma-dangle */
module.exports = (sequelize, DataTypes) => {
    const tags = sequelize.define(
        'tag',
        {
            name: DataTypes.STRING,
        },

        {
            createdAt: 'created_at',
            updatedAt: 'modified_at',
        }
    );
    return tags;
};
