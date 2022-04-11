const { user } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      const data = await user.findAll();
      console.log(data);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error Code 5001");
    }
  },
};

//트립정보 받아오고 비번 수정
//mypage/trip에 포스트
