const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  _auth: {
    jwtSecretKey: process.env.secretToken,
  },
  mailer: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    type: "OAuth2",
    secureConnection: true,
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
  },
};
