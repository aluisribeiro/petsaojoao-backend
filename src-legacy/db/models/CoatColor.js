import { Model } from "sequelize";

export default class CoatColor extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          allowNull: false,
          type: DataTypes.STRING(40),
        },
      },
      { sequelize, tableName: "coat_colors", modelName: "CoatColor" }
    );
  }
}
