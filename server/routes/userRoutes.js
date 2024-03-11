const express = require("express");
const router = express.Router();
const User = require("../models/user");
const errorHandler = require("../utils/errorHandler");
// ============================= adding =======================
router.post("/add-user", async (req, res, next) => {
  try {
    const { userId } = req.body;
    const duplicate = await User.findOne({ userId });
    if (duplicate) {
      return next(errorHandler(409, "User already Exists"));
    }
    await User.create({ userId });
    res.status(200).json({
      status: "OK",
      message: "User Added",
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
});
// ==============================================================
// ======================= Getting ==============================
router.get("/users", async (req, res, next) => {
  try {
    const data = await User.find({});
    const newData = data.map((el) => {
      const { userId, ...rest } = el._doc;
      return userId;
    });
    res.status(200).json({
      status: "OK",
      data: newData,
    });
  } catch (err) {
    console.log(err.message);
    return next(err);
  }
});
// ==============================================================
module.exports = router;
