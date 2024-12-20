module.exports = (sequelize, DataTypes) => {
    const Pekerjaan = sequelize.define('Pekerjaan', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          pekerjaan: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
    }
},{
    tableName : 'pekerjaan'
});
    return Pekerjaan;
}