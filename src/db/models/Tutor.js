import { Model } from "sequelize";

export default class Tutor extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        email: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING(80),
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING(100),
        },
        rg: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING(15),
        },
        cpf: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING(11),
        },
        phone: DataTypes.STRING(10),
        whatsapp: DataTypes.STRING(11),
        cep: {
          allowNull: false,
          type: DataTypes.STRING(8),
        },
        street: {
          allowNull: false,
          type: DataTypes.STRING(100),
        },
        number: DataTypes.STRING(30),
        area: DataTypes.STRING(100),
        complement: DataTypes.STRING(30),
      },
      { sequelize, tableName: "tutors", modelName: "Tutor" }
    );
  }
}
