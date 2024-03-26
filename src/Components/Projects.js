// import '../Styles/Projects.css'
// import { useState,useEffect } from 'react';
// import  BlissIndiaImage from '../Assets/bliss-india.png';
// import { BarLoader } from 'react-spinners';
// import BlissDemo from '../Assets/BlissDemo.mp4'
// import PrintDemo from '../Assets/PrintDemo.mp4'
// import { toast } from 'react-toastify';
// import PrintEasyImage from '../Assets/PrintEasy.png'

// function Projects(){

//     const [loading,setLoading]=useState(false);
//     const [projects, setProjects]=useState([
//         {
//             name: "Bliss India",
//             video:BlissDemo,
//             keyLine:"An e-commerce website for a jewelry company.",
//             overview:"The Bliss India website was created with the primary objective of fostering company growth by drawing in consumers from across the country. It seamlessly combines a clean user interface with a smooth and intuitive user experience. The website encompasses all essential features for customers, including item search, product sorting, cart and wishlist functionality, as well as the provision of a receipt copy. The project follows an MVC structure for effective organization and development.",
//             thumbnail:BlissIndiaImage,
//             technology:[
//                 {tech:"HTML, CSS, EJS", purpose:"for handling the front end of the website."},
//                 {tech:"JavaScript, MongoDB, ExpressJS, NodeJS",purpose:"for handling the backend of the website, including user data, product details etc."},
//                 {tech:"Noty",purpose:"for web push notifications."},
//                 {tech:"NodeMailer, GmailSMTP",purpose:"for providing mail services."},
//                 {tech:"GulpJS",purpose:"for CSS and JS minification."},
//                 {tech:"PassportJS",purpose:"for user authentication."},
//                 {tech:"SwiperJS",purpose:"for smooth image transitions."},
//                 {tech:"Multer",purpose:"for taking images as input."},
//                 {tech:"Morgan",purpose:"for recording the production logs."},
//                 {tech:"jsPDF",purpose:"for creating a PDF receipt."},
//                 // {tech:"",purpose:""},
//                 // {tech:"",purpose:""},
//             ],
//             github:"https://github.com/huhrsh/Bliss-India.git",
//             challenges:[
//                 "Designing an efficient MVC structure to minimize the number of files and lines of code.",
//                 "Implementing Multer to take multiple images as input for the products.",
//                 "Crafting personalized emails tailored to match the design of the company.",
//                 "Converting the receipt into a downloadable PDF.",
//                 "Developing the product sorting functionality that categorizes products according to alphabetical order, price, and rating."
//             ],
//             lessons:[],
//         },
//         {
//             name: "PrintEasy",
//             video:PrintDemo,
//             keyLine:"Printing made online and easy.",
//             overview:"The PrintEasy website streamlines your printing experience by offering personalized document options and a hassle-free pre-order system, eliminating queue wait times. For urgent print needs, take advantage of our priority printing option. Simplify your printing process with PrintEasy.",
//             thumbnail:PrintEasyImage,
//             technology:[
//                 {tech:"React, Redux, CSS", purpose:"Front End"},
//                 {tech:"JavaScript, MongoDB, ExpressJS, NodeJS",purpose:"Back End"},
//                 {tech:"React Toastify",purpose:"Web push notifications."},
//                 // {tech:"NodeMailer, GmailSMTP",purpose:"for providing mail services."},
//                 // {tech:"GulpJS",purpose:"for CSS and JS minification."},
//                 {tech:"PassportJS",purpose:"authentication."},
//                 // {tech:"SwiperJS",purpose:"for smooth image transitions."},
//                 {tech:"Multer",purpose:"handling media inputs."},
//                 // {tech:"Morgan",purpose:"for recording the production logs."},
//                 // {tech:"jsPDF",purpose:"creating a PDF receipt."},
//                 {tech:"React PDF",purpose:"previewing PDF files."},
//                 {tech:"Archiver",purpose:"To compress mulptile files into a zip."},
//                 {tech:"React QR Code",purpose:"To create a QR code for file retreival."},
//             ],
//             github:"https://github.com/huhrsh/PrintEasy.git",
//             challenges:[
//                 "PrintEasy, being my first MERN Stack project, posed a challenge as I worked with APIs for client-server connectivity.",
//                 "Working with react-pdf for generating previews was a new learning.",
//                 "Hanlding authentication for shops and users together.",
//                 "Compressing different types of files into one archive."
//                 // "Converting the receipt into a downloadable PDF.",
//                 // "Developing the product sorting functionality that categorizes products according to alphabetical order, price, and rating."
//             ],
//             lessons:[],
//         }
//     ])

//     useEffect(() => {
//         const images = projects.map((project) => new Promise((resolve) => {
//             const image = new Image();
//             image.src = project.thumbnail;
//             image.onload = () => resolve();
//         }));

//         // const videos = projects.map((project) => new Promise((resolve) => {
//         //     const video = document.createElement('video');
//         //     if(project.video===""){
//         //         resolve();
//         //     }
//         //     // console.log(project.video);
//         //     video.src = project.video;
//         //     video.onloadeddata = () => {
//         //         // console.log(`Video loaded: ${project.video}`);
//         //         resolve()};
//         // }));

//         const allMedia = [...images];
//         // const allMedia = [...images, ...videos];

//         Promise.all(allMedia).then(() => setLoading(true));
//     }, [projects]);


//     // useEffect(() => {
//     //     const images = projects.map((project) => new Promise((resolve) => {
//     //         const image = new Image();
//     //         image.src = project.thumbnail;
//     //         image.onload = () => resolve();

//     //     }));
//     //     Promise.all(images).then(() => setLoading(true));
//     // }, [projects]);


//     const [option,setOption]=useState(null);
//     // const [option,setOption]=useState(projects[0]);

//     useEffect(() => {
//         console.log('Option changed:', option);
//       }, [option]); 

//       useEffect(() => {
//         let timeout;
//         if (!loading) {
//             timeout = setTimeout(() => {
//                 // setCount((prevCount) => prevCount + 1);
//                 toast(`Loading media...`);
//             }, 2000);
//         }
//         return () => clearTimeout(timeout);
//     }, [loading]);

//     return(
//         <>
//         <main className='projects-main'>
//         {loading===false?<div className="home-spinner">
//                         <BarLoader color="#fff" loading={!loading} size={20} />
//                     </div>:
//                     <>
//                 <section className='project-nav'>
//                     {projects.map((item,index)=>(<>
//                         <div key={index} onClick={()=>{setOption(item)}} className='project' style={{background:`url(${item.thumbnail})`, backgroundSize:"contain"}}>
//                             <h3 className={`nav ${item.name.split(' ')[0]}`}>{item.name}</h3>
//                         </div>
//                         </>
//                     ))}
//                 </section>
//                 {option!==null?
//                 <>
//                     <section className='project-container'>
//                         <h1 id={option.name.split(" ")[0].toLowerCase()} className='project-heading'>{option.name}</h1>
//                         <h4 className='project-keyline'>{option.keyLine}</h4>
//                         <a href={option.github} target='_blank' className='github-link'><img src='https://cdn-icons-png.flaticon.com/128/10685/10685322.png'/>Github</a>
//                         {/* <h4 className='project-link'>GitHub repository: <a href={option.github}>Link</a> </h4> */}
//                         <div className='project-overview-section'>
//                             <h2 className='project-overview-heading'>Overview</h2>
//                             <p className='project-overview'>{option.overview}</p>
//                         </div>
//                         <div className='project-video-section'>
//                             <h2 className='project-video-heading'>Video Demonstration</h2>
//                             <video className='project-video' controls preload='true'>
//                                 <source src={option.video} type='video/mp4'/>
//                                 Your browser does not support this video tag
//                             </video>
//                         </div>
//                         <div className='project-tech'>
//                             <h2 className='project-tech-heading'>
//                                 Technologies / Libraries
//                             </h2>
//                             <ul className='tech-list'>
//                                 {option.technology.map((tech,index)=>(
//                                         <li key={index}><span className='tech-heading'>{tech.tech} : </span>  {tech.purpose}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className='project-challenges'>
//                             <h2 className='project-challenges-heading'>Challenges Faced</h2>
//                             <ul className='challenge-list'>
//                                   {option.challenges.map((challenge,index)=>(
//                                         <li key={index}>{challenge}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </section>
//                 </>:<></>}
//             </>
//             }
//             </main>
//         </>
//     )
// }

// export {Projects};

import { useState, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import BlissIndiaImage from '../Assets/bliss-india.png';
import BlissDemo from '../Assets/BlissDemo.mp4';
import PrintDemo from '../Assets/PrintDemo.mp4';
import PrintEasyImage from '../Assets/PrintEasy.png';
import { toast } from 'react-toastify';

function Projects() {
    const [option, setOption] = useState(null);
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([
        {
            name: "Bliss India",
            video: BlissDemo,
            keyLine: "An e-commerce website for a jewelry company.",
            overview: "The Bliss India website was created with the primary objective of fostering company growth by drawing in consumers from across the country. It seamlessly combines a clean user interface with a smooth and intuitive user experience. The website encompasses all essential features for customers, including item search, product sorting, cart and wishlist functionality, as well as the provision of a receipt copy. The project follows an MVC structure for effective organization and development.",
            thumbnail: BlissIndiaImage,
            technology: [
                { tech: "HTML, CSS, EJS", purpose: "for handling the front end of the website." },
                { tech: "JavaScript, MongoDB, ExpressJS, NodeJS", purpose: "for handling the backend of the website, including user data, product details etc." },
                { tech: "Noty", purpose: "for web push notifications." },
                { tech: "NodeMailer, GmailSMTP", purpose: "for providing mail services." },
                { tech: "GulpJS", purpose: "for CSS and JS minification." },
                { tech: "PassportJS", purpose: "for user authentication." },
                { tech: "SwiperJS", purpose: "for smooth image transitions." },
                { tech: "Multer", purpose: "for taking images as input." },
                { tech: "Morgan", purpose: "for recording the production logs." },
                { tech: "jsPDF", purpose: "for creating a PDF receipt." },
                // {tech:"",purpose:""},
                // {tech:"",purpose:""},
            ],
            github: "https://github.com/huhrsh/Bliss-India.git",
            challenges: [
                "Designing an efficient MVC structure to minimize the number of files and lines of code.",
                "Implementing Multer to take multiple images as input for the products.",
                "Crafting personalized emails tailored to match the design of the company.",
                "Converting the receipt into a downloadable PDF.",
                "Developing the product sorting functionality that categorizes products according to alphabetical order, price, and rating."
            ],
            lessons: [],
        },
        {
            name: "PrintEasy",
            video: PrintDemo,
            keyLine: "Printing made online and easy.",
            overview: "The PrintEasy website streamlines your printing experience by offering personalized document options and a hassle-free pre-order system, eliminating queue wait times. For urgent print needs, take advantage of our priority printing option. Simplify your printing process with PrintEasy.",
            thumbnail: PrintEasyImage,
            technology: [
                { tech: "React, Redux, CSS", purpose: "Front End" },
                { tech: "JavaScript, MongoDB, ExpressJS, NodeJS", purpose: "Back End" },
                { tech: "React Toastify", purpose: "Web push notifications." },
                // {tech:"NodeMailer, GmailSMTP",purpose:"for providing mail services."},
                // {tech:"GulpJS",purpose:"for CSS and JS minification."},
                { tech: "PassportJS", purpose: "authentication." },
                // {tech:"SwiperJS",purpose:"for smooth image transitions."},
                { tech: "Multer", purpose: "handling media inputs." },
                // {tech:"Morgan",purpose:"for recording the production logs."},
                // {tech:"jsPDF",purpose:"creating a PDF receipt."},
                { tech: "React PDF", purpose: "previewing PDF files." },
                { tech: "Archiver", purpose: "To compress mulptile files into a zip." },
                { tech: "React QR Code", purpose: "To create a QR code for file retreival." },
            ],
            github: "https://github.com/huhrsh/PrintEasy.git",
            challenges: [
                "PrintEasy, being my first MERN Stack project, posed a challenge as I worked with APIs for client-server connectivity.",
                "Working with react-pdf for generating previews was a new learning.",
                "Hanlding authentication for shops and users together.",
                "Compressing different types of files into one archive."
                // "Converting the receipt into a downloadable PDF.",
                // "Developing the product sorting functionality that categorizes products according to alphabetical order, price, and rating."
            ],
            lessons: [],
        }
    ])


    useEffect(() => {
        const images = projects.map(project => new Promise(resolve => {
            const image = new Image();
            image.src = project.thumbnail;
            image.onload = () => resolve();
        }));

        Promise.all(images).then(() => setLoading(true));
    }, [projects]);

    useEffect(() => {
        let timeout;
        if (!loading) {
            timeout = setTimeout(() => {
                toast('Loading media...');
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [loading]);

    return (
        <>
            <main className="projects-main min-h-[90vh] flex flex-col justify-evenly items-center gap-24 pt-3">
                {loading === false ? (
                    <div className="home-spinner">
                        <BarLoader color="#fff" loading={!loading} size={20} />
                    </div>
                ) : (
                    <>
                        <section className="project-nav w-full px-24 gap-16 flex justify-between items-center
                        max-sm:px-6 max-sm:flex-col 
                        ">
                            {projects.map((item, index) => (
                                <div key={index} onClick={() => setOption(item)} className="group project relative h-full rounded-md overflow-hidden cursor-pointer">
                                    <h3 className={`nav bg-[#000000aa] font-[Raleway] overflow-hidden h-0 text-5xl flex items-center justify-center font-regular w-full text-center text-white absolute bottom-0 left-0 transition-all duration-300 transform group-hover:h-full ${item.name == 'PrintEasy' ? "font-[afacad]" : "font-[amsterdam]"} `}>{item.name}</h3>
                                    <img src={item.thumbnail} alt={item.name} className="object-cover w-full h-full" />
                                </div>
                            ))}
                        </section>
                        {option !== null && (
                            <section className="project-container w-full px-24  p-2 flex flex-col items-center gap-16
                            max-sm:px-6">
                                <div className={`flex flex-col items-center gap-4`}>
                                    <h1 id={option.name.split(" ")[0].toLowerCase()} className={`h-24 project-heading  font-regular flex items-center gap-2 ${option.name == 'PrintEasy' ? "font-[afacad] text-7xl" : "font-[amsterdam] text-5xl"}`}>{option.name}</h1>
                                    <h4 className="project-keyline text-2xl font-normal max-sm:text-xl">{option.keyLine}</h4>
                                    <a href={option.github} target="_blank" rel="noopener noreferrer" className="github-link flex items-center text-xl font-normal hover:underline max-sm:self-start max-sm:underline">
                                        Github
                                        <img src="https://cdn-icons-png.flaticon.com/128/10685/10685322.png" alt="Github" className="w-6 h-6 mr-2" />
                                    </a>
                                </div>
                                <div className="project-overview-section flex flex-col gap-4">
                                    <h2 className="project-overview-heading text-4xl font-semibold">Overview</h2>
                                    <p className="project-overview text-xl px-6 font-normal text-justify max-sm:px-0 max-sm:text-lg ">{option.overview}</p>
                                </div>
                                <div className="project-video-section flex flex-col gap-6">
                                    <h2 className="project-video-heading text-4xl font-semibold">Video Demonstration</h2>
                                    <video key={option.name} className="project-video w-full bg-transparent px-6 max-sm:px-0" controls preload="true">
                                        <source src={option.video} type="video/mp4" />
                                        Your browser does not support this video tag
                                    </video>
                                </div>
                                <div className="project-tech flex flex-col gap-6 w-full">
                                    <h2 className="project-tech-heading text-4xl font-semibold">Technologies / Libraries</h2>
                                    <ul className="tech-list w-full pl-12 flex flex-col max-sm:pl-6">
                                        {option.technology.map((tech, index) => (
                                            <li key={index} className="text-xl list-disc font-regular py-2 text-gray-300 max-sm:text-lg">
                                                <span className="tech-heading font-semibold">{tech.tech}</span>: {tech.purpose}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="project-challenges w-full flex flex-col gap-6 pb-12">
                                    <h2 className="project-challenges-heading text-4xl font-semibold">Challenges Faced</h2>
                                    <ul className="challenge-list w-full list-disc pl-12 max-sm:pl-6">
                                        {option.challenges.map((challenge, index) => (
                                            <li key={index} className="text-xl font-normal py-2 text-gray-300 max-sm:text-lg">{challenge}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}
                    </>
                )}
            </main>
        </>
    );
}

export { Projects };
