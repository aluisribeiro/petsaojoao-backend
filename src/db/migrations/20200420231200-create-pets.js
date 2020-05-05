"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      specie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "species",
          key: "id",
        },
      },
      breed: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      date_birth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      coat_color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      castrated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      microship_serial: {
        type: Sequelize.STRING,
        unique: true,
      },
      tutor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tutors",
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
    return queryInterface.dropTable("pets");
  },
};
