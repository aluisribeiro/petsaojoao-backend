import { Model } from "sequelize";

export default class Breed extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          allowNull: false,
          type: DataTypes.STRING(40),
        },
        specie_id: {
          allowNull: false,
          references: {
            model: "species",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "cascade",
          type: DataTypes.INTEGER,
        },
      },
      { sequelize, tableName: "breeds", modelName: "Breed" }
    );
  }
}
