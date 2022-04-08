const { test1 } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      const data = await test1.findAll(); //중요
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error Code 500 1221");
    }
  },
};
