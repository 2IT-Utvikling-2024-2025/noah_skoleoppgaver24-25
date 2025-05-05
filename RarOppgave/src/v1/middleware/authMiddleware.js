const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    console.log(user);
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    console.log(req.user);

    if (!req.user || !allowedRoles.includes(req.user.role)) {
      console.log('Admin role not found');
      return res.sendStatus(403);
    }
    next();
  };
}

module.exports = {
  authenticateToken,
  authorizeRoles,
};