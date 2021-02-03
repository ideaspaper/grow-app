# grow-app

This simple app is meant for sharing bible verses.

## Objectives

1. Sequelize hooks.
1. Sequelize validators.
1. Custom validation.
1. Error handling.

## `.env`

```
NODE_ENV=

DB_USER_DEV=
DB_PASS_DEV=
DB_DATABASE_DEV=
DB_HOST_DEV=

DB_USER_PROD=
DB_PASS_PROD=
DB_DATABASE_PROD=
DB_HOST_PROD=

PORT=
SESSION_SECRET=
SESSION_COOKIE_MAX_AGE=
```

## Running sequelize-cli on Heroku

```
$: heroku run npx sequelize-cli db:create
$: heroku run npx sequelize-cli db:migrate
$: heroku run npx sequelize-cli db:seed:all
```

## Running Bash on Heroku

```
$: heroku run bash
```

## Demo

[grow-app](https://grow-sate.herokuapp.com/)
