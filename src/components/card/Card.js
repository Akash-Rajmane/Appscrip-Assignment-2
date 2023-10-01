import React from 'react';
import "./Card.css";
import Image from "./avatar.jpg";

const Card = ({status,btnText,description,textHeading,textData=""}) => {
  return (
    <div className='card'>
        <img src={Image} alt="img" className='avatar'/>
        <div>
            <p className='name'>Malenie Laurent</p>
            <p className='txt'>Appointment Id: 324424</p>
            <p className='desc'>{description}</p>
        </div>
        <div>
            <table>
                <tr>
                    <td className='data'>Task Id:</td>
                    <td>2323232</td>
                </tr>
                <tr>
                    <td className='data'>{textHeading}:</td>
                    <td>December 22,2022 {textData}</td>
                </tr>
                <tr>
                    <td className='data'>Duration:</td>
                    <td>1 hour</td>
                </tr>
            </table>
        </div>
        <div className='btn-container'>
        {status && <p class="right"><span className='status'>status</span><span className={`${status==="Overdue"?"red":"green"}`}>{status}</span></p>}
        <button className='asses-btn'>{btnText}</button>
        </div>
    </div>
  )
}

export default Card;