import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';

export default function UpdateCustomer() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNo, setphone] = useState("");

    const {id} = useParams();

    useEffect (() => {
        async function fetchData(){
            const response = (await axios.get(`http://localhost:8070/admin/studentmng/viewstudents/edit/${id}`)).data;
            setfname(response.fname);
            setlname(response.lname);
            setemail(response.email);
            setphone(response.phoneNo);   
        }
        fetchData();
    }, [id]);
    
    const studentFormSubmit = (async(e) => {
        e.preventDefault();

        const response = await axios.put(`http://localhost:8070/admin/studentmng/viewstudents/edit/${id}`, {fname, lname, email, phoneNo})
            if(response){
                // localStorage.setItem('Customer record of ' +response.data.fname +', was updated successfully! 😃');
                window.location = "/admin/studentmng/viewstudents";
            }
    });

    const cancel = () => {
        window.location = "/admin/studentmng/viewstudents";
    }
 
    return (
        <div className="it19184722-myForm-adminDashboard">
            <h2 className="it19184722-h2">Student Management</h2>
            <HeroBg/>
            <form onSubmit={studentFormSubmit} className="form-group it19184722-myForm">
                <h2>Edit Student Details</h2>
                <label>First Name</label>
                <input className="form-control" type="text" name="fname" required onChange={(e) => {setfname(e.target.value);}} value={fname} /><br/>
                <label>Last Name</label>
                <input className="form-control" type="text" name="lname" required onChange={(e) => {setlname(e.target.value);}} value={lname} /><br/>
                <label>Email</label>
                <input className="form-control" type="email" name="email" required onChange={(e) => {setemail(e.target.value);}} value={email} /><br/>
                <label>Phone No</label>
                <input className="form-control" type="text" name="phoneNo" required onChange={(e) => {setphone(e.target.value);}} value={phoneNo} /><br/>
                <button className="btn it19184722-green-btn it19184722-mybtn" id="customerEditBtn">Update</button>
                <input id="cancelButton2" type="button" value="Cancel" onClick={cancel} className="btn-danger it19184722-red-btn btn" />       
            </form>
        </div>
    )
    }