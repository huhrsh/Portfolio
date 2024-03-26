import "../Styles/Certifications.css"
import { useEffect, useState } from "react";
import advancedFrontEndCompletion from '../Assets/Certificates/CN_AdvancedFrontEnd_CertificateOfCompletion-1.png'
import advancedFrontEndExcellence from '../Assets/Certificates/CN_AdvancedFrontEnd_CertificateOfExcellence_page-0001.jpg'
import frontEndCompletion from '../Assets/Certificates/CN_FrontEnd_CertificateOfCompletion_page-0001.jpg'
import frontEndExcellence from '../Assets/Certificates/CN_FrontEnd_CertificateOfExcellence_page-0001.jpg'
import backEndCompletion from '../Assets/Certificates/CN_BackEnd_CertificateOfCompletion_page-0001.jpg'
import backEndExcellence from '../Assets/Certificates/CN_BackEnd_CertificateOfExcellence_page-0001.jpg'
import cpp from '../Assets/Certificates/Certificate_page-0001.jpg'
import { BarLoader } from "react-spinners";
import billing from "../Assets/Certificates/AWS Billing.jpg"
import acquisition from "../Assets/Certificates/AWS acquisition.jpg"
import job from '../Assets/Certificates/AWS Job.jpg'
import cloud from "../Assets/Certificates/AWS Cloud.jpg"
import foundation from "../Assets/Certificates/AWS Foundations.jpg"
import ieee from "../Assets/Certificates/Harsh Jain - Design Committee.jpg"
import introMl from "../Assets/Certificates/Harsh Jain - Intro to Machine Learning.png"
import introP from "../Assets/Certificates/Harsh Jain - Intro to Programming.png"
import pandas from "../Assets/Certificates/Harsh Jain - Pandas.png"
import python from "../Assets/Certificates/Harsh Jain - Python.png"
import elt from "../Assets/Certificates/Harsh Jain-ELT.jpg"
import { toast } from "react-toastify";
import frame from '../Assets/Certificates/FrameAsset 4.png'

function Certifications() {
    const [type, setType] = useState('all')
    const [typeArr, setTypeArr] = useState(["all",])
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [certificates, setCertificates] = useState(
        [
            {
                url: "https://certificate.codingninjas.com/verify/576cd95f754f2a90",
                altText: "Certificate of Excellence",
                img: advancedFrontEndExcellence,
                title: "Advance Front End | Web Development with React",
                type: "web"
            },
            {
                url: "https://certificate.codingninjas.com/verify/38898ed2033ce163",
                altText: "Certificate of Completion",
                img: advancedFrontEndCompletion,
                title: "Advance Front End | Web Development with React",
                type: "web"
            },
            {
                url: "https://certificate.codingninjas.com/verify/6c53e06f1f1d7e3f",
                altText: "Certificate of Excellence",
                img: backEndExcellence,
                title: "Back End | Full Stack Web Development in Node.js",
                type: "web"
            },
            {
                url: "https://certificate.codingninjas.com/verify/5d1c99c7953d5205",
                altText: "Certificate of Completion",
                img: backEndCompletion,
                title: "Back End | Full Stack Web Development in Node.js",
                type: "web"
            },
            {
                url: "https://certificate.codingninjas.com/verify/6c53e06f1f1d7e3f",
                altText: "Certificate of Excellence",
                img: frontEndExcellence,
                title: "Front End | Full Stack Web Development",
                type: "web"
            },
            {
                url: "https://certificate.codingninjas.com/verify/e412497c18f5915c",
                altText: "Certificate of Completion",
                img: frontEndCompletion,
                title: "Front End | Full Stack Web Development",
                type: "web"
            },
            {
                url: "https://online.codingblocks.com/app/certificates/CBOL-247279-5a40",
                altText: "Certificate of Completion",
                img: cpp,
                title: "Data Structures and Algorithm in C++",
                type: 'dsa'
            },
            {
                url: "https://drive.google.com/file/d/1lRQydPEb2ptLwwo93m30psFChq9Hvcj5/view?usp=sharing",
                altText: "Certificate of Completion",
                img: job,
                title: "Job Roles in the Cloud",
                type: 'aws'
            },
            {
                url: "https://drive.google.com/file/d/1ynI4dIcD6xntPcNu94cAXfNygx-xI6Cy/view?usp=sharing",
                altText: "Certificate of Completion",
                img: cloud,
                title: "AWS Cloud Practitioner Essentials",
                type: 'aws'
            },
            {
                url: "https://drive.google.com/file/d/1j9EWG1s2hkkED8GM4Lb6Cf2sxiJ3wxXQ/view?usp=sharing",
                altText: "Certificate of Completion",
                img: acquisition,
                title: "Getting Started with Cloud Acquisition",
                type: 'aws'
            },
            {
                url: "https://drive.google.com/file/d/1Kp-Bpj15LVtVPEMCP1mnNbCZM65OzGSt/view?usp=drive_link",
                altText: "Certificate of Completion",
                img: foundation,
                title: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
                type: 'aws'
            },
            {
                url: "https://drive.google.com/file/d/1_Z3yG7QkRbBrqhe5QegReS19JcVtpG8f/view?usp=sharing",
                altText: "Certificate of Completion",
                img: billing,
                title: "AWS Billing and Cost Management",
                type: 'aws'
            },
            {
                url: "https://drive.google.com/file/d/1iJ0o557EG5T5TdjPXjQhvMjY9uYQUwgP/view?usp=sharing",
                altText: "Certificate of Completion",
                img: python,
                title: "Python",
                type: 'py'
            },
            {
                url: "https://drive.google.com/file/d/1zERLbZna4f_kURYGjXZVaCcQOlXZCkSj/view?usp=sharing",
                altText: "Certificate of Completion",
                img: pandas,
                title: "Pandas",
                type: 'py'
            },
            {
                url: "https://drive.google.com/file/d/1bf0E4B72p5ygswbeLqoraCkdjDFSEV8Q/view?usp=sharing",
                altText: "Certificate of Completion",
                img: introP,
                title: "Introduction to Programming",
                type: 'py'
            },
            {
                url: "https://drive.google.com/file/d/1haPOqtC05zl7BoTOBqXefBIW1mQAwTHC/view?usp=sharing",
                altText: "Certificate of Completion",
                img: introMl,
                title: "Introduction to Machine Learning",
                type: 'py'
            },
            {
                // url: "https://drive.google.com/file/d/1Y4XnZKtJ-nKfErUulfNLvbxfzjaU5b0J/view?usp=sharing",
                url: "https:/www.es-pal.org/verifyCertificate",
                altText: "Certificate of Completion",
                img: elt,
                title: "Energy Literacy Training",
                type: 'ex'
            },
            {
                // url: "https://drive.google.com/file/d/1Y4XnZKtJ-nKfErUulfNLvbxfzjaU5b0J/view?usp=sharing",
                url: "https://drive.google.com/file/d/1wvdbgZhaoe6J0chaNHH0rZeJ4osre-se/view?usp=sharing",
                altText: "Certificate",
                img: ieee,
                title: "Design Committee Member @ IEEE MSIT",
                type: 'ex'
            },
        ]);

    useEffect(() => {
        certificates.forEach((cert) => {
            if (!typeArr.includes(cert.type)) {
                const temp=typeArr;
                temp.push(cert.type)
                setTypeArr(temp);
            }
        })
        // console.log(typeArr)
    }, [])

    // useEffect(() => {
    //     const images = certificates.map((project) => new Promise((resolve) => {
    //         const image = new Image();

    //         image.src = project.img;
    //         image.onload = () => resolve();

    //     }));

    //     Promise.all(images).then(() => {
    //         setLoading(true);
    //     });
    // }, [certificates]);

    useEffect(() => {
        let timeout;
        if (!loading) {
            timeout = setTimeout(() => {
                // toast(`Loading images...`);
                // setCount((prevCount) => prevCount + 1);
                setLoading(!loading)
            }, 2000);
            // }, 4000);
        }
        return () => clearTimeout(timeout);
    }, [loading]);

    function handleTypeChange(typ) {
        setType(typ)
    }

    return (
        <>
            <main className="certifications-main min-h-[90vh] flex flex-wrap justify-center gap-6 p-4">
                {!loading ?
                    <div className="navbar-spinner">
                        <BarLoader color="#fff" loading={!loading} size={20} />
                    </div>
                    :
                    <section className=" flex relative max-sm:flex-col">
                        <div className="w-1/5 rounded flex flex-col items-start pl-8 h-[80vh] fixed justify-evenly py-2
                            max-sm:w-screen max-sm:h-[45vh] max-sm:sticky max-sm:px-8
                        ">
                            {typeArr.map((typ, index) => (
                                <div onClick={() => { handleTypeChange(typ) }} key={index} className={`lol px-3 text-xl relative z-20 transition w-full cursor-pointer before:border rounded-sm py-2 ${type == typ ? "active-lol" : ""}`}>
                                    {typ == 'all' && "All"}
                                    {typ == 'web' && "Web Development"}
                                    {typ == 'dsa' && "C++"}
                                    {typ == 'aws' && "Amazon Web Services"}
                                    {typ == 'py' && "Python"}
                                    {/* {typ == 'ml' && "Machine Learning"} */}
                                    {typ == 'ex' && "Extra Curricular"}
                                </div>
                            ))}
                        </div>
                        <div className="w-4/5 ml-72 p-6 px-12 grid grid-flow-row grid-cols-12 gap-12
                        max-sm:w-screen max-sm:ml-0 max-sm:px-6
                        " >
                            {certificates.map((item, index) => (
                                    (item.type == type | type=='all' ) ?
                                        <div key={index} className="certificate-box animate__animated animate__fadeIn w-full col-span-6 flex flex-col items-center  gap-2 group max-sm:col-span-9">
                                            <a href={item.url} target="_blank" className="certificate-top w-85 flex bg-white">
                                                <div className="certificate-frame shadow-lg shadow-[#ffd90030] transition duration-300 aspect-[4.135/3]  hover:shadow-2xl hover:shadow-[#ffd90060]  w-full  bg-contain bg-center flex items-center justify-center ">
                                                    <img className=" bg-white certificate-image h-[89%] aspect-[4.28/3] object-contain" src={item.img} alt="certificate" />
                                                </div>
                                            </a>
                                            <div className="certificate-bottom min-h-20 flex flex-col justify-center items-center gap-1">
                                                <div className="certificate-name text-2xl font-medium text-center text-gray-300">{item.altText}</div>
                                                <div className="certificate-type text-lg font-normal text-center text-gray-300">{item.title}</div>
                                            </div>
                                        </div>:<></>
                            ))}
                        </div>
                    </section>
                }
            </main>
            {/* <main className="certifications-main">  
            {!loading?             
                    <div className="home-spinner">
                        <BarLoader color="#fff" loading={!loading} size={20} />
                    </div>
                    :
            <>
                {certificates.map((item,index)=>(
                    <>
                        {index>=6?<>
                            <div className="certificate-box animate__animated animate__fadeIn" key={index}>
                            <a href={item.url}  target="_blank" className="certificate-top">
                                <div className="certificate-frame">
                                    <img className="certificate-image" src={item.img} alt="certificate" />
                                </div>
                            </a>
                            <div className="certificate-bottom">
                                <div className="certificate-name">
                                    {item.altText}
                                </div>
                                <div className="certificate-type">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                        </>:
                        <div className="certificate-box animate__animated animate__fadeIn" key={index}>
                            <a href={item.url}  target="_blank" className="certificate-top">
                                <div className="certificate-frame">
                                    <img className="certificate-image" src={item.img} alt="certificate" />
                                </div>
                            </a>
                            <div className="certificate-bottom">
                                <div className="certificate-name">
                                    {item.title.split(' | ')[0]} | {item.altText}
                                </div>
                                <div className="certificate-type">
                                    {item.title.split(' | ')[1]}
                                </div>
                            </div>
                        </div>
                        }
                    </>
                ))}
            </>
            }
            </main> */}
        </>
    )
}

export { Certifications };