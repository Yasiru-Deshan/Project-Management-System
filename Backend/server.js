const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config();

//import topic routes
const topicRoutes = require('./routes/Topic')

// import Panel routes
const PanelRoute = require('./routes/Panel');
// import Staff routes - Admin Side
// const StaffRoute = require('./routes/ViewStaff');
// import Student routes - Admin Side
// const StudentRoute = require('./routes/ViewStudents');
// import Student routes - Admin Side
// const AssignPanelRoute = require('./routes/AssignPanel');

const PORT = process.env.PORT||8070;

app.use(cors());


app.use(express.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
       useNewUrlParser: true,
       useUnifiedTopology: true
     
});


const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb connection success!");
});


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
});

app.use("/api/topics", topicRoutes);

// Create routes to Panel
app.use("/admin/staffmng/panel", PanelRoute);
// Create routes to Staff - Admin side
// app.use("/admin/staffmng/viewstaff", StaffRoute);
// Create routes to Student - Admin side
// app.use("/admin/studentmng/viewstudents", StudentRoute);
// Create routes to assign panel - Admin side
// app.use("/admin/studentmng/assignpanel", AssignPanelRoute);
