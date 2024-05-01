const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class filmes extends Model {
    
    static associate(models) {
      this.belongsTo(models.Generos, {foreignKey: 'idGenero'});
    }
  }
  filmes.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    descricao: DataTypes.STRING,
    titulo: DataTypes.STRING,
    foto: DataTypes.STRING,
    idGenero: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'generos',
        },
        key: 'id'
      },
    },
  }, {
    sequelize,
    tableName: 'filmes',
    modelName: 'Filmes',
  });
  return filmes;
};