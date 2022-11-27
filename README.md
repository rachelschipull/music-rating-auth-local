# Music Rating App

Music Rating App allows users to submit, view, upvote, and delete Spotify songs from a database. Users will be required to login with their email address to use the app.

## Screenshots
![App Screenshot](/config/screenshot.png)

## Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

## Authors

- [@rachelschipull](https://github.com/rachelschipull)
- [@chadvidovcich](https://www.github.com/chadvidovcich)
- [@RubyWoodsDev](https://github.com/RubyWoodsDev)
- [@nsilvacastellon](https://github.com/nsilvacastellon)
- [@AdnanIkram](https://github.com/AdnanIkram)
- [@Domslays](https://github.com/Domslays)

## Usage

View the live deployment here:

[Music Rating App Live Deployment](https://musicrating.cyclic.app/)


## Run Locally

**Requirements before starting:**

  - [MongoDB Atlas URI](https://www.mongodb.com/atlas/database)

Clone the project to your local environment

```bash
  git clone https://github.com/rachelschipull/music-rating-auth-local.git
```

Go to the project directory

```bash
  cd music-rating-auth-local
```

Install dependencies

```bash
  npm install
```

Create environment variable file

```bash
  cd config
  touch .env
```

Add the following entries to the environment variable file (.env)

```bash
  PORT = 2121
  DB_STRING = MONGODB-PLACEHOLDER-URI
```

Start the server in production mode

```bash
  npm run start
```

Navigate your browser to 
```
http://localhost:2121/
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
