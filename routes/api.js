const express = require("express");
const router = express.Router();

const {
  debouncedTask,
  throttledTask,
} = require("../utils/performance");

const rateLimiter = require("../middleware/rateLimiter");


// 🔹 Debounce API
router.get("/debounce", (req, res) => {
  debouncedTask();

  res.json({
    success: true,
    message: "Debounce API called",
  });
});


// 🔹 Throttle API
router.get("/throttle", (req, res) => {
  throttledTask();

  res.json({
    success: true,
    message: "Throttle API called",
  });
});


// 🔹 Rate Limited API
router.get("/rate-limit", rateLimiter, (req, res) => {
  res.json({
    success: true,
    message: "Rate limit API success",
    time: new Date(),
  });
});


module.exports = router;
