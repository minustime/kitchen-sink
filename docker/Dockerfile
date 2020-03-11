FROM node:12 AS builder

# Copy the client files and build them
ENV PUBLIC_PATH=http://localhost:8080/dist/
WORKDIR /tmp
COPY client ./client 
RUN cd client && npm install && npm run build

# Copy the server, install dependencies and copy compiled client from previous stage
FROM node:12 
WORKDIR /opt/app
COPY --from=builder /tmp/client/dist ./client/dist
COPY --from=builder /tmp/client/public ./client/public
COPY server ./server
RUN cd server && npm install

ENTRYPOINT [ "node", "server/server.js" ]