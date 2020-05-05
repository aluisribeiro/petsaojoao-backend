"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      specie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      dateBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      coatColor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      castrated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      microshipSerial: DataTypes.STRING,
      tutorId: DataTypes.INTEGER,
    },
    { tableName: "pets" }
  );
  Pet.associate = function (models) {
    Pet.hasMany(models.PetPhoto);
  };
  return Pet;
};
