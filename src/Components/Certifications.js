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

function Certifications(){
    const [count,setCount]=useState(0);
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
        ]);

        useEffect(() => {
            const images = certificates.map((project) => new Promise((resolve) => {
                const image = new Image();

                image.src = project.img;
                image.onload = () => resolve();

            }));

            Promise.all(images).then(() => setLoading(true));
        }, [certificates]);

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
                        {index===6?<>
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