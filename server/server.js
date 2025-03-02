const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const dbconfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");

app.use(
  cors({
    origin: "https://robertwilliams-portfolio.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/portfolio/", portfolioRoute);

const port = process.env.PORT || 4500;
const path = require("path");

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });
// }

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
