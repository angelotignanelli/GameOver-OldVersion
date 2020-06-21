module.exports = (sequelize,DataTypes) => {
    const Distributor = sequelize.define("Distributor",
    
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
        tableName: "distributors",
        timestamps: false
    });

    //Asocio la tabla distributors con la tabla games para que en games me traiga los campos de la columna distributor_id
    //Al ser uno a muchos se usa el hasMany (un distributor tiene muchos games)
    Distributor.associate = function(models) {
        Distributor.hasMany(models.Game, {
            as: "games",
            foreignKey: "distributor_id"
        });
    }

    return Distributor;
}