import io from "socket.io-client";

// localhost port
const port = process.env.PORT || 3001;

const socketUrl =  `http://localhost:${port}`;

export const socket = io(socketUrl);