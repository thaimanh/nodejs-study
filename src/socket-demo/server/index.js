import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
const port = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost:8080" } });

// app.use(express.static("public"));

io.on("connection", function (socket) {
  console.log("User connected: " + socket.id);
  socket.on("hello", (user) => {
    socket.emit("receive", user.lastName, user.firstName);
  });
});

server.listen(port, function () {
  console.log("App listening on port " + port);
});
