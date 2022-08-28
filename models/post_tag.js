/* eslint-disable camelcase */
module.exports = (sequelize, DataTypes) => {
    const Post_Tag = sequelize.define(
        'post_tags',
        {
            postId: DataTypes.INTEGER,
            tagId: DataTypes.INTEGER,
        },

        {
            timestamps: false,
            // eslint-disable-next-line prettier/prettier
        },
    );
    return Post_Tag;
};
