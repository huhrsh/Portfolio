import { Link, NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import '../Styles/Navbar.css'
import bg from '../Assets/bg1.mp4'
import bgv from '../Assets/bgv2.mp4'
import {BarLoader} from 'react-spinners'
import { ToastContainer } from "react-toastify"

function Navbar(){
    const [openNav,setOpenNav]=useState(false)
    const [loading, setLoading]=useState(false);
    const temp= window.location.href.split('/').slice(-1).toString()
    const [nav,setNav]=useState(temp)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoading(true);
    //     },1000)
    // },[loading])

    return (
        <>
      <ToastContainer theme="dark"/>
        {!loading?
            <>
                    <div className="navbar-spinner">
                        <BarLoader color="#fff" loading={!loading} size={20} />
                    </div>
                    <video className="bg-video" autoPlay='true' loop muted preload='auto' onCanPlayThrough={()=>{setLoading(!loading)}}>
                        <source src={bgv}/>
                    </video>
            </>
           : <>
            <header className="max-sm:hidden" >
                <NavLink activeClassName="active" className="header-link" to="/">Home</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/education">Education</NavLink>
                {/* <NavLink activeClassName="active" className="header-link" to="/portfolio/work-experience">Work Experience</NavLink> */}
                <NavLink activeClassName="active" className="header-link" to="/projects">Projects</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/certifications">Certifications</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/skills">Skills</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/contacts">Contacts</NavLink>
            </header>
            {
                openNav? 
            <header className={`sm:hidden max-sm:flex flex-col fixed w-screen transition h-screen animate__animated animate__faster ${openNav?"animate__fadeInDown":"animate__fadeOutDown"} overflow-hidden bg-[#222] z-30 py-32`} >
                <NavLink onClick={()=>{setNav('');setOpenNav(!openNav)}} activeClassName="active" className="header-link" to="/">Home</NavLink>
                <NavLink onClick={()=>{setNav('Education');setOpenNav(!openNav)}} activeClassName="active" className="header-link" to="/education">Education</NavLink>
                {/* <NavLink onClick={()=>{setNav();setOpenNav(!openNav)}} activeClassName="active" className="header-link" to="/portfolio/work-experience">Work Experience</NavLink> */}
                <NavLink onClick={()=>{setNav("projects");setOpenNav(!openNav)}} activeClassName="active" className="header-link" to="/projects">Projects</NavLink>
                <NavLink onClick={()=>{setNav("certifications");setOpenNav(!openNav)}} activeClassName="active" className="header-link" to="/certifications">Certifications</NavLink>
                <NavLink onClick={()=>{setNav("skills");setOpenNav(!openNav)}} activeClassName="active" className="header-link" to="/skills">Skills</NavLink>
                <NavLink onClick={()=>{setNav("contacts");setOpenNav(!openNav)}} activeClassName="active" className="header-link" to="/contacts">Contacts</NavLink>
            </header>
            :<></>
            }
            <div className="sm:hidden flex w-screen justify-between px-4 items-center py-2 pt-4">
                <p className="text-3xl tracking-wide font-[Raleway] capitalize font-semibold text-gray-200">{nav==''?"Home":nav}</p>
                <img onClick={()=>{setNav();setOpenNav(!openNav)}} className="bg-white rounded-full p-2.5 h-12" src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"  />
            </div>
            <video className="bg-video" autoPlay='true' loop muted preload='auto'>
                        <source src={bgv}/>
            </video>
            <Outlet/>
            </>
        }
        </>
    )
}

export {Navbar}