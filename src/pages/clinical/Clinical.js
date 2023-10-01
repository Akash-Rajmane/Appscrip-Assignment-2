import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import "./Clinical.css";

const Clinical = () => {
  return (
    <div className='clinical'>
      <Sidebar/>
      <Outlet/>      
    </div>
  )
}

export default Clinical;