module.exports = {
  ensureAuth: function (req, res, next) {
    // if authenticated move to the next middleware, else return the user to the home screen
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    // if authenticated do not return the user back to the main screen
    if (req.isAuthenticated()) {
      res.redirect("/dashboard");
    } else {
      return next();
    }
  },
};
