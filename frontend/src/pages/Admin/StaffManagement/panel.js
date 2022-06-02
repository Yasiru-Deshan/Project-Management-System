import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';

export default function PanelManagement() {
    const [panels, setPanels] = useState([]);

    // Fetching panel data
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:8070/admin/staffmng/panel/view');
            setPanels(response.data.panel);
        }
        fetchData();
    });

    // Delete the panel
    const deletePanel = async(id, panel) => {
        let deletion;
   
        if(window.confirm("Are you sure about deleting " + panel + " ?")){
            deletion = await axios.delete(`http://localhost:8070/admin/staffmng/panel/delete/${id}`);
        }
        if(deletion) {
            localStorage.setItem("Panel record of " + panel + ", was deleted successfully!");
            window.location = "/admin/staffmng/panel/";
        }    
    }
 
    return (
        <div className="it19184722-myForm-adminDashboard">
            <h2 className="it19184722-h2">Panel Management</h2>
            <HeroBg/>
            <Link to="/admin/staffmng/panel/create" className="btn it19184722-green-btn-upload">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
            Create new panel
            </Link>
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
                                        <Link className="btn it19184722-green-btn it19184722-mybtn" to={`/admin/staffmng/panel/edit/${panel._id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                        Update
                                        </Link>
                                        <button onClick={() => deletePanel(panel._id, panel.panel)} className="btn btn-danger it19184722-mybtn it19184722-red-btn ">
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
    )
}