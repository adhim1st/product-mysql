const jwt = require("jsonwebtoken");

module.exports = {
  encode(user) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      "bongocat"
    );
  },
  decode(token) {
    return jwt.verify(token, "bongocat");
  },
};
