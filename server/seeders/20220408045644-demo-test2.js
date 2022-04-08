module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("test2", [
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
    return queryInterface.bulkDelete("test2", null, {});
  },
};
