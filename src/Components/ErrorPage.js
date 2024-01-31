import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import '../Styles/ErrorPage.css'
import error from '../Assets/error.png'
import bg from '../Assets/bg.mp4'


function ErrorPage() {

    const [imageLoaded, setImageLoaded] = useState(false);

    const navigate=useNavigate();    

    useEffect(() => {
        const image = new Image();
        image.src = error;

        image.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    return (
        <>
            <main className="error-main">
            {/* <video autoPlay loop muted preload='auto' className="error-video">
                    <source src={bg}/>
                </video> */}
                {!imageLoaded ? (
                    <div className="spinner-container">
                        <BarLoader color="#333" loading={!imageLoaded} size={20} />
                    </div>
                ) : (
                    <>
                        <img
                            src={error}
                            alt="error"
                        />
                        <h2>You landed on the wrong page</h2>
                        <p className="go-back-button" onClick={()=>{navigate(-1)}}>Go back</p>
                    </>
                )}
            </main>
        </>
    )
}

export { ErrorPage };