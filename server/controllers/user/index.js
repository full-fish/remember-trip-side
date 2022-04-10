const { user } = require("../../models");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  signup: {
    post: async (req, res) => {
      try {
        // 정보 불충분
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
          res.status(422).send("insufficient parameters supplied");
        }

        const userInfo = await user.findOne({
          where: {
            email: req.body.email,
            password: req.body.password,
          },
        });
        //이미 가입되었을 경우
        if (userInfo) {
          res.status(400).send({ data: null, message: "email already exists" });
        }
        //가입이 되지 않았을 경우
        else {
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

        //데이터베이스에 회원정보가 없을 경우
        if (!userInfo) {
          res.status(400).send({ data: null, message: "Wrong email or password" });
        }
        //데이터 베이스에 회원정보가 있을 경우
        else {
          const payload = {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            createdAt: userInfo.createdAt,
            updatedAt: userInfo.updatedAt,
          };

          const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "1d" });
          const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: "7d" });
          res.status(200).send({
            data: { accessToken: accessToken },
            message: `${req.body.name}님 로그인을 환영합니다.`,
          });
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
