import React from 'react';
import "./TasksHeader.css";

const TasksHeader = () => {
  return (
    <div className='tasksheader'>
        <div className='inputbox'> 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 11686">
                <path id="Ellipse 347" d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Line 156" d="M16.4453 16.4453L21.0013 21.0013" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
            <input type="text" placeholder='Search'/>
        </div>
        <div className="input-date">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="lucide:calendar-days">
                <g id="Group">
                <path id="Vector" d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#04095A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="#04095A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
            </svg>
            <input type="text" placeholder='From date'/>
        </div>
        <div className='to'>to</div>
        <div className="input-date">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="lucide:calendar-days">
                <g id="Group">
                <path id="Vector" d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#04095A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="#04095A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
            </svg>
            <input type="text" placeholder='To date'/>
        </div>
        <div className='btn-box'>
            <button className='apply-btn'>Apply</button>
            <button className='rst-btn'>Reset</button>
        </div>
        <button className="fltr-btn">
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M7.36667 6.18324V10.956H4.7V6.18324L0 0.046875H12.0667L7.36667 6.18324ZM6.03333 5.70597L9.33333 1.41051H2.73333L6.03333 5.70597Z" fill="#04095A"/>
            </svg>
            <span>
                Filter
            </span></button>
    </div>
  )
}

export default TasksHeader;