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
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      breed_id: {
        allowNull: false,
        references: {
          model: "breeds",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING(1),
      },
      date_birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      coat_color_id: {
        allowNull: false,
        references: {
          model: "coat_colors",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      size: {
        allowNull: false,
        type: Sequelize.STRING(1),
      },
      castrated: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      microship_serial: {
        unique: true,
        type: Sequelize.STRING,
      },
      tutor_id: {
        allowNull: false,
        references: {
          model: "tutors",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
        type: Sequelize.INTEGER,
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
