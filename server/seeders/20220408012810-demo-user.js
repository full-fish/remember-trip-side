module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user", [
      {
        name: "admin",
        email: "admin@naver.com",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "sub",
        email: "sub@naver.com",
        password: 4321,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  },
};
