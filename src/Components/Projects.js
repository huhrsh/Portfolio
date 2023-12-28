import '../Styles/Projects.css'
import { useState,useEffect } from 'react';
import  BlissIndiaImage from '../Assets/bliss-india.png';
import { PacmanLoader } from 'react-spinners';
import BlissDemo from '../Assets/BlissDemo.mp4'
import { toast } from 'react-toastify';

function Projects(){

    const [loading,setLoading]=useState(false);
    const [projects, setProjects]=useState([
        {
            name: "Bliss India",
            video:BlissDemo,
            keyLine:"An e-commerce website for a jewelry company.",
            overview:"The Bliss India website was created with the primary objective of fostering company growth by drawing in consumers from across the country. It seamlessly combines a clean user interface with a smooth and intuitive user experience. The website encompasses all essential features for customers, including item search, product sorting, cart and wishlist functionality, as well as the provision of a receipt copy. The project follows an MVC structure for effective organization and development.",
            thumbnail:BlissIndiaImage,
            technology:[
                {tech:"HTML, CSS, EJS", purpose:"for handling the front end of the website."},
                {tech:"JavaScript, MongoDB, ExpressJS, NodeJS",purpose:"for handling the backend of the website, including user data, product details etc."},
                {tech:"Noty",purpose:"for web push notifications."},
                {tech:"NodeMailer, GmailSMTP",purpose:"for providing mail services."},
                {tech:"GulpJS",purpose:"for CSS and JS minification."},
                {tech:"PassportJS",purpose:"for user authentication."},
                {tech:"SwiperJS",purpose:"for smooth image transitions."},
                {tech:"Multer",purpose:"for taking images as input."},
                {tech:"Morgan",purpose:"for recording the production logs."},
                {tech:"jsPDF",purpose:"for creating a PDF receipt."},
                // {tech:"",purpose:""},
                // {tech:"",purpose:""},
            ],
            github:"https://github.com/huhrsh/Bliss-India.git",
            challenges:[
                "Designing an efficient MVC structure to minimize the number of files and lines of code.",
                "Implementing Multer to take multiple images as input for the products.",
                "Crafting personalized emails tailored to match the design of the company.",
                "Converting the receipt into a downloadable PDF.",
                "Developing the product sorting functionality that categorizes products according to alphabetical order, price, and rating."
            ],
            lessons:[],
        }
    ])

    useEffect(() => {
        const images = projects.map((project) => new Promise((resolve) => {
            const image = new Image();
            image.src = project.thumbnail;
            image.onload = () => resolve();
        }));

        const videos = projects.map((project) => new Promise((resolve) => {
            const video = document.createElement('video');
            if(project.video===""){
                resolve();
            }
            // console.log(project.video);
            video.src = project.video;
            video.onloadeddata = () => {
                // console.log(`Video loaded: ${project.video}`);
                resolve()};
        }));

        const allMedia = [...images, ...videos];

        Promise.all(allMedia).then(() => setLoading(true));
    }, [projects]);


    // useEffect(() => {
    //     const images = projects.map((project) => new Promise((resolve) => {
    //         const image = new Image();
    //         image.src = project.thumbnail;
    //         image.onload = () => resolve();

    //     }));
    //     Promise.all(images).then(() => setLoading(true));
    // }, [projects]);


    const [option,setOption]=useState(null);
    // const [option,setOption]=useState(projects[0]);

    useEffect(() => {
        console.log('Option changed:', option);
      }, [option]); 

      useEffect(() => {
        let timeout;
        if (!loading) {
            timeout = setTimeout(() => {
                // setCount((prevCount) => prevCount + 1);
                toast(`Loading media...`);
            }, 4000);
        }
        return () => clearTimeout(timeout);
    }, [loading]);

    return(
        <>
        <main className='projects-main'>
        {loading===false?<div className="home-spinner">
                        <PacmanLoader color="#fff" loading={!loading} size={20} />
                    </div>:
                    <>
                <section className='project-nav'>
                    {projects.map((item,index)=>(<>
                        <div key={index} onClick={()=>{setOption(item)}} className='project' style={{background:`url(${item.thumbnail})`, backgroundSize:"contain"}}>
                            <h3 className='nav'>{item.name}</h3>
                        </div>
                        </>
                    ))}
                </section>
                {option!==null?
                <>
                    <section className='project-container'>
                        <h1 id={option.name.split(" ")[0].toLowerCase()} className='project-heading'>{option.name}</h1>
                        <h4 className='project-keyline'>{option.keyLine}</h4>
                        {/* <h4 className='project-link'>GitHub repository: <a href={option.github}>Link</a> </h4> */}
                        <div className='project-overview-section'>
                            <h2 className='project-overview-heading'>Overview</h2>
                            <p className='project-overview'>{option.overview}</p>
                        </div>
                        <div className='project-video-section'>
                            <h2 className='project-video-heading'>Video Demonstration</h2>
                            <video className='project-video' controls>
                                <source src={option.video} type='video/mp4'/>
                                Your browser does not support this video tag
                            </video>
                        </div>
                        <div className='project-tech'>
                            <h2 className='project-tech-heading'>
                                Technologies / Libraries
                            </h2>
                            <ul className='tech-list'>
                                {option.technology.map((tech,index)=>(
                                        <li key={index}><span className='tech-heading'>{tech.tech} : </span>  {tech.purpose}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='project-challenges'>
                            <h2 className='project-challenges-heading'>Challenges Faced</h2>
                            <ul className='challenge-list'>
                                  {option.challenges.map((challenge,index)=>(
                                        <li key={index}>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </>:<></>}
            </>
            }
            </main>
        </>
    )
}

export {Projects};