const db = require("../models");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const jwt = require("../middleware/jsonwebtoken-config");
require("dotenv").config();

exports.example = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
