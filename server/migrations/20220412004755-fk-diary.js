"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Class Table
    // π ν΄λμ€ νμ΄λΈμ teacherId νλλ₯Ό μμ±ν©λλ€.
    await queryInterface.addColumn("diary", "trip_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "trip", // trips λͺ¨λΈμμ
        key: "id", // κ·Έ μμ΄λ κ°μ μ°Έκ³ ν©λλ€.
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    // π ν΄λμ€ νμ΄λΈμ regionId νλλ₯Ό μμ±ν©λλ€.
  },

  down: async (queryInterface, Sequelize) => {
    // π μμμ μμ±ν νλλ₯Ό μ κ±°ν©λλ€.
    await queryInterface.removeColumn(
      "diary", // name of Source model
      "trip_id" // key we want to remove
    );
  },
};
