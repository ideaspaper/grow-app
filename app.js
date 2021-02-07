const express = require('express');
const app = express();
const router = require('./routes/index');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)

app.use(express.static('public'));
app.use(session({
  cookie: { maxAge: Number(process.env.SESSION_COOKIE_MAX_AGE) },
  store: new MemoryStore({
    checkPeriod: Number(process.env.SESSION_COOKIE_MAX_AGE)
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
