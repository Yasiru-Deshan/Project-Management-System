const connectDB = require('./config/database');
const { Server } = require("socket.io");
const http = require("http");
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');
const passport = require('passport');
const app = express(); 
require("dotenv").config();

const userRoutes = require('./routes/user-route');
const awsRoutes = require('./routes/aws-route');
const topicRoutes = require('./controllers/Topic');
const requestRoutes = require('./controllers/requests');
const groupRoutes = require('./controllers/group');
const presentationRoutes = require('./controllers/presentation');

//import topic routes
const topicRoutes = require('./routes/Topic')

// import Panel routes - Admin side
const PanelRoute = require('./routes/panel');
// import Staff routes - Admin Side
const StaffRoute = require('./routes/viewStaff');
// import Student routes - Admin Side
const StudentRoute = require('./routes/viewStudents');
// import Student routes - Admin Side
const AssignPanelRoute = require('./routes/assignPanel');
// import Document Template routes - Admin Side
const UploadDocTemplate = require('./routes/uploadDocTemplates');
// import Marking Schemes routes - Admin Side
const MarkingSchemes = require('./routes/uploadMarkingSchemes');
// import Submissions routes - Admin Side
const Submissions = require('./routes/uploadSubmissions');
//import user route
const users = require('./routes/users');
//import request a superviosor route
const studentProfile = require('./routes/studentProfile');
//import student register profile route
const requests = require('./routes/requests');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT||8070;


app.use(cors());
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.use('/api/auth', userRoutes);
app.use('/api/aws', awsRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/presenation", presentationRoutes
)

const PORT2 = process.env.PORT || 5000;

app.listen(PORT2, () => console.log(`server started on port ${5000}`));

const server = http.createServer(app);
 
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  //console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    //console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    //console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  //console.log("SERVER RUNNING");
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
});

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);


app.use("/api/topics", topicRoutes);
app.use("/api/topics", topicRoutes);
// Create routes to Panel - Admin side
app.use("/admin/staffmng/panel", PanelRoute);
// Create routes to Staff - Admin side
app.use("/admin/staffmng/viewstaff", StaffRoute);
// Create routes to Student - Admin side
app.use("/admin/studentmng/viewstudents", StudentRoute);
// Create routes to assign panel - Admin side
app.use("/admin/studentmng/assignpanel", AssignPanelRoute);
// Create routes to upload document templates - Admin side
app.use("/admin/doctemplate", UploadDocTemplate);
// Create routes to upload marking schemes - Admin side
app.use("/admin/markingschemes", MarkingSchemes);
// Create routes to upload marking schemes - Admin side
app.use("/admin/submissions", Submissions);
// user route
app.use('/users',users);
// request a superviosor route
app.use('/studentProfile', studentProfile);
// student register profile route
app.use('/requests', requests);