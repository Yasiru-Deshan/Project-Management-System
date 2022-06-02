import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';

export default function UpdateCustomer() {
    const [panel, setPanelName] = useState("");
    const [supervisor_01, setSupervisor_01] = useState("");
    const [supervisor_02, setSupervisor_02] = useState("");
    const [supervisor_03, setSupervisor_03] = useState("");
    const [supervisor_04, setSupervisor_04] = useState("");
    const [panels, setPanels] = useState([]);

    // Fetching panel data
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:8070/admin/staffmng/panel/view');
            setPanels(response.data.panel);
        }
        fetchData();
    });
    
    const panelFormSubmit = (async(e) => {
        e.preventDefault();

        const response = await axios.post(`http://localhost:8070/admin/staffmng/panel/add`, {panel, supervisor_01, supervisor_02, supervisor_03, supervisor_04})
            if(response){
                window.location = "/admin/staffmng/panel";
            }
    });

    // Delete panel
    const deletePanel = async(id, panel) => {
        let deletion;
   
        if(window.confirm("Are you sure about deleting " + panel + " ?")){
            deletion = await axios.delete(`http://localhost:8070/admin/staffmng/panel/delete/${id}`);
        }
        if(deletion) {
            localStorage.setItem("Panel record of " + panel + ", was deleted successfully!");
            window.location = "/admin/staffmng/panel/"
        }    
    }


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
                <input className="form-control" type="text" name="panel" required onChange={(e) => {setPanelName(e.target.value);}} value={panel} /><br/>
                <label>First Supervisor Name</label>
                <input className="form-control" type="text" name="supervisor_01" required onChange={(e) => {setSupervisor_01(e.target.value);}} value={supervisor_01} /><br/>
                <label>Second Supervisor Name</label>
                <input className="form-control" type="text" name="supervisor_02" required onChange={(e) => {setSupervisor_02(e.target.value);}} value={supervisor_02} /><br/>
                <label>Third Supervisor Name</label>
                <input className="form-control" type="text" name="supervisor_03" required onChange={(e) => {setSupervisor_03(e.target.value);}} value={supervisor_03} /><br/>
                <label>Fourth Supervisor Name</label>
                <input className="form-control" type="text" name="supervisor_04" required onChange={(e) => {setSupervisor_04(e.target.value);}} value={supervisor_04} /><br/>
                <button className="btn btn-success" id="customerEditBtn">Create</button>
                <input id="cancelButton2" type="button" value="Cancel" onClick={cancelReset} className="btn-danger it19184722-red-btn btn" />       
            </form>
            <div className="it19184722-myTable">
        <table className="it19184722-table">
            <thead className="it19184722-thead">
                <tr >
                    <th className="it19184722-th">Panel Name</th>
                    <th className="it19184722-th">1st Supervisor Name</th>
                    <th className="it19184722-th">2nd Supervisor Name</th>
                    <th className="it19184722-th">3rd Supervisor Name</th>
                    <th className="it19184722-th">4th Supervisor Name</th>
                    <th className="it19184722-th">Action</th>

                </tr>
            </thead>
            <tbody className="it19184722-tbody">
                {panels.map((panel) => {
                        return(
                            <tr key={panel._id} className="it19184722-tr">
                                <td className="it19184722-td">{panel.panel}</td>
                                <td className="it19184722-td">{panel.supervisor_01}</td>
                                <td className="it19184722-td">{panel.supervisor_02}</td>
                                <td className="it19184722-td">{panel.supervisor_03}</td>
                                <td className="it19184722-td">{panel.supervisor_04}</td>
                                <td className="it19184722-td">
                                    <Link className="btn it19184722-green-btn it19184722-mybtn"
                                    to={`/admin/staffmng/panel/edit/${panel._id}`}
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>Update</Link>
                                    <button onClick={() => deletePanel(panel._id, panel.panel)} className="btn btn-danger it19184722-mybtn it19184722-red-btn "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
                                    Delete</button>
                                </td>
                            </tr>
                        )
                    })}   
            </tbody>
        </table>
        </div>
        </div>
    )
    }