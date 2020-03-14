# Overview

Personal project to experiment with multiple technologies and test setup, configuration and security. This project has two parts: a public side where users provide content and an admin dashboard where authenticated users manage user provided content.

# Requirements

- Node 12
- Docker 19

# Setup

The client side uses React as the view layer and Mobx to manage state. Code that retrieves and transforms data is written in TypeScript. Sass is used for styling and Webpack for bundling. API responses are mocked on the client-side using Mirage JS (see `mocks` directory.) To get started:

1. `$ cd src/client`  
2. `$ npm install`
3. `$ npm run dev`
4. Browse to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

The server side runs on Express, all data is stored in MongoDB. To get started on the server side:

1. `$ cd src/server`  
2. `$ npm install`
3. `$ node server/server.js`
4. Browse to [http://localhost:8000/api](http://localhost:8000/api)

# Testing

The application is bundled using Docker and it can be brought up along its supporting services (Nginx and MongoDB) to simulate a production environment. To run the dockerized application:

1. Create an `.env` file by copying `.env.sample`, modify its contents to match your preferences
2. Run the project from within `docker` container `$ docker-compose up`
3. Browse to [http://localhost:8080/admin/login](http://localhost:8080/admin/login)

# Project structure

```
.
├── README.md
├── client
│   ├── dist
│   ├── mocks
│   │   └── server.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── admin.html
│   │   └── guests.html
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
│   │   │   │   ├── App.js
│   │   │   │   ├── Login
│   │   │   │   │   └── index.jsx
│   │   │   │   ├── Uploads
│   │   │   │   │   └── index.jsx
│   │   │   │   └── index.jsx
│   │   │   └── Guests
│   │   │       ├── App.js
│   │   │       └── index.jsx
│   │   ├── services
│   │   │   └── Uploads.ts
│   │   └── stores
│   │       └── UploadStore.ts
│   ├── tsconfig.json
│   └── webpack
│       ├── webpack.config.dev.js
│       └── webpack.config.prod.js
├── docker
│   ├── Dockerfile
│   ├── docker-compose.dev.yml
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

## Notes

_This is an ongoing and incomplete project, do not use it in production before observing security practices_

