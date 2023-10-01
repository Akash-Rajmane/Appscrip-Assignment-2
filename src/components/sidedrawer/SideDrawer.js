import React from 'react';
import "./SideDrawer.css"; 
import { NavLink } from 'react-router-dom';

const SideDrawer = ({show,onClick}) => {
  return (
    <aside className={`${show?"visible":"hide"}`}>
        <ul className='navlinks'>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/patients">Patients</NavLink></li>
            <li><NavLink to="/hr">Human Resources</NavLink></li>
            <li><NavLink to="/clinical">Clinical</NavLink></li>
            <li><NavLink to="/compliance">Compliance</NavLink></li>
            <li><NavLink to="/billing">Billing</NavLink></li>
            <li><NavLink to="/reports">Reports</NavLink></li>
        </ul>
    </aside>
  )
}

export default SideDrawer;