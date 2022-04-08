"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("diary", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trip_id: {
        type: Sequelize.INTEGER,
      },
      county: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      write_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("diary");
  },
};
