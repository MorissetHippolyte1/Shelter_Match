const passport = require('passport');
const { PotentialOwner } = require('.');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID= '682013659308-q5bog40ltvl3so3q5f6ijpkcr0gqfcin.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://yourdomain:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    PotentialOwner.findOrCreate({ googleId: profile.id }, function (err, user) {
      return PotentialOwner(err, profile);
    });
  }
));

passport.serializeUser(function(PotentialOwner, done) {
    done(null, user);
});

passport.deserializeUser(function(PotentialOwner,done) {
    done(null, user)
});