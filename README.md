# Overview

Sample application to test project structure and configuration. 

This project has two parts, a public site where users can upload files and an admin dashboard where an authenticated user can accept or reject uploaded files.

# Requirements

- Node 12.x
- Docker

# Setup

To work on the client side

1. `$ cd src/client`  
2. `$ npm install`
3. `$ npm run dev`
4. Browse to [http://localhost:3000](http://localhost:3000)

To work on the server side

1. `$ cd src/server`  
2. `$ npm install`
3. `$ node server/server.js`
4. Browse to [http://localhost:8000/api](http://localhost:8000/api)

# Dockerized

To run the complete application.

1. Create an `.env` file by copying `.env.sample`, modify contents
2. Run project from within `docker` container `$ docker-compose up`
3. Browse to [http://localhost:8080/login](http://localhost:8080/login)

# Project structure


```
.
├── README.md
├── client
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── admin.html
│   │   └── dashboard.html
│   ├── src
│   │   ├── components
│   │   │   ├── Button
│   │   │   │   ├── Button.scss
│   │   │   │   └── index.jsx
│   │   │   └── Icon
│   │   │       ├── Button.scss
│   │   │       └── index.jsx
│   │   ├── containers
│   │   │   ├── Admin
│   │   │   │   └── index.jsx
│   │   │   └── Dashboard
│   │   │       ├── index.jsx
│   │   │       └── screens
│   │   │           ├── Login
│   │   │           │   └── index.jsx
│   │   │           └── Manage
│   │   │               └── index.jsx
│   │   └── stores
│   ├── tsconfig.json
│   └── webpack
│       ├── webpack.config.dev.js
│       └── webpack.config.prod.js
├── docker
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── mongo
│   │   └── mongo.conf
│   └── nginx
│       └── default.conf
└── server
    ├── db
    │   ├── index.js
    │   └── models
    │       └── upload.js
    ├── package-lock.json
    ├── package.json
    ├── server.js
    └── uploads
```
