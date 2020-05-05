"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tutor = sequelize.define(
    "Tutor",
    {
      email: {
        type: DataTypes.STRING(80),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      rg: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
      },
      phone: DataTypes.STRING(10),
      whatsapp: DataTypes.STRING(11),
      cep: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      number: DataTypes.INTEGER,
      area: DataTypes.STRING(100),
    },
    { tableName: "tutors" }
  );
  Tutor.associate = function (models) {
    Tutor.hasMany(models.Pet);
  };
  return Tutor;
};
