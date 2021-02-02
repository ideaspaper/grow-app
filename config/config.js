require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER_DEV,
    "password": process.env.DB_PASS_DEV,
    "database": process.env.DB_DATABASE_DEV,
    "host": process.env.DB_HOST_DEV,
    "dialect": "postgres"
  },
  "test": {},
  "production": {
    "username": "khvicsslpzpjxg",
    "password": "c9f08aded4b8f58ae6a1d771544ca3e1ca3d2152795280bc5c068741df0a073e",
    "database": "ddhelnlv5ajlhu",
    "host": "ec2-54-172-17-119.compute-1.amazonaws.com",
    "dialect": "postgres"
  }
}
