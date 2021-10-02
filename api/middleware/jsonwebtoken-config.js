const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SIGN_SECRET = process.env.JWT_SIGN_SECRET;

/**
 * Création d'un token
 * @param {OBJECT} user
 * @returns STRING
 */
exports.generateTokenForUser = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      pseudo: user.pseudo,
      isAdmin: user.isAdmin,
    },
    JWT_SIGN_SECRET,
    { expiresIn: "24h" }
  );
};

/**
 * Récupération de l'id d'un utilisateur grâce au token
 * @param {*} req
 * @returns INTEGER
 */
exports.getUserId = (req) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);
  const userId = decodedToken.userId;
  return userId;
};

/**
 * Savoir si l'utilisateur est un admin grâce au token
 * @param {*} req
 * @returns BOOLEAN
 */
exports.isAdmin = (req) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);
  const isAdmin = decodedToken.isAdmin;
  return isAdmin;
};

/**
 * Vérification de la validité du token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns OBJECT {error: STRING} ou next()
 */
exports.isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId != userId) {
      return res.status(401).json({ error: "Utilisateur non identifié" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ error: "Authentification invalide" });
  }
};
