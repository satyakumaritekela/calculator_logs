import io from "socket.io-client";
import port from "../../server";

const socketUrl =  `http://localhost:${port}`;

export const socket = io(socketUrl);