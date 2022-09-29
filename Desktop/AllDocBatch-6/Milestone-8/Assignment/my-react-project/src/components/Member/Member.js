import React from 'react';
import "./Member.css";

const Member = ({member, handleBtn}) => {
    const {name, hours} = member;
    return (
        <div className='member'>
                <img src={member.picture} alt="" />
                <h2>Team Name: {name}</h2>
                <p>Time Needed: {hours} hours</p>
                <div className='btn'>
                <button onClick={() => handleBtn(hours)} className='addBtn'>Add To Cart</button>
                </div>
        </div>
    );
};

export default Member;