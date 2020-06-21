module.exports = (sequelize,DataTypes) => {
    const Section = sequelize.define("Section",
    
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
        tableName: "sections",
        timestamps: false
    });

    //Asocio la tabla sections con la tabla games para que en games me traiga los campos de la columna section_id
    //Al ser uno a muchos se usa el hasMany (un section tiene muchos games)
    Section.associate = function(models) {
        Section.hasMany(models.Game, {
            as: "games",
            foreignKey: "section_id"
        });
    }

    return Section;
}