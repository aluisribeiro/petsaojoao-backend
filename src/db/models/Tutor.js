"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tutor = sequelize.define("Tutor", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.INTEGER(14),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    whatsapp: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: DataTypes.STRING,
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Tutor.associate = function (models) {
    // associations can be defined here
  };
  return Tutor;
};
