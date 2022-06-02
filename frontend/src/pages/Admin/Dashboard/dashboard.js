import React from 'react';
import { Link } from 'react-router-dom';
import { HeroBg } from '../../../components/Supervisor/HeroSection/HeroElements';
import './styles.css';

export default function Dashboard(){

    return (
        <body className="dasboard-body">
            <HeroBg/>
            <h2 className="dasboard-h2">Admin Dashboard</h2>
            <main className="page-content">
                <div className="card">
                    <div className="content">
                    <h2 className="title">Staff Management</h2>
                    <Link to='/admin/staffmng/viewstaff'><button className="btn btn-danger">View Staff</button></Link>
                    <Link to='/admin/staffmng/panel'><button className="btn btn-danger">View Panels</button></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                    <h2 className="title">Student Management</h2>
                    <Link to='/admin/studentmng/viewstudents'><button  className="btn btn-danger">View Students</button></Link>
                    <Link to='/admin/studentmng/assignpanel'><button className="btn btn-danger">Assign Panel</button></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                    <h2 className="title">Document Templates</h2>
                    <Link to='/admin/doctemplate/view'><button href="#" className="btn btn-danger">View</button></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                    <h2 className="title">Marking Schemes</h2>
                    <Link to='/admin/markingschemes/view'><button href="#" className="btn btn-danger">View</button></Link>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                    <h2 className="title">Submission Types</h2>
                    <Link to='/admin/submissions/view'><button href="#" className="btn btn-danger">View</button></Link>
                    </div>
                </div>
            </main>
        </body>
    )
}