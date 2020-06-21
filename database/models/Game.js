module.exports = (sequelize,DataTypes) => {
    const Game = sequelize.define("Game",
    
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        logo: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        video: {
            type: DataTypes.STRING
        },
        discount: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        age_clasification: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
        category_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        distributor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        section_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
    },
    
    {
        tableName: "games",
        timestamps: false
    });

    //Asocio la tabla games con la tabla categories para que me traiga los campos de la columna category_id
    //Al ser uno a uno se usa el belongsTo (un juego tiene una categoria)
    Game.associate = function(models) {
        Game.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "category_id"
        });

        Game.belongsTo(models.Distributor, {
            as: "distributors",
            foreignKey: "distributor_id"
        });

        Game.belongsTo(models.Section, {
            as: "sections",
            foreignKey: "section_id"
        });

    //Asocio la tabla games con la tabla platforms para que me traiga los campos de la columna platform_id
    //Al ser muchos a muchos se usa el belongsToMany (muchas plataformas pueden estar en muchos juegos)
        Game.belongsToMany(models.Platform, {
                as: "platforms",
                through: "game_platform",
                foreignKey: "game_id",
                otherKey: "platform_id",
                timestamps: false
        });
        }

    return Game;
}