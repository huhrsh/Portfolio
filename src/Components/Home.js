import { useState, useEffect } from 'react';
import { BarLoader } from 'react-spinners';

function Home() {
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
            <main className='home-main w-screen min-h-[90vh] overflow-hidden
            flex flex-col justify-center
             '>
                {!imageLoaded ? (
                    <div className="home-spinner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <BarLoader color="#fff" loading={!imageLoaded} size={20} />
                    </div>
                ) : (
                    <>
                        <div className='home-left animate__animated animate__fadeIn h-full w-full flex flex-col justify-center gap-[10vh] items-center
                        max-sm:gap-10'>
                            <div className='greeting-name '>
                                <h1 className='name text-9xl  font-semibold text-white uppercase tracking-wide leading-tight
                                 max-sm:text-8xl  max-sm:pl-8  max-sm:mb-2  
                                '>Harsh Jain</h1>
                                <h2 className='job text-3xl text-[#ddd] pl-3 font-light uppercase tracking-[0.7vw] max-sm:pl-8 '>Web Developer</h2>
                            </div>
                            <div className='profile text-gray-300 text-2xl w-9/12 font-light text-justify leading-relaxed
                            max-sm:text-left  max-sm:w-full max-sm:px-6 max-sm:text-[1.4rem]
                            '>
                                Passionate third-year Computer Science and Engineering student excelling in web development, adept at breaking down complex challenges into creative and high-quality solutions, driven by a commitment to continuous learning and a strong problem-solving mindset.
                            </div>
                        </div>
                        {/* <div className='home-right'>
                            <div className='photo-frame w-65 aspect-w-1 aspect-h-1 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-200'>
                                <div className='photo-glass w-40 h-90 absolute'></div>
                                <img src={picture} alt='profile' className='backdrop-blur-lg z-10 object-contain rounded-full' />
                            </div>
                        </div> */}
                    </>
                )}
            </main>
        </>
    )
}

export { Home }
