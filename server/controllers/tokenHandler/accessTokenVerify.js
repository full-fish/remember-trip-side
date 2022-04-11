const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  accessTokenVerify: function (token) {
    // const authorization = req.headers.authorization;
    const authorization = token;
    if (!authorization) {
      res.status(400).send({ data: null, message: "invalid access token" });
    } else {
      // const token = authorization.split(" ")[1]; //앞에 붙은 bearer(jwt와 oauth를 나타내는 인증타입)을 없애주고 뒤에 토큰 정보만 추출하기위해서
      const data = jwt.verify(authorization, process.env.ACCESS_SECRET); // 토큰 verify(해독, 검증)

      if (!data) {
        res.status(400).send({
          data: null,
          message: "access token has been tempered",
        });
      } else {
        return data;
      }
    }
  },
};
