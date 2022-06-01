import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';


export default function AssignPanel(){

        let [search, setSearch] = useState("");
        let [studentGrp,setStudentGrp] = useState([]);
        let [assignpanel, setPanel] = useState([]);
        
        // Fetching all the student groups
        useEffect(()=>{
            function viewStudentGrp(){
                axios.get("http://localhost:8070/admin/studentmng/assignpanel/viewstudentgrp").then((res)=>{
                    setStudentGrp(res.data);            
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            viewStudentGrp();
        },[]);

        // Fetching all the panel
        useEffect(()=>{
            function viewPanel(){
                axios.get("http://localhost:8070/admin/studentmng/assignpanel/view").then((res)=>{
                    setPanel(res.data);          
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            viewPanel();
        }, []);


        // Search student groups by group name
        if(search.length > 0){
            studentGrp = studentGrp.filter((i) => {
              return i.grpname.toLowerCase().match(search.toLowerCase());
          });
        }

        // Assign panel
        const getPanel = e=>{setPanel(e.target.value);}

        const assignPanel = async(id) => {
        let assign;
     
        if(window.confirm("Are you assign "+ assignpanel +" to this student group?")){
          assign = await axios.post(`http://localhost:8070/admin/studentmng/assignpanel/assign/${id}`, { assignpanel });
        }
        if(assign) {
            localStorage.setItem("Assigned panel, Successfully!");
            window.location = "/admin/studentmng/assignpanel"
        }
           
      }
        //Generate Order report
    //     const pdf = () => {
    //       const loading = document.getElementById('loading');
    //       loading.style.display = "";//display loading icon
    //       const dwnIcon = document.getElementById('dwn-icon');
    //       dwnIcon.style.display = "none";//hide download icn
  
    //       setTimeout(() => {  
    //           loading.style.display = "none";
    //           dwnIcon.style.display = "";
    //       }, 1300);//display loading icon for 2 seconds  
  
    //       let bodyData = [];
    //       for(let i = 0; msg.length > i ; i++){
    //           bodyData.push([msg[i].fullName, msg[i].email,"0"+msg[i].phoneNo, msg[i].status]);
    //       }//save json data to bodydata in order to print in the pdf table
  
    //       const doc = new jsPDF({orientation:"portrait"});
    //       var time = new Date().toLocaleString();
    //       doc.setFontSize(20);
    //       doc.text(`Received Messages Report`, 105, 13, null, null, "center");
    //       doc.setFontSize(10);
    //       doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
    //       doc.setFontSize(12);
    //       doc.text("FlickPlix © 2021 All rights reserved", 105, 22, null, null, "center");
          
    //       doc.autoTable({
    //           theme : 'grid',
    //           styles: {halign:'center'},
    //           headStyles:{fillColor:[71, 201, 76]},
    //           startY:27,
    //           head: [['User Name','Email','Phone No','Status']],
    //           body: bodyData
    //       })
    //       doc.save('ReceivedMessagesReport.pdf');
    //   }


      
        return (
        <body className="it19184722-myForm-adminDashboard">
            
          <h2 className="it19184722-h2">Student Group Management</h2>

          {/* Generate Report */}
          {/* <div className="it19184722-headerSection">
          <button onClick={pdf} className="btn it19184722-trans-green-btn"><svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
          <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
          </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{display:'none'}}></span> Download</button> */}
          
          {/* Search filter */}
          <input id="it19184722-search-filter" className="form-control" type="text" placeholder="Search by Group name" onChange={(e) => {setSearch(e.target.value)}} value={search}/>
          {/* </div> */}

          <form>    
            {studentGrp.map((stdGrp) =>
                <div className="row justify-content-center ">
                    <HeroBg/>
                    <div className="col-xl-10">
                        
                        <div className="it19184722-contacttbl">
                            <div className="card-h-label">
                                <label className="mb-1">Group Name :  {stdGrp.grpname}</label><br/>
                            </div>
                            <div className="card-body pt-0">
                                <hr className="my-0" />
                                <label className="mb-1">Full Name : {stdGrp.name}</label><br/>
                                <label className="mb-1">Email : {stdGrp.email}</label><br/>
                                <hr className="my-2" />
                                {/* <p className="mb-1">Message : <br/>{post.message}</p><br/> */}
                                <hr className="my-2" />
                                <label className="mb-1">Assign a panel : </label>
                                    <select onChange={getPanel} value={assignPanel} name="approval" id="panel">
                                        <option value={stdGrp.assignpanel}>{stdGrp.assignpanel}</option>
                                        {/* {assignpanel.map( (panel) =>
                                            <option value={panel.panel}>{panel.panel}</option>
                                        )} */}
                                        <option value='Panel_01'>Panel_01</option>
                                        <option value='Panel_02'>Panel_02</option>
                                        <option value='Panel_03'>Panel_03</option>
                                        <option value='Panel_04'>Panel_04</option>
                                    </select>
                            </div>
                            {/* Assign panel */}
                            <button type="submit" onClick={() => assignPanel(stdGrp._id)} className="btn btn-primary float-right">Assign</button>
                        </div>
                    </div>
                </div>
                
            )}
          </form>
  </body>
  )
}