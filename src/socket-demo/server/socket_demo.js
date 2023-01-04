import { Server } from "socket.io";

export function initIO(httpServer) {
  let io = new Server(httpServer, {
    cors: {
      origin: "http://127.0.0.1:5500",
      credentials: true,
    },
    allowEIO3: true,
  });

  io.on("connection", (socket) => {
    console.log(`user ${socket.id} connected`);

    socket.on("hello", (arg) => {
      console.log(arg.name);
      socket.emit("receive", arg.name);
    });
  });
}
