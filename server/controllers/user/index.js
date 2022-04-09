const { user } = require("../../models");

module.exports = {
  signup: {
    post: async (req, res) => {
      try {
        const userInfo = await user.findOne({
          where: {
            email: req.body.email,
            password: req.body.password,
          },
        });
        if (userInfo) {
          res.status(400).send({ data: null, message: "email already exists" });
        } else {
          const { name, email, password } = req.body;
          const payload = {
            userInfo: {
              name: name,
              email: email,
              password: password,
            },
            message: "signup ok",
          };
          res.status(201).send(payload);
          await user.create(payload.userInfo);
        }
      } catch (err) {
        res.status(500).send("Server Error Code 500");
      }
    },
  },
  login: {
    post: async (req, res) => {
      try {
        const userInfo = await user.findOne({
          where: {
            email: req.body.email,
            password: req.body.password,
          },
        });
        if (!userInfo) {
          res.status(400).send({ data: null, message: "Wrong email or password" });
        } else {
          res.status(201).send(`${req.body.name}님 로그인을 환영합니다.`);
        }
      } catch (err) {
        res.status(500).send("Server Error Code 500");
      }
    },
  },
  logout: {
    post: async (req, res) => {
      try {
      } catch (err) {}
    },
  },
  withdrawal: {
    delete: async (req, res) => {
      try {
        res.status(200).json("Account Deleted");
        await user.destroy({
          where: { id: req.params.userId },
        });
      } catch (err) {
        res.status(500).send("Server Error Code 500");
      }
    },
  },
};
