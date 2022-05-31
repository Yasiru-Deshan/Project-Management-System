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
                <button href="#" className="btn btn-danger">View Panels</button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                <h2 className="title">Student Management</h2>
                <button href="#" className="btn btn-danger">View Students</button>
                <button href="#" className="btn btn-danger">Assign Panel</button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                <h2 className="title">Document Templates</h2>
                <button href="#" className="btn btn-danger">View</button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                <h2 className="title">Marking Schemes</h2>
                <button href="#" className="btn btn-danger">View</button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                <h2 className="title">Submission Types</h2>
                <button href="#" className="btn btn-danger">View</button>
                </div>
            </div>
            </main>
        </body>
    )
}