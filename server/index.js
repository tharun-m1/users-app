const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "Active",
    server: "User Data",
  });
});
// ====================== Routes ================================
app.use("/", userRoutes);
// ==============================================================

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  return res.status(status).json({
    status,
    message,
  });
});

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`server running at http://localhost:${process.env.PORT}`);
    })
    .catch((error) => console.log("Connection Error\n", error));
});
