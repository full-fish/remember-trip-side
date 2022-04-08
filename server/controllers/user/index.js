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
  signup: {
    post: async (req, res) => {
      try {
        const { name, email, password } = req.body;
        const payload = {
          name: name,
          email: email,
          password: password,
        };
        res.status(201).send(payload);
        await user.create(payload);
      } catch (err) {
        res.status(500).send("Server Error Code 500");
      }
    },
  },
  login: {
    post: async (req, res) => {
      try {
        const data = await user.findAll();
        res.status(200).json(data);
      } catch (err) {
        res.status(500).send("Server Error Code 500");
      }
    },
  },
  logout: {
    post: async (req, res) => {
      try {
        const data = await user.findAll();
        res.status(200).json(data);
      } catch (err) {
        res.status(500).send("Server Error Code 500");
      }
    },
  },
  withdrawal: {
    delete: async (req, res) => {
      try {
        const data = await user.findAll();
        res.status(200).json(data);
      } catch (err) {
        res.status(500).send("Server Error Code 500");
      }
    },
  },
};
