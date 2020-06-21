module.exports = (sequelize,DataTypes) => {
    const Platform = sequelize.define("Platform",
    
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
    },
    
    {
        tableName: "platforms",
        timestamps: false
    });

    //Asocio la tabla platforms con la tabla games para que en games me traiga los campos de la columna platform_id
    //Al ser muchos a muchos se usa el belongsToMany (muchos platforms pueden estar en muchos games)
    Platform.associate = function(models) {
        Platform.belongsToMany(models.Game, {
            as: "games",
            through: "game_platform",
            foreignKey: "platform_id",
            otherKey: "game_id",
            timestamps: false
        });
    }

    return Platform;
}