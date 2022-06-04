import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';

export default function UpdateStaff() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNo, setphone] = useState("");

    const {id} = useParams();

    // Fetching staff details
    useEffect (() => {
        async function fetchData(){
            const response = (await axios.get(`http://localhost:8070/admin/staffmng/viewstaff/edit/${id}`)).data;
            setfname(response.fname);
            setlname(response.lname);
            setemail(response.email);
            setphone(response.phoneNo);   
        }
        fetchData();
    }, [id]);
    
    // Update staff details
    const staffFormSubmit = (async(e) => {
        e.preventDefault();

        const response = await axios.put(`http://localhost:8070/admin/staffmng/viewstaff/edit/${id}`, {fname, lname, email, phoneNo})
        if(response){
            window.location = "/admin/staffmng/viewstaff";
        }
    });

    // Navigate to the staff management page after cancelling the task
    const cancelReset = () => {
        window.location = "/admin/staffmng/viewstaff";
    }
 
    return (
        <div className="it19184722-myForm-adminDashboard">
            <h2 className="it19184722-h2">Staff Management</h2>
            <HeroBg/>
            <form onSubmit={staffFormSubmit} className="form-group it19184722-myForm">
                <h2>Edit Staff Details</h2>
                <label>First Name</label>
                <input className="form-control" type="text" name="fname" placeholder='Enter first name' required onChange={(e) => {setfname(e.target.value);}} value={fname} /><br/>
                <label>Last Name</label>
                <input className="form-control" type="text" name="lname" placeholder='Enter last name' required onChange={(e) => {setlname(e.target.value);}} value={lname} /><br/>
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder='Enter email' required onChange={(e) => {setemail(e.target.value);}} value={email} /><br/>
                <label>Phone No</label>
                <input className="form-control" type="tel" pattern="[0-9]{9}" name="phoneNo" placeholder='Enter phone number [ Ex: 761234567 ]' required onChange={(e) => {setphone(e.target.value);}} value={phoneNo} /><br/>
                <button className="btn it19184722-green-btn it19184722-mybtn" id="customerEditBtn">Update</button>
                <input id="cancelButton2" type="button" value="Cancel" onClick={cancelReset} className="btn-danger it19184722-red-btn btn" />       
            </form>
        </div>
    )
}