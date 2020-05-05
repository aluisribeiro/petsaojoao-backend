"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "breeds",
      [
        {
          name: "Outros(as)",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Outros(as)",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("breeds", null, {});
  },
};
