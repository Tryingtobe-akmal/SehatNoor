import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {

  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access. No token provided."
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL || decoded.password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access. Invalid credentials."
      });
    }

    next();

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid token."
    });
  }
};

export default authAdmin;