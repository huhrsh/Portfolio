import '../Styles/Home.css'
import { useState,useEffect } from 'react';
import {PacmanLoader} from 'react-spinners'

function Home(){

    const [imageLoaded, setImageLoaded] = useState(true);

    useEffect(() => {
        // const image = new Image();
        // image.src = picture
        // image.onload = () => {
        //     setImageLoaded(true);
        // };
    }, []);

    return (
        <>
        <main className='home-main'>
        {!imageLoaded ? (
                    <div className="home-spinner">
                        <PacmanLoader color="#fff" loading={!imageLoaded} size={20} />
                    </div>
                ) : (
                    <>
                        <div className='home-left animate__animated animate__fadeIn'>
                            <div className='greeting-name'>
                                <h1 className='name' >Harsh Jain</h1>
                                <h2 className='job'>Web Developer</h2>
                            </div>
                            <div className='profile'>
                            I am a third-year undergraduate student pursuing a B.Tech in Computer Science and Engineering, 
                            deeply passionate about web development. 
                            I excel in breaking down complex challenges into manageable solutions, 
                            driven by a commitment to continuous learning and a strong problem-solving mindset. 
                            My goal is to deliver high-end results through a combination of technical skills and creativity. 
                            </div>
                        </div>
            {/* <div className='home-right'>
                <div className='photo-frame'>
                    <div className='photo-glass'></div>
                    <img src={picture}  alt='profile'/>
                </div>
            </div>   */}
                    </>
                )}
            
        </main>
        </>
    )
}

export {Home}
