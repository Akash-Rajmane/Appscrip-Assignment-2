import React,{useState} from 'react';
import "./Tasks.css";
import Upcoming from './Upcoming';
import Completed from './Completed';

const Tasks = () => {
  const [task, setTask] = useState("upcoming");

  return (
    <div className='tasks-box'>
      <div className='upbox'>
        <h3>Tasks</h3>
        <p>Clinical &#8250; Tasks</p>
        <div className='sub-nav'>
          <span onClick={()=>setTask("upcoming")} className={`${task==="upcoming"?"active-class": ""}`}>Upcoming Tasks</span>
          <span  onClick={()=>setTask("completed")}  className={`${task==="completed"?"active-class": ""}`}>Completed Tasks</span>
        </div>
      </div>
      <div className='tasks'>
        {task==="upcoming"?<Upcoming/>:<Completed/>}
      </div>
      
    </div>
  )
}

export default Tasks;