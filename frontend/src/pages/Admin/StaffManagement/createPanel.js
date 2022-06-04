import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';

export default function CreatePanel() {
    const [panel, setPanelName] = useState("");
    const [supervisor_01, setSupervisor_01] = useState("");
    const [supervisor_02, setSupervisor_02] = useState("");
    const [supervisor_03, setSupervisor_03] = useState("");
    const [supervisor_04, setSupervisor_04] = useState("");
    const [staff, setStaff] = useState([]);
    

    // Fetching staff data
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:8070/admin/staffmng/viewstaff/view');
            setStaff(response.data.staff);
        }
        fetchData();
    });

    // Create new panel
    const panelFormSubmit = (async(e) => {
        e.preventDefault();

        const response = await axios.post(`http://localhost:8070/admin/staffmng/panel/add`, {panel, supervisor_01, supervisor_02, supervisor_03, supervisor_04})
        if(response){
            window.location = "/admin/staffmng/panel";
        }
    });

    // Navigate to the panel management page after cancelling the task
    const cancelReset = () => {
        window.location = "/admin/staffmng/panel";
    }
 
    return (
        <div className="it19184722-myForm-adminDashboard">
            <h2 className="it19184722-h2">Panel Management</h2>
            <HeroBg/>
            <form onSubmit={panelFormSubmit} className="form-group it19184722-myForm">
                <h2>Create Panel</h2>
                <label>Panel Name</label>
                <input className="form-control" type="text" name="panel" placeholder='Enter panel name' required onChange={(e) => {setPanelName(e.target.value);}} value={panel} /><br/>
                <label>First Supervisor Name</label>
                <select className="form-control"  onChange={(e) => {setSupervisor_01(e.target.value);}} value={supervisor_01}>
                    {staff.map((staff)=>                    
                        <option value={staff.fname}>{staff.fname} {staff.lname}</option>
                    )}
                </select>
                <br/>
                <label>Second Supervisor Name</label>
                <select className="form-control"  onChange={(e) => {setSupervisor_02(e.target.value);}} value={supervisor_02}>
                    {staff.map((staff)=>                  
                        <option value={staff.fname}>{staff.fname} {staff.lname}</option>
                    )}
                </select>
                <br/>
                <label>Third Supervisor Name</label>
                <select className="form-control"  onChange={(e) => {setSupervisor_03(e.target.value);}} value={supervisor_03}>
                    {staff.map((staff)=>                     
                        <option value={staff.fname}>{staff.fname} {staff.lname}</option>
                    )}
                </select>
                <br/>
                <label>Fourth Supervisor Name</label>
                <select className="form-control"  onChange={(e) => {setSupervisor_04(e.target.value);}} value={supervisor_04}>
                    {staff.map((staff)=>                     
                        <option value={staff.fname}>{staff.fname} {staff.lname}</option>
                    )}
                </select>
                <br/>
                <button className="btn btn-success" id="customerEditBtn">Create</button>
                <input id="cancelButton2" type="button" value="Cancel" onClick={cancelReset} className="btn-danger it19184722-red-btn btn" /> 
            </form>
        </div>
    )
}