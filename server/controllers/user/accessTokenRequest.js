const { user } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(400).send({ data: null, message: "invalid access token" });
  } else {
    const token = authorization.split(" ")[1]; //앞에 붙은 bearer(jwt와 oauth를 나타내는 인증타입)을 없애주고 뒤에 토큰 정보만 추출하기위해서
    const data = jwt.verify(token, process.env.ACCESS_SECRET); // 토큰 verify(해독, 검증)

    if (!data) {
      res.status(400).send({
        data: null,
        message: "access token has been tempered",
      });
    } else {
      // let userInfo = {
      //   id: data.id,
      //   userId: data.userId,
      //   email: data.email,
      //   createdAt: data.createdAt,
      //   updatedAt: data.updatedAt,
      // };
      const { id, userId, email, createdAt, updatedAt } = data;
      // console.log("$%435354353453535345#");
      // console.log(userId);
      // console.log(userInfo);
      // console.log("object");
      // console.log(data);

      // res.status(200).send({ data: { userInfo: userInfo }, message: "ok" });
      res
        .status(200)
        .send({ data: { userInfo: { id, userId, email, createdAt, updatedAt } }, message: "ok" });
    }
  }
};
