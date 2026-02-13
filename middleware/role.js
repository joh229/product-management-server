module.exports = (...allowedRoles) => {

  return (req, res, next) => {

    // Ensure user info exists
    if (!req.user || !req.user.role) {
      return res.status(401).json({
        message: "Unauthorized access"
      });
    }

    // Check role permission
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    next();
  };
};