import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import './Members.css';
import logo from '../../images/logo.png';
import myImage from '../../images/myImage.JPG';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Members = () => {
    const [members, setMembers] = useState([]);
    const [hours, setHours] = useState(0);
    const [breakCount, setBreakCount] = useState('');

    useEffect(() => {
        fetch("fake.json").then(res => res.json()).then(data => setMembers(data))
    }, [])

    const handleBtn = (getHours) => {
        const newHours = getHours + hours;
        setHours(newHours)
    }

    const handleBreak = (e) => {
        const breakData = e.target.innerText;
        localStorage.setItem("breakCount", breakData);
        setBreakCount(e.target.innerText)
    }
    
    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("breakCount"));
        if(getItem){
            setBreakCount(getItem)
        }
    }, [])


    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return (
        <div className='members'>
            <div>
                <div className='header'>
                    <img src={logo} alt="" />
                    <h2>Programming Team</h2>
                </div>
                <div className='membersInfo'>
                    {
                        members.map(member => <Member key={member.id} member={member} handleBtn={handleBtn}/>)
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
                <div>
                    <h3>Add Break</h3>
                    <div className='breakList'>
                        <h3 onClick={handleBreak}>10</h3>
                        <h3 onClick={handleBreak}>40</h3>
                        <h3 onClick={handleBreak}>30</h3>
                        <h3 onClick={handleBreak}>50</h3>
                        <h3 onClick={handleBreak}>60</h3>
                    </div>
                </div>
                <div>
                    <h3>Exercise Details</h3>
                    <div>
                       <div className='time-zone'>
                            <h4>Exercise time:</h4>
                            <p>{hours} Hours</p>
                       </div>
                       <div className='time-zone'>
                            <h4 className='time-required'>Break time:  </h4>
                            <p>{breakCount} Seconds</p>
                       </div>
                    </div>
                </div>
                <div>
                    <button className='toastBtn' onClick={showToastMessage}>Activity Completed</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Members;