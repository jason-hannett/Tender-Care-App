require('dotenv').config();

const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      cors = require('cors'),
      fs = require('fs'),
      readline = require('readline'),
      {google} = require('googleapis'),
      {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env,
      auth = require('./authCtrl'),
      port = SERVER_PORT,
      app = express();

      app.use(express.json());
      app.use(cors());
      app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    }));

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db);
        console.log('db connected')
    });

    // GOOGLE CALENDAR API

    // AUTH ENDPOINTS

    app.post('/api/register', auth.register)
    app.post('/api/login', auth.login)
    app.get('/api/logout', auth.logout)

    app.listen(port, () => console.log(`server is zoomin on ${SERVER_PORT}`))