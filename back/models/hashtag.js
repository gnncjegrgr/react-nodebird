const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Hashtag extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        modelName: 'Hashtag',
        tableName: 'hashtags',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    // belongsToMany: Hashtag가 하나의 Post에 많이 있다. 반대로 하나의 Post에 Hashtag가 많이 있다.
  }
};
