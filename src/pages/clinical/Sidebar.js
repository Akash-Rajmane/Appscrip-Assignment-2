import React from 'react'
import "./Sidebar.css";
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
const {pathname} = useLocation();
const taskColor = `${pathname==="/clinical" ? "#04095A" : "#7e7e7e"}`
const appoColor = `${pathname==="/clinical/appointments" ? "#04095A" : "#7e7e7e"}`

  return (
    <div className='sidebar'>
    <div className='sb-box'>
        <p>MedLife</p>
        <button className='clinical-btn'>
            <div className='inline'> 
                <p className='btn-text'>Add Clinical</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame" clip-path="url(#clip0_234_351)">
                    <path id="Path 12279" d="M19.5 9L12 16.5L4.5 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_234_351">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </button>
        <div>
            <div className={`${pathname==="/clinical/appointments"?"activepath":"hz"}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ant-design:field-time-outlined">
                    <path id="Vector" d="M22.1484 9.65625H16.1484C16.0453 9.65625 15.9609 9.74062 15.9609 9.84375V10.9688C15.9609 11.0719 16.0453 11.1562 16.1484 11.1562H22.1484C22.2516 11.1562 22.3359 11.0719 22.3359 10.9688V9.84375C22.3359 9.74062 22.2516 9.65625 22.1484 9.65625ZM19.0078 12.8438H16.1484C16.0453 12.8438 15.9609 12.9281 15.9609 13.0312V14.1562C15.9609 14.2594 16.0453 14.3438 16.1484 14.3438H19.0078C19.1109 14.3438 19.1953 14.2594 19.1953 14.1562V13.0312C19.1953 12.9281 19.1109 12.8438 19.0078 12.8438ZM11.1867 7.55859H10.1719C10.0266 7.55859 9.90938 7.67578 9.90938 7.82109V13.6336C9.90938 13.718 9.94922 13.7953 10.0172 13.8445L13.507 16.3898C13.6242 16.4742 13.7883 16.4508 13.8727 16.3336L14.475 15.5109V15.5086C14.5594 15.3914 14.5336 15.2273 14.4164 15.143L11.4469 12.9961V7.82109C11.4492 7.67578 11.3297 7.55859 11.1867 7.55859Z" fill={appoColor}/>
                    <path id="Vector_2" d="M18.8625 15.7945H17.5078C17.3766 15.7945 17.2523 15.8625 17.182 15.975C16.8844 16.4461 16.5375 16.882 16.1391 17.2805C15.4523 17.9672 14.6531 18.5063 13.7648 18.8813C12.8437 19.2703 11.8664 19.4672 10.8586 19.4672C9.84844 19.4672 8.87109 19.2703 7.95234 18.8813C7.06406 18.5063 6.26484 17.9672 5.57813 17.2805C4.89141 16.5938 4.35234 15.7945 3.97734 14.9063C3.58828 13.9875 3.39141 13.0102 3.39141 12C3.39141 10.9898 3.58828 10.0148 3.97734 9.09375C4.35234 8.20547 4.89141 7.40625 5.57813 6.71954C6.26484 6.03282 7.06406 5.49375 7.95234 5.11875C8.87109 4.72969 9.85078 4.53282 10.8586 4.53282C11.8687 4.53282 12.8461 4.72969 13.7648 5.11875C14.6531 5.49375 15.4523 6.03282 16.1391 6.71954C16.5375 7.11797 16.8844 7.55391 17.182 8.025C17.2523 8.1375 17.3766 8.20547 17.5078 8.20547H18.8625C19.0242 8.20547 19.1273 8.03672 19.0547 7.89375C17.5266 4.85391 14.4281 2.87813 10.9688 2.83829C5.90391 2.775 1.69688 6.9211 1.6875 11.9813C1.67813 17.0508 5.78672 21.1641 10.8562 21.1641C14.3602 21.1641 17.5102 19.1813 19.0547 16.1063C19.1273 15.9633 19.0219 15.7945 18.8625 15.7945Z" fill={appoColor}/>
                    </g>
                </svg>
                <Link to="/clinical/appointments" className={`${pathname==="/clinical/appointments"?"nav-txt":""}`}>Appointments</Link>
            </div>
        </div>
        <div>
            <div  className={`${pathname==="/clinical"?"activepath":"hz"}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="fluent:tasks-app-20-regular">
                    <path id="Vector" d="M19.2711 16.73L19.3 16.7007V16.6596V4.79999C19.3 4.13695 19.0366 3.50107 18.5678 3.03223C18.0989 2.56339 17.463 2.29999 16.8 2.29999H7.2C6.53696 2.29999 5.90108 2.56339 5.43224 3.03223C4.9634 3.50107 4.7 4.13695 4.7 4.79999V19.2C4.7 19.863 4.9634 20.4989 5.43224 20.9678C5.90108 21.4366 6.53696 21.7 7.2 21.7H13.044H13.282L13.1154 21.53L12.5862 20.99L12.586 20.9897C12.406 20.8075 12.2768 20.5934 12.1962 20.3665L12.1726 20.3H12.102H7.2C6.90826 20.3 6.62848 20.1841 6.42219 19.9778C6.2159 19.7715 6.1 19.4917 6.1 19.2V4.79999C6.1 4.50826 6.2159 4.22847 6.42219 4.02218C6.62848 3.81589 6.90826 3.69999 7.2 3.69999H16.8C17.0917 3.69999 17.3715 3.81589 17.5778 4.02218C17.7841 4.22847 17.9 4.50826 17.9 4.79999V17.8716V18.1147L18.0711 17.942L19.2711 16.73ZM21.4971 17.8928L21.4982 17.8916C21.6252 17.7591 21.6952 17.5819 21.6928 17.3983C21.6905 17.2147 21.6161 17.0394 21.4858 16.9101C21.3554 16.7808 21.1794 16.7079 20.9958 16.7072C20.8122 16.7064 20.6356 16.7778 20.5042 16.906L20.5029 16.9072L16.2028 21.2511L14.3008 19.311C14.3006 19.3108 14.3005 19.3107 14.3003 19.3105C14.2364 19.2436 14.1599 19.19 14.0752 19.1528C13.9902 19.1156 13.8987 19.0956 13.8059 19.094C13.7132 19.0924 13.621 19.1093 13.5349 19.1436C13.4487 19.1779 13.3702 19.2291 13.304 19.294C13.2377 19.359 13.185 19.4364 13.149 19.5219C13.113 19.6074 13.0943 19.6992 13.094 19.7919C13.0938 19.8847 13.1119 19.9766 13.1475 20.0623C13.183 20.1477 13.235 20.2253 13.3007 20.2905C13.3008 20.2907 13.301 20.2908 13.3012 20.291L15.615 22.6516C15.6911 22.7293 15.7819 22.791 15.8821 22.8332C15.9823 22.8755 16.0899 22.8973 16.1987 22.8976C16.3074 22.8978 16.4151 22.8765 16.5155 22.8347C16.6159 22.7929 16.707 22.7316 16.7835 22.6543L21.4971 17.8928ZM9.31924 7.51923C9.56304 7.27543 9.7 6.94478 9.7 6.59999C9.7 6.25521 9.56304 5.92455 9.31924 5.68076C9.07544 5.43696 8.74478 5.29999 8.4 5.29999C8.05522 5.29999 7.72456 5.43696 7.48076 5.68076C7.23697 5.92455 7.1 6.25521 7.1 6.59999C7.1 6.94478 7.23697 7.27543 7.48076 7.51923C7.72456 7.76303 8.05522 7.89999 8.4 7.89999C8.74478 7.89999 9.07544 7.76303 9.31924 7.51923ZM11.4 5.89999C11.2144 5.89999 11.0363 5.97374 10.905 6.10502C10.7738 6.23629 10.7 6.41434 10.7 6.59999C10.7 6.78565 10.7738 6.96369 10.905 7.09497C11.0363 7.22624 11.2144 7.29999 11.4 7.29999H16.2C16.3857 7.29999 16.5637 7.22624 16.695 7.09497C16.8263 6.96369 16.9 6.78564 16.9 6.59999C16.9 6.41434 16.8263 6.23629 16.695 6.10502C16.5637 5.97374 16.3857 5.89999 16.2 5.89999H11.4ZM11.4 10.7C11.2144 10.7 11.0363 10.7737 10.905 10.905C10.7738 11.0363 10.7 11.2143 10.7 11.4C10.7 11.5856 10.7738 11.7637 10.905 11.895C11.0363 12.0262 11.2144 12.1 11.4 12.1H16.2C16.3857 12.1 16.5637 12.0262 16.695 11.895C16.8263 11.7637 16.9 11.5856 16.9 11.4C16.9 11.2143 16.8263 11.0363 16.695 10.905C16.5637 10.7737 16.3857 10.7 16.2 10.7H11.4ZM10.905 15.705C10.7738 15.8363 10.7 16.0143 10.7 16.2C10.7 16.3856 10.7738 16.5637 10.905 16.695C11.0363 16.8262 11.2144 16.9 11.4 16.9H16.2C16.3857 16.9 16.5637 16.8262 16.695 16.695C16.8263 16.5637 16.9 16.3856 16.9 16.2C16.9 16.0143 16.8263 15.8363 16.695 15.705C16.5637 15.5737 16.3857 15.5 16.2 15.5H11.4C11.2144 15.5 11.0363 15.5737 10.905 15.705ZM8.4 12.7C8.74478 12.7 9.07544 12.563 9.31924 12.3192C9.56304 12.0754 9.7 11.7448 9.7 11.4C9.7 11.0552 9.56304 10.7246 9.31924 10.4808C9.07544 10.237 8.74478 10.1 8.4 10.1C8.05522 10.1 7.72456 10.237 7.48076 10.4808C7.23697 10.7246 7.1 11.0552 7.1 11.4C7.1 11.7448 7.23697 12.0754 7.48076 12.3192C7.72456 12.563 8.05522 12.7 8.4 12.7ZM8.4 17.5C8.74478 17.5 9.07544 17.363 9.31924 17.1192C9.56304 16.8754 9.7 16.5448 9.7 16.2C9.7 15.8552 9.56304 15.5246 9.31924 15.2808C9.07544 15.037 8.74478 14.9 8.4 14.9C8.05522 14.9 7.72456 15.037 7.48076 15.2808C7.23697 15.5246 7.1 15.8552 7.1 16.2C7.1 16.5448 7.23697 16.8754 7.48076 17.1192C7.72456 17.363 8.05522 17.5 8.4 17.5Z" fill={taskColor} stroke="#7e7e7e" stroke-width="0.2"/>
                    </g>
                </svg>
                <Link to="/clinical" className={`${pathname==="/clinical"?"nav-txt":""}`}>Tasks</Link>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Sidebar;