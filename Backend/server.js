const express = require("express");
require('dotenv').config()
const { main } = require("./models/index");
const cookieParser = require('cookie-parser');
const routes = require("./router");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = 8080;

app.use(helmet());
main();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api", routes);

// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again at:",PORT);
});
