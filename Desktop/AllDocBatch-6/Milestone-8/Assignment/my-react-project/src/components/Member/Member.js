import React from 'react';
import "./Member.css";

const Member = ({member}) => {
    return (
        <div className='member'>
                <img src={member.picture} alt="" />
                <h2>Team Name: {member.name}</h2>
                <p>Time Needed: {member.hours} hours</p>
                <div className='btn'>
                    <button className='addBtn'>Add To Cart</button>
                </div>
        </div>
    );
};

export default Member;