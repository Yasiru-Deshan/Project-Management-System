import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';

export default function UpdatePanel() {
    const [panel, setPanelName] = useState("");
    const [supervisor_01, setSupervisor_01] = useState("");
    const [supervisor_02, setSupervisor_02] = useState("");
    const [supervisor_03, setSupervisor_03] = useState("");
    const [supervisor_04, setSupervisor_04] = useState("");

    const {id} = useParams();

    useEffect (() => {
        async function fetchData(){
            const response = (await axios.get(`http://localhost:8070/admin/staffmng/panel/edit/${id}`)).data;
            setPanelName(response.panel);
            setSupervisor_01(response.supervisor_01);
            setSupervisor_02(response.supervisor_02);
            setSupervisor_03(response.supervisor_03);   
            setSupervisor_04(response.supervisor_04); 
        }
        fetchData();
    }, [id]);
    
    const panelFormSubmit = (async(e) => {
        e.preventDefault();

        const response = await axios.put(`http://localhost:8070/admin/staffmng/panel/edit/${id}`, {panel, supervisor_01, supervisor_02, supervisor_03, supervisor_04})
        if(response){
            window.location = "/admin/staffmng/panel";
        }
    });

    const cancelReset = () => {
        window.location = "/admin/staffmng/panel";
    }
 
    return (
        <div className="it19184722-myForm-adminDashboard">
            <h2 className="it19184722-h2">Panel Management</h2>
            <HeroBg/>
            <form onSubmit={panelFormSubmit} className="form-group it19184722-myForm">
                <h2>Update Panel</h2>
                <label>Panel Name</label>
                <input className="form-control" type="text" name="panel" placeholder='Enter panel name' required onChange={(e) => {setPanelName(e.target.value);}} value={panel} /><br/>
                <label>First Supervisor Name</label>
                <input className="form-control" type="text" name="supervisor_01" placeholder='Enter 1st supervisor name' required onChange={(e) => {setSupervisor_01(e.target.value);}} value={supervisor_01} /><br/>
                <label>Second Supervisor Name</label>
                <input className="form-control" type="text" name="supervisor_02" placeholder='Enter 2nd supervisor name' required onChange={(e) => {setSupervisor_02(e.target.value);}} value={supervisor_02} /><br/>
                <label>Third Supervisor Name</label>
                <input className="form-control" type="text" name="supervisor_03" placeholder='Enter 3rd supervisor name' required onChange={(e) => {setSupervisor_03(e.target.value);}} value={supervisor_03} /><br/>
                <label>Fourth Supervisor Name</label>
                <input className="form-control" type="text" name="supervisor_04" placeholder='Enter 4th supervisor name' required onChange={(e) => {setSupervisor_04(e.target.value);}} value={supervisor_04} /><br/>
                <button className="btn btn-success" id="customerEditBtn">Update</button>
                <input id="cancelButton2" type="button" value="Cancel" onClick={cancelReset} className="btn-danger it19184722-red-btn btn" />       
            </form>
        </div>
    )
}