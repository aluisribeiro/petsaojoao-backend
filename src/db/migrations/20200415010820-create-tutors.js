"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tutors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING(80),
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },
      phone: Sequelize.STRING(10),
      whatsapp: Sequelize.STRING(11),
      cep: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      number: Sequelize.INTEGER,
      area: Sequelize.STRING(100),
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tutors");
  },
};
