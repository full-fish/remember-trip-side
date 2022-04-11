const { user } = require("../../models");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const test = require("./test");

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
            id: userInfo.id,
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
          };

          //! 테스트
          // console.log("11111");
          // console.log(test.abc24);
          // test.sayHelloInEnglish();
          // console.log("222222");
          //!
          // console.log(process.env.ACCESS_SECRET);
          const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "1h" });
          const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: "1d" });

          res.cookie("refreshToken", refreshToken, {
            sameSite: "none",
            httpOnly: true,
            secure: true,
          });

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
        //토큰 없애기위해  클라이언트에서 로그아웃버튼누를때 없애면됨
        //const accessToken = jwt.sign(payload, 1, { expiresIn: "1s" });
      } catch (err) {}
    },
  },
  withdrawal: {
    delete: async (req, res) => {
      try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
        }

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
