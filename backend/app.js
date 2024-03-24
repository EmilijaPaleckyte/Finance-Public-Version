const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());
// Can put a domain inside cors

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

// Creating base API
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("The port is working!", PORT);
  });
};

server();
