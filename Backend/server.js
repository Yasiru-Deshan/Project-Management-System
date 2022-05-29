const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const { Server } = require("socket.io");
const http = require("http");
require('dotenv').config();
//Routes
const userRoutes = require('./routes/user-route');
const awsRoutes = require('./routes/aws-route');
const topicRoutes = require('./controllers/Topic')

const app = express();
app.use(cors());
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.use('/api/auth', userRoutes);
app.use('/api/aws', awsRoutes);
app.use("/api/topics", topicRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${5000}`));

const server = http.createServer(app);
 
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  //console.log("SERVER RUNNING");
});

