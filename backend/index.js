const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const User = require("./routes/user");
const Auth = require("./routes/auth");
const Postt = require("./routes/postt")
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/user", User);
app.use("/api/auth", Auth);
app.use("/api/postt", Postt);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port : ", process.env.PORT) );

dbConnection();
