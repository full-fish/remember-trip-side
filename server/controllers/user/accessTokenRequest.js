const { user } = require("../../models");
const jwt = require("jsonwebtoken");
//authorization header에 담긴 토큰이 서버에서 생성한 JWT인지 확인합니다.
//서버에서 생성한 유효한 토큰일 경우, 유효하지 않은 토큰일 경우 각각 다른 응답을 반환합니다.
module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  // console.log(req.headers.authorization);
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(400).send({ data: null, message: "invalid access token" });
  } else {
    // console.log("#################");
    const token = authorization.split(" ")[1]; //앞에 붙은 bearer(jwt와 oauth를 나타내는 인증타입)을 없애주고 뒤에 토큰 정보만 추출하기위해서
    const data = jwt.verify(token, process.env.ACCESS_SECRET); // 토큰 verify(해독, 검증)
    // console.log(token);
    //일치하는 유저가 있냐 없냐로 나뉨
    // const userInfo = await Users.findOne({
    //   where: {
    //     userId: req.body.userId,
    //     password: req.body.password,
    //   },
    // });
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
