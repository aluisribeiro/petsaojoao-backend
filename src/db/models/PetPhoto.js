"use strict";
module.exports = (sequelize, DataTypes) => {
  const PetPhoto = sequelize.define(
    "PetPhoto",
    {
      petId: DataTypes.INTEGER,
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: "pets_photos" }
  );
  PetPhoto.associate = function (models) {
    // associations can be defined here
  };
  return PetPhoto;
};
