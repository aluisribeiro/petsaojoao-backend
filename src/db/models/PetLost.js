"use strict";
module.exports = (sequelize, DataTypes) => {
  const PetLost = sequelize.define(
    "PetLost",
    {
      petId: DataTypes.INTEGER,
      contact: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    },
    {}
  );
  PetLost.associate = function (models) {
    // associations can be defined here
  };
  return PetLost;
};
