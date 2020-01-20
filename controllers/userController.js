exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.getCurrentUser = (req, res) => {
  res.send(req.user);
};

exports.requireLogin = (req, res, next) => {
  if (req.user) {
    return next();
  }

  if (!req.user && !req.headers.authorization) {
    return res.status(401).send({ error: "You must be logged in!" });
  }

  next();
};
