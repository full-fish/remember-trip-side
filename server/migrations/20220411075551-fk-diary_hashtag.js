"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Class Table
    // 🎈 클래스 테이블에 teacherId 필드를 생성합니다.
    await queryInterface.addColumn("diary_hashtag", "diary_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "diary", // Users 모델에서
        key: "id", // 그 아이디 값을 참고합니다.
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("diary_hashtag", "hashtag_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "hashtag", // Users 모델에서
        key: "id", // 그 아이디 값을 참고합니다.
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    // 🎈 클래스 테이블에 regionId 필드를 생성합니다.
  },

  down: async (queryInterface, Sequelize) => {
    // 🎈 위에서 생성한 필드를 제거합니다.
    await queryInterface.removeColumn(
      "diary_hashtag", // name of Source model
      "diary_id" // key we want to remove
    );
    await queryInterface.removeColumn(
      "diary_hashtag", // name of Source model
      "hashtag_id" // key we want to remove
    );
  },
};
