import React from 'react'
import TasksHeader from '../../components/tasksheader/TasksHeader';
import Card from '../../components/card/Card';
import "./Completed.css";

const Completed = () => {
  return (
    <div className='completed'>
      <TasksHeader/>
      <Card
      textHeading={"Completed On"}
      description={"Intake Comphrensive Assessment"}
      btnText={"View Assessment"}
      />
       <Card
      textHeading={"Completed On"}
      description={"Physiotherapy Assessment"}
      btnText={"View Assessment"}
      />
       <Card
      textHeading={"Completed On"}
      description={"Intake Comphrensive Assessment"}
      btnText={"View Assessment"}
      />
    </div>
  )
}

export default Completed;