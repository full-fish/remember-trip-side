module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("manseon", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("manseon", null, {});
  },
};
