module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("test1s", [
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
    return queryInterface.bulkDelete("test1s", null, {});
  },
};
