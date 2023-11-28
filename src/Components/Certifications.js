import "../Styles/Certifications.css"
import { useEffect, useState } from "react";
import advancedFrontEndCompletion from '../Assets/Certificates/CN_AdvancedFrontEnd_CertificateOfCompletion-1.png'
import advancedFrontEndExcellence from '../Assets/Certificates/CN_AdvancedFrontEnd_CertificateOfExcellence_page-0001.jpg'
import frontEndCompletion from '../Assets/Certificates/CN_FrontEnd_CertificateOfCompletion_page-0001.jpg'
import frontEndExcellence from '../Assets/Certificates/CN_FrontEnd_CertificateOfExcellence_page-0001.jpg'
import backEndCompletion from '../Assets/Certificates/CN_BackEnd_CertificateOfCompletion_page-0001.jpg'
import backEndExcellence from '../Assets/Certificates/CN_BackEnd_CertificateOfExcellence_page-0001.jpg'
import cpp from '../Assets/Certificates/Certificate_page-0001.jpg'
import { PacmanLoader } from "react-spinners";
import billing from "../Assets/Certificates/AWS Billing.jpg"
import acquisition from "../Assets/Certificates/AWS acquisition.jpg"
import job from '../Assets/Certificates/AWS Job.jpg'
import cloud from "../Assets/Certificates/AWS Cloud.jpg"
import foundation from "../Assets/Certificates/AWS Foundations.jpg"
import { toast } from "react-toastify";

function Certifications(){
    const [count, setCount]=useState(0);
    const [loading,setLoading]=useState(false);
    const [certificates,setCertificates]=useState(
        [
            {
                url: "certificate.codingninjas.com/verify/576cd95f754f2a90",
                altText: "Certificate of Excellence",
                img:advancedFrontEndExcellence,
                title: "Advance Front End | Web Development with React",
            },
            {
                url: "https://certificate.codingninjas.com/verify/38898ed2033ce163",
                altText: "Certificate of Completion",
                img:advancedFrontEndCompletion,
                title: "Advance Front End | Web Development with React",
            },
            {
                url: "https://certificate.codingninjas.com/verify/6c53e06f1f1d7e3f",
                altText: "Certificate of Excellence",
                img: backEndExcellence,
                title: "Back End | Full Stack Web Development in Node.js",
            },
            {
                url: "https://certificate.codingninjas.com/verify/5d1c99c7953d5205",
                altText: "Certificate of Completion",
                img: backEndCompletion,
                title: "Back End | Full Stack Web Development in Node.js",
            },
            {
                url: "https://certificate.codingninjas.com/verify/6c53e06f1f1d7e3f",
                altText: "Certificate of Excellence",
                img: frontEndExcellence,
                title: "Front End | Full Stack Web Development",
            },
            {
                url: "https://certificate.codingninjas.com/verify/e412497c18f5915c",
                altText: "Certificate of Completion",
                img: frontEndCompletion,
                title: "Front End | Full Stack Web Development",
            },
            {
                url: "https://online.codingblocks.com/app/certificates/CBOL-247279-5a40",
                altText: "Certificate of Completion",
                img: cpp,
                title: "Data Structures and Algorithm in C++",
            },
            {
                url: "https://drive.google.com/file/d/1lRQydPEb2ptLwwo93m30psFChq9Hvcj5/view?usp=sharing",
                altText: "Certificate of Completion",
                img: job,
                title: "Job Roles in the Cloud",
            },
            {
                url: "https://drive.google.com/file/d/1ynI4dIcD6xntPcNu94cAXfNygx-xI6Cy/view?usp=sharing",
                altText: "Certificate of Completion",
                img: cloud,
                title: "AWS Cloud Practitioner Essentials",
            },
            {
                url: "https://drive.google.com/file/d/1j9EWG1s2hkkED8GM4Lb6Cf2sxiJ3wxXQ/view?usp=sharing",
                altText: "Certificate of Completion",
                img: acquisition,
                title: "Getting Started with Cloud Acquisition",
            },
            {
                url: "https://drive.google.com/file/d/1Kp-Bpj15LVtVPEMCP1mnNbCZM65OzGSt/view?usp=drive_link",
                altText: "Certificate of Completion",
                img: foundation,
                title: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
            },
            {
                url: "https://drive.google.com/file/d/1_Z3yG7QkRbBrqhe5QegReS19JcVtpG8f/view?usp=sharing",
                altText: "Certificate of Completion",
                img: billing,
                title: "AWS Billing and Cost Management",
            },
        ]);

        useEffect(() => {
            const images = certificates.map((project) => new Promise((resolve) => {
                const image = new Image();

                image.src = project.img;
                image.onload = () => resolve();

            }));

            Promise.all(images).then(() => {
                setLoading(true);
            });
        }, [certificates]);

        useEffect(() => {
            let timeout;
            if (!loading) {
                timeout = setTimeout(() => {
                    // setCount((prevCount) => prevCount + 1);
                    toast(`Image loading is taking time..`);
                }, 4000);
            }
            return () => clearTimeout(timeout);
        }, [loading]);

    return(
        <>
            <main className="certifications-main">  
            {!loading?             
                    <div className="home-spinner">
                        <PacmanLoader color="#fff" loading={!loading} size={20} />
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
            </main>
        </>
    )
}

export {Certifications};