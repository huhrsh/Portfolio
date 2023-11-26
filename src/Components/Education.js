import { useState } from 'react';
import '../Styles/Education.css'
// import hat from '../Assets/degree.png';

function Education(){

    const [educationDetails, setEducationDetails]=useState([
    {
        institute:"Maharaja Surajmal Institute of Technology",
        affiliated:"(affiliated to Guru Gobind Singh Indraprastha University, Delhi)",
        course:"Bachelor of Technology in Computer Science and Engineering",
        year:"2021-2025",
        marks:"CGPA: 9.137 (till 4th semester)"
    },
    {
        institute:"Amity International School, Mayur Vihar",
        course:"All India Senior School Certificate Examination",
        year:"2021 graduate",
        marks:"Score: 97.6%"
    }
    ]);

    return(
        <>
            <main className="education-main">
                {educationDetails.map((item,index)=>(
                    <div className='education-div animate__animated animate__fadeIn' key={index}>
                        <div className='edu-left'>
                            <div className='institute'>
                                {item.institute}
                            </div>
                            {item.affiliated!=null?<div className='affiliated'>
                                {item.affiliated}
                            </div>:<></>}
                            {item.course!=null?<div className='course'>
                                {item.course}
                            </div>:<></>}
                            <div className='score'>
                                {item.marks}
                            </div>
                        </div>
                        <div className='edu-right'>
                            {item.year}
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
}

export {Education};
