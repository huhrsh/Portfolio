import { useState } from 'react';

function Education(){

    const [educationDetails, setEducationDetails]=useState([
        {
            institute:"Maharaja Surajmal Institute of Technology",
            affiliated:"(affiliated to Guru Gobind Singh Indraprastha University, Delhi)",
            course:"Bachelor of Technology in Computer Science and Engineering",
            year:"2021 - 2025",
            marks:"CGPA: 9.137 (till 4th semester)"
        },
        {
            institute:"Amity International School, Mayur Vihar",
            course:"All India Senior School Certificate Examination",
            year:"2021",
            marks:"Score: 97.6%"
        }
    ]);

    return(
        <>
            <main className="education-main w-screen min-h-[90vh] flex flex-col justify-evenly items-start  p-12 px-24 overflow-hidden
             max-sm:px-6 max-sm:gap-20
            ">
                {educationDetails.map((item,index)=>(
                    <div className='education-div flex items-center justify-between w-full animate__animated animate__fadeIn
                    max-sm:flex-col max-sm:items-start max-sm:gap-3
                    ' key={index}>
                        <div className='edu-left flex flex-col gap-2'>
                            <div className='institute text-2xl font-regular text-[#eee]'>
                                {item.institute}
                            </div>
                            {item.affiliated &&
                                <div className='affiliated text-lg text-gray-400
                                max-sm:text-xl'>
                                    {item.affiliated}
                                </div>
                            }
                            {item.course &&
                                <div className='course text-lg font-regular text-[#ccc]
                                max-sm:text-xl'>
                                    {item.course}
                                </div>
                            }
                            <div className='score text-lg font-regular text-[#ccc]
                            max-sm:text-xl'>
                                {item.marks}
                            </div>
                        </div>
                        <div className='edu-right text-xl font-regular text-[#ccc]'>
                            {item.year}
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
}

export {Education};
