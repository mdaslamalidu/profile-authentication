import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import './Members.css';
import logo from '../../images/logo.png';
import myImage from '../../images/myImage.JPG';

const Members = () => {
    const [members, setMembers] = useState([]);
    console.log(members)
    useEffect(() => {
        fetch("fake.json").then(res => res.json()).then(data => setMembers(data))
    }, [])
    return (
        <div className='members'>
            <div>
                <div className='header'>
                    <img src={logo} alt="" />
                    <h2>Programming Team</h2>
                </div>
                <div className='membersInfo'>
                    {
                        members.map(member => <Member key={member.id} member={member}/>)
                    }
                </div>
            </div>
            <div className='personalInfo'>
                <div className='myInfo'>
                    <img src={myImage} alt="" />
                    <div className='myDetailsInfo'>
                        <h3>Md Aslam Ali</h3>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;