import { Server } from "socket.io";

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      cors: {
        origin: ["*"],
      },
    });

    io.on("connection", (socket) => {
      socket.on("chat message", (msg) => {
        socket.broadcast.emit("chat message", { msg });
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("socket.io already running");
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;
