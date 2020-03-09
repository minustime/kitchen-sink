# Overview

Sample application to test project structure and configuration.

# Requirements

Node 10.x
Docker 

# Setup

1. Clone project
2. Install client-side dependencies `$ cd src/client && npm install`

# Usage

1. Run project `$ docker-compose -f docker/docker-compose.yml up`
2. Browse to [http://localhost:8080](http://localhost:8080)

# Development

To work on the client side

1. `$ cd src/client`  
2. `$ npm run dev`
3. Browse to [http://localhost:3000](http://localhost:3000)


# Project structure


```
.
├── Dockerfile
├── README.md
├── client
│   ├── dist
│   │   ├── 1.css
│   │   ├── 1.js
│   │   ├── 3.css
│   │   ├── 3.js
│   │   ├── 4.css
│   │   ├── 4.js
│   │   ├── 5.js
│   │   ├── admin.js
│   │   ├── dashboard.js
│   │   └── vendor.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── admin.html
│   │   ├── dashboard.html
│   │   └── dist
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
│   └── webpack
│       ├── webpack.config.dev.js
│       └── webpack.config.prod.js
├── docker
│   ├── docker-compose.yml
│   ├── mongo
│   │   └── mongo.conf
│   └── nginx
│       ├── certs
│       └── default.conf
├── server
│   ├── public
│   ├── server.js
│   └── uploads
└── tsconfig.json
```
