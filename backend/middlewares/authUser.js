import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
   const token = req.header('Authorization')?.replace('Bearer ', '');
    
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access. Token is missing.'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user ID to the request object for further use
    req.body = req.body || {};
    req.body.userId = decoded.id;

    console.log(req.body);

    next();

  } catch {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.'
    });
  }
};

export default authUser;
