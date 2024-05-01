const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Generos extends Model {
    static associate(models) {
      this.hasMany(models.Filmes, {foreignKey: 'idGenero'})
    }
  }
  Generos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    descricao: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'generos',
    modelName: 'Generos',
  });
  return Generos;
};