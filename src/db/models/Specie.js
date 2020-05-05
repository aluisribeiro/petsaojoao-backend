"use strict";
module.exports = (sequelize, DataTypes) => {
  const Specie = sequelize.define(
    "Specie",
    {
      name: DataTypes.STRING(40),
    },
    { tableName: "species" }
  );
  Specie.associate = function (models) {
    Specie.hasMany(models.Breed);
  };
  return Specie;
};
