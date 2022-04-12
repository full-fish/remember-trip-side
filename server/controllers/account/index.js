const { account } = require("../../models");
const tokenHandler = require("../tokenHandler");

module.exports = {
  get: async (req, res) => {
    try {
      const validity = tokenHandler.accessTokenVerify(req);
      if (validity) {
        const data = await account.findAll();
        res.status(200).json(data);
      }
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },

  post: async (req, res) => {
    try {
      const validity = tokenHandler.accessTokenVerify(req);
      if (validity) {
        const {
          trip_id,
          category,
          item_name,
          price,
          paid_person,
          currency,
          pictuer,
          gps,
          write_date,
        } = req.body;
        const payload = {
          trip_id: trip_id,
          category: category,
          item_name: item_name,
          price: price,
          paid_person: paid_person,
          currency: currency,
          pictuer: pictuer,
          gps: gps,
          write_date: write_date,
        };
        await account.create(payload);
        res.status(201).send(payload);
      }
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },
  delete: async (req, res) => {
    try {
      const validity = tokenHandler.accessTokenVerify(req);
      if (validity) {
        const { id } = req.body;
        await account.destroy({
          where: { id: id },
        });
        res.status(200).json("Account Deleted");
      }
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },
};
