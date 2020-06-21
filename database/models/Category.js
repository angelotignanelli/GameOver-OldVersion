module.exports = (sequelize,DataTypes) => {
    const Category = sequelize.define("Category",
    
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
        tableName: "categories",
        timestamps: false
    });

    //Asocio la tabla categories con la tabla games para que en games me traiga los campos de la columna category_id
    //Al ser uno a muchos se usa el hasMany (un category tiene muchos games)
    Category.associate = function(models) {
        Category.hasMany(models.Game, {
            as: "games",
            foreignKey: "category_id"
        });
    }

    return Category;
}