const { user } = require("../../models");

module.exports = {
  mypage: {
    get: async (req, res) => {
      try {
        const data = await user.findAll();
        res.status(200).json(data);
      } catch (err) {
        res.status(500).send("Server Error Code 500");
      }
    },
  },
};
