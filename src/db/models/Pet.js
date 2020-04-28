"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      name: DataTypes.STRING,
      specie: DataTypes.STRING,
      breed: DataTypes.STRING,
      genre: DataTypes.STRING(1),
      dateBirth: DataTypes.DATE,
      coatColor: DataTypes.STRING,
      size: DataTypes.STRING(1),
      castrated: DataTypes.BOOLEAN,
      losted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      tutorId: DataTypes.INTEGER,
    },
    {}
  );
  Pet.associate = function (models) {
    // associations can be defined here
  };
  return Pet;
};
