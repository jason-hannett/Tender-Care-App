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
      ctrl = require('./controller'),
      parent = require('./parentCtrl')
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

    // ENDPOINTS 

    app.get('/api/get-all-posts', ctrl.getAllPosts)
    app.post('/api/add-post', ctrl.addPost)
    app.delete('/api/delete-post/:id', ctrl.deletePost)
    
    // PARENT ENDPOINTS
    
    app.get('/api/get-all-parent', parent.getAllParent)
    app.get('/api/get-primary/:user_id', parent.getPrimary)
    app.post('/api/add-primary', parent.addPrimary)
    app.post('/api/add-secondary', parent.addSecondary)
    app.post('/api/add-child', parent.addChild)

    // AUTH ENDPOINTS

    app.post('/api/register', auth.register)
    app.post('/api/login', auth.login)
    app.get('/api/logout', auth.logout)

    app.listen(port, () => console.log(`server is zoomin on ${SERVER_PORT}`))