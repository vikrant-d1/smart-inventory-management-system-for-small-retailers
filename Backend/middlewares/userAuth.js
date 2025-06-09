const jwt = require('jsonwebtoken');
const userService = require('../services/user/userService');
const utils = require('../utils/utils');

async function userAuth(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ error: 'Authentication token missing' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_KEY);

    // Validate and convert _id safely
    const userId = utils.mongooseID(decodedToken?._id);
    if (!userId) {
      return res.status(400).json({ error: 'Invalid user ID in token' });
    }

    const authUserData = await userService.getProfile({ _id: userId });

    if (!authUserData || authUserData.deleted) {
      return res.status(404).json({ error: 'User not found.' });
    }

    req.user = authUserData;
    next();
  } catch (err) {
    console.error('Auth Error:', err);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = {
  userAuth
};
