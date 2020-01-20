exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.getCurrentUser = (req, res) => {
  res.send(req.user);
};
