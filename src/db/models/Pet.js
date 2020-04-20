"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      tutorId: DataTypes.INTEGER,
    },
    {}
  );
  Pet.associate = function (models) {
    // associations can be defined here
  };
  return Pet;
};
