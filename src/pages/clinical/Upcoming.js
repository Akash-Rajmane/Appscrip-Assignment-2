import React from 'react'
import TasksHeader from '../../components/tasksheader/TasksHeader';
import "./Upcoming.css";
import Card from '../../components/card/Card';

const Upcoming = () => {
  return (
    <div className='upcoming'>
      <TasksHeader/>
      <p className='headertext'>Thursday, 28 Dec 2022</p>
      <Card
      textHeading={"Date & time"}
      textData={"10:30 AM"}
      status={"Overdue"}
      description={"Intake Comphrensive Assessment"}
      btnText={"Start Assessment"}
      />
      <p className='headertext'>Wednesday, 27 Dec 2022</p>
      <Card
      textHeading={"Date & time"}
      textData={"10:30 AM"}
      status={"Upcoming"}
      description={"Physiotherapy Assessment"}
      btnText={"Continue Assessment"}
      />
      <Card
      textHeading={"Date & time"}
      textData={"10:30 AM"}
      status={"Overdue"}
      description={"Intake Comphrensive Assessment"}
      btnText={"Start Assessment"}
      />
    </div>
  )
}

export default Upcoming;