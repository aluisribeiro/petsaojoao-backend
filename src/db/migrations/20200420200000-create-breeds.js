"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("breeds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      specie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "species",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
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
    return queryInterface.dropTable("breeds");
  },
};
