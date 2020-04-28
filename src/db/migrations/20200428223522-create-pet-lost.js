"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PetLosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      petId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pets",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      contact: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: Sequelize.STRING,
      area: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable("PetLosts");
  },
};
