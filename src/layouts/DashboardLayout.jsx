import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/Navbar'
import Sidebar from '../shared/Sidebar'

export default function DashboardLayout({ }) {

    const [sidebar, setSidebar] = useState(false);
    const openBtn = useRef()

    const sidebarWrappe = useRef(null);

    const handelSidebar = () => {
        setSidebar(!sidebar);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // If the sidebar is open and the click is outside, close it
            if ((sidebarWrappe.current) && (!sidebarWrappe.current.contains(event.target) && !openBtn.current.contains(event.target))) {
                setSidebar(false);

            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);


    return (
        <>
            <div className='flex'>
                <div ref={sidebarWrappe}>

                    <div onClick={() => setSidebar(false)} className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-100 ${sidebar ? "opacity-100 visible" : "opacity-0 hidden"} `}>

                    </div>

                    <div className={`w-[250px] min-w-[250px] lg:w-[320px] lg:min-w-[320px] hidden-scrollbar text-[#919EAB] py-[30px] h-[100vh] bg-primaryBlack fixed lg:sticky top-0 overflow-auto transition-all duration-500 ease-in-out z-[999] lg:translate-x-0 lg:opacity-100  ${sidebar ? "translate-x-0 opacity-100" : " -translate-x-full opacity-0"}`} >
                        <Sidebar setSidebar={setSidebar} />
                    </div>
                </div>

                <div className='w-[100%] min-h-[100vh] bg-primaryBg'>

                    <div className='sticky top-0'>
                        <Navbar handelSidebar={handelSidebar} openBtn={openBtn} />
                    </div>

                    <div className='md:pt-[10px] mt-[10px] md:pr-[40px] pr-[15px] md:pl-[20px] pl-[15px] pb-[50px]'>
                        <Outlet />
                    </div>

                </div>

            </div>

        </>
    )
}
