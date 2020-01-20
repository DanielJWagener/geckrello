// this is a temporary hack to get Postman to work with OAuth;

module.exports = req => {
  if (!req.user) {
    return "5e2381ce8541f535dbe53776"; // admin user ID
  } else {
    return req.user.id;
  }
};
