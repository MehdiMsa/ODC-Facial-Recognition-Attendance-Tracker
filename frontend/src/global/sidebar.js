import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({sidebar}) => {
    return (
        <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
            <li><Link to="/Dashboard"><i className="ri-team-line"></i>Cohorts</Link></li>
            <li><Link to="/attendance"><i className="ri-file-chart-line"></i>Attendance</Link></li>
            <li><Link to="/"><i className="ri-file-chart-line"></i>Logout</Link></li>
        </div>
    );
};

export default Sidebar
