"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      specie: Sequelize.STRING,
      breed: Sequelize.STRING,
      genre: Sequelize.STRING(1),
      dateBirth: Sequelize.DATE,
      coatColor: Sequelize.STRING,
      size: Sequelize.STRING(1),
      castrated: Sequelize.BOOLEAN,
      losted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      tutorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tutors",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pets");
  },
};
