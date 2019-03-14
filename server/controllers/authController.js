const axios = require("axios");

module.exports = {
  login: (req, res) => {
    const db = req.app.get("db");

    // let redirect_uri = process.env.HOST
    //   ? `http://${req.headers.host}/auth`
    //   : `https://${req.headers.host}/auth`;

    const payload = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: req.query.code,
      redirect_uri: `https://${req.headers.host}/auth`
    };

    function tradeCodeForAccessToken() {
      return axios.post(
        `https://${process.env.REACT_APP_AUTH_DOMAIN}/oauth/token`,
        payload
      );
    }

    function tradeAccessTokenForUserInfo(accessTokenResponse) {
      const accessToken = accessTokenResponse.data.access_token;
      return axios.get(
        `https://${
          process.env.REACT_APP_AUTH_DOMAIN
        }/userinfo/?access_token=${accessToken}`
      );
    }

    function storeUserInfoInDB(userInfoResponse) {
      const userData = userInfoResponse.data;
      console.log(userData);
      db.get_user_by_id(userData.sub).then(user => {
        if (user.length) {
          console.log(user[0]);
          req.session.user = user[0];
          res.redirect("/");
        } else {
          const createUser = [
            userData.sub,
            userData.email,
            userData.name,
            userData.picture
          ];

          return db.create_user(createUser).then(newUser => {
            // console.log("NEWUSER", createUser);
            req.session.user = newUser[0];
            res.redirect("/");
          });
        }
      });
    }
    tradeCodeForAccessToken()
      .then(tradeAccessTokenForUserInfo)
      .then(storeUserInfoInDB)
      .catch(err => console.log(err));
  },

  getUserData(req, res) {
    console.log(req.session.user);
    res.status(200).json(req.session.user);
  }
};
