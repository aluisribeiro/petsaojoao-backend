"use strict";
module.exports = (sequelize, DataTypes) => {
  const Breed = sequelize.define(
    "Breed",
    {
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      specie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { tableName: "breeds" }
  );
  Breed.associate = function (models) {
    // associations can be defined here
  };
  return Breed;
};
