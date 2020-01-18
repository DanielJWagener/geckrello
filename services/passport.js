const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");

const User = mongoose.model("users");

// Encode user into cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Fetch user model from id in cookie
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true // prevents Google from reverting to HTTP when going through Heroku proxy
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const existingUser = await User.findOne({ googleId: profile.id });

      if (!existingUser) {
        const newUser = await new User({
          googleId: profile.id,
          email: profile._json.email,
          fullName: profile._json.name,
          givenName: profile._json.given_name,
          familyName: profile._json.family_name
        }).save();
        return done(null, newUser);
      }

      done(null, existingUser);
    }
  )
);
