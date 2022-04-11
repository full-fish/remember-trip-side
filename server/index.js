require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 8080;
const user = require("./routes/user");
const account = require("./routes/account");
const mypage = require("./routes/mypage");
const trip = require("./routes/trip");

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
app.use("/trip", trip);

server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
