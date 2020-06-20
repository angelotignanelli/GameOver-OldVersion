module.exports = function(sequelize, dataTypes) {


    cols = {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            first_name: {
                type: dataTypes.STRING
            },
            last_name: {
                type: dataTypes.STRING
            },
            email: {
                type: dataTypes.STRING
            },
            password: {
                type: dataTypes.STRING
            },
            avatar: {
                type: dataTypes.STRING
            }
        },
        config = {
            tableName: 'users',
            timestamps: false
        }


    const user = sequelize.define("users", cols, config);
    return user;

}