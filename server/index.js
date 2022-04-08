require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 8080;
// const router = require("./routes/links");
const user = require("./routes/user");
const account = require("./routes/account");
const mypage = require("./routes/mypage");
const test1 = require("./routes/test1");
const test2 = require("./routes/test2");
const test3 = require("./routes/test3");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());

app.use("/", user);
app.use("/account", account);
app.use("/mypage", mypage);
app.use("/test1", test1);
app.use("/test2", test2);
app.use("/test3", test3);

server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
