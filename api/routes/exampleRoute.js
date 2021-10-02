const express = require("express");
const router = express.Router();
const exampleCtrl = require("../controllers/exampleCtrl");
const isAuth = require("../middleware/jsonwebtoken-config").isAuth;
const multer = require("../middleware/multer-config");

router.use("/example", exampleCtrl.example);

module.exports = router;
