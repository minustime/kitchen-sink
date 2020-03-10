FROM node:12 AS builder

WORKDIR /tmp
COPY client ./client 
RUN cd client && npm install && npm run build

FROM node:12 
WORKDIR /opt/sample-project
COPY --from=builder /tmp/client .
COPY server ./server
RUN cd server && npm install

ENTRYPOINT [ "node", "server/server.js" ]


