const { trip } = require("../../models");
const accessTokenVerify = require("../tokenHandler/accessTokenVerify");
module.exports = {
  get: async (req, res) => {
    try {
      accessTokenVerify();
      const data = await trip.findAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },

  post: async (req, res) => {
    try {
      const { user_id, county, start_date, end_date } = req.body;
      const payload = {
        user_id: user_id,
        county: county,
        start_date: start_date,
        end_date: end_date,
      };
      res.status(201).send(payload);
      await trip.create(payload);
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },
};
