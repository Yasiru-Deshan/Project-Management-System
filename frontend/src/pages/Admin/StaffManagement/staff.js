import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';


export default function StaffManagement(){
    let [staff, setStaff] = useState([]);
    let [search, setSearch] = useState("");

    //search filter
    if(search.length > 0){
        staff = staff.filter((i) => {
            return i.fname.toLowerCase().match(search.toLowerCase()) || i.lname.toLowerCase().match(search.toLowerCase());
        });
    }

    // Fetching staff data
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:8070/admin/staffmng/viewstaff/view');
            setStaff(response.data.staff);
        }
        fetchData();
    });
    
    // Delete staff
    const deleteStaff = async(id,fname, lname) => {
        let deletion;
   
        if(window.confirm("Are you sure about deleting " + fname + " " + lname+ " ?")){
            deletion = await axios.delete(`http://localhost:8070/admin/staffmng/viewstaff/delete/${id}`);
        }
        if(deletion) {
            localStorage.setItem("Staff record of " + fname + lname + ", was deleted successfully!");
            window.location = "/admin/staffmng/viewstaff"
        }    
    }

    //report generation function
    const pdf = () => {
        const loading = document.getElementById('loading');
        loading.style.display = "";//display loading icon
        const dwnIcon = document.getElementById('dwn-icon');
        dwnIcon.style.display = "none";//hide download icn

        setTimeout(() => {  
            loading.style.display = "none";
            dwnIcon.style.display = "";
        }, 1300);//display loading icon for 2 seconds  

        let bodyData = [];
        for(let i = 0; staff.length > i ; i++){
            bodyData.push([staff[i].fname,staff[i].lname, staff[i].email, "0"+staff[i].phoneNo]);
        }
        
        // Save json data to bodydata in order to print in the pdf table
        const doc = new jsPDF({orientation:"portrait"});
        var time = new Date().toLocaleString();
        doc.setFontSize(25);
        doc.text(`Staff Detail's Report`, 105, 12, null, null, "center");
        doc.setFontSize(10);
        doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
        doc.setFontSize(12);
        doc.text("Research Management Tool © 2022 All rights reserved", 105, 22, null, null, "center");
        doc.autoTable({
            theme : 'grid',
            styles: {halign:'center'},
            headStyles:{fillColor:[71, 201, 76]},
            startY:27,
            head: [['First Name','Last Name', 'Email', 'Phone No']],
            body: bodyData
        })
        doc.save('StaffDetailsReport.pdf');
    }

    return(
        <div className="it19184722-myForm-adminDashboard">
            <HeroBg/>
            <h2 className="it19184722-h2">Staff Management</h2>
            <div className="it19184722-headerSection">
                <button onClick={pdf} className="btn it19184722-trans-green-btn">
                <svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{display:'none'}}></span> Download</button>
                <input id="it19184722-search-filter" className="form-control" type="text" placeholder="Search by first name or last name" onChange={(e) => {setSearch(e.target.value)}} value={search}/>
            </div>
            <div className="it19184722-myTable">
                <table className="it19184722-table">
                    <thead className="it19184722-thead">
                        <tr >
                            <th className="it19184722-th">First Name</th>
                            <th className="it19184722-th">Last Name</th>
                            <th className="it19184722-th">Email</th>
                            <th className="it19184722-th">Phone No</th>
                            <th className="it19184722-th">Action</th>
                        </tr>
                    </thead>
                    <tbody className="it19184722-tbody">
                        {staff.map((staffs) => {
                                return(
                                    <tr key={staffs._id} className="it19184722-tr">
                                        <td className="it19184722-td">{staffs.fname}</td>
                                        <td className="it19184722-td">{staffs.lname}</td>
                                        <td className="it19184722-td">{staffs.email}</td>
                                        <td className="it19184722-td">{"0"+staffs.phoneNo}</td>
                                        <td className="it19184722-td">
                                            <Link className="btn it19184722-green-btn it19184722-mybtn" to={`/admin/staffmng/viewstaff/edit/${staffs._id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                </svg>
                                            Update
                                            </Link>
                                            <button onClick={() => deleteStaff(staffs._id, staffs.fname, staffs.lname)} className="btn btn-danger it19184722-mybtn it19184722-red-btn ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                            Delete</button>
                                        </td>
                                    </tr>
                                )
                        })}   
                    </tbody>
                </table>
            </div>
        </div>
    );
}