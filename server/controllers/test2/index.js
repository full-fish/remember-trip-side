const { test2 } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      const data = await test2.findAll(); //중요
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error Code 500 1221");
    }
  },
};
