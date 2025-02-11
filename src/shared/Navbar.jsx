import React, { useEffect, useRef, useState } from 'react'
import ProfileImg from "../assets/images/profile-pic.png"
import productImg from "../assets/images/product-img.png"
import { Link } from 'react-router';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { FaBars, FaRegBell } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';




export default function Navbar({ handelSidebar, openBtn }) {



    const [profileToggle, setProfileToggle] = useState(false);
    const dropdownRef = useRef(null);

    const profileToggleHandelar = () => {
        setProfileToggle(!profileToggle)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setProfileToggle(false);
            }
        };


        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, []);

    const [openbox, setOpenbox] = useState(false)
    const notificationsBtn = () => {
        setOpenbox(!openbox)
    }

    const notificationBody = useRef(null)

    useEffect(() => {

        const handleClickOutsite = (e) => {
            if (notificationBody.current && !notificationBody.current.contains(e.target)) {
                setOpenbox(false);
            }
        }

        document.addEventListener("click", handleClickOutsite);
        return () => {
            document.removeEventListener("click", handleClickOutsite)
        }

    }, [])



    return (
        <div className='flex justify-between items-center p-[15px] lg:py-[24px] lg:ps-[24px] lg:pr-[40px] bg-white'>
            <div>
                <h4 className='md:text-[24px] text-[18px] leading-[20px] font-medium'>Dashboard Overview</h4>
            </div>
            <div className='flex gap-[20px]'>
                <div>

                </div>
                <div className='relative' ref={notificationBody}>

                    <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-100 ${openbox ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                        onClick={() => setOpenbox(false)}
                    ></div>

                    <div className={`md:w-[44px] w-[35px] md:h-[44px] h-[35px] rounded-full border-[1px]  flex items-center justify-center cursor-pointer ${openbox ? "border-primaryOrange" : "border-[#919EAB]"} `} onClick={notificationsBtn}>
                        <button className={`md:text-[20px] text-[16px] ${openbox ? "text-primaryOrange" : "text-[#919EAB]"}`}><FaRegBell /></button>
                    </div>

                    <div className={`absolute z-[99] w-[300px] md:w-[450px] -translate-x-[50%] md:-translate-x-[90%] lg:-translate-x-1/2  transition-all duration-200  bg-white rounded-[16px] md:py-[30px] py-[15px] ${openbox ? " opacity-100 top-[50px] md:top-[71px]" : "top-[150px] pointer-events-none opacity-0"}`}>

                        <div className='px-[15px] md:px-[30px] flex justify-between mb-[20px]'>
                            <div>
                                <h4 className='text-[#161C24] text-[16px] md:text-[20px] font-medium mb-[5px]'>Notifications</h4>
                                <p className='text-[15px] text-[#454F5B]'>Stay Updated with your latest Notifications</p>
                            </div>
                            <div>
                                <button className='text-[20px] text-[red]' onClick={() => setOpenbox(false)}><IoClose /></button>
                            </div>
                        </div>
                        <div className='bg-[#DFE3E8] py-[10px] md:px-[30px] px-[15px] flex justify-between items-center'>
                            <div className='flex items-center'>
                                <h4 className='text-[#161C24] text-[16px] mr-[10px] md:mr-[20px] font-medium'>All</h4>
                                <span className='text-[#161C24] text-[14px]'>Unread (12)</span>
                            </div>
                            <div>
                                <p className='text-[14px] text-primaryOrange'><span></span> Mark all as read</p>
                            </div>
                        </div>
                        <div className='md:px-[30px] px-[15px] md:pt-[20px] pt-[10px]'>
                            <h4 className='text-[#637381] md:text-[18px] text-[14px]  font-medium mb-[10px]'>Today</h4>
                            <div className='flex gap-[10px] flex-col'>
                                <div className='flex gap-[10px] '>
                                    <div className=' md:min-w-[70px]  min-w-[50px] w-[50px] md:h-[75px] h-[50px] rounded-[8px] overflow-hidden md:w-[15%]'>
                                        <img className='w-[100%] h-[100%] object-cover' src={productImg} alt="" />
                                    </div>
                                    <div className='w-[80%]'>
                                        <h6 className='font-medium font-poppins text-[14px] md:text-[15px]'>John Doe .....</h6>
                                        <div className='flex text-[#637381] text-[14px] md:text-[15px]'>
                                            <p className='mr-[15px] border-r-[2px] broder-[#919EAB] pe-[15px]'>Nov 21, 2024</p>
                                            <p>09:00 PM</p>
                                        </div>
                                    </div>
                                    <div className='text-end w-[5%]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <circle cx="5" cy="5" r="5" fill="#FF4842" />
                                        </svg>
                                    </div>
                                </div>

                                <div className='flex gap-[10px]'>
                                    <div className=' md:min-w-[70px]  min-w-[50px] w-[50px] md:h-[75px] h-[50px] rounded-[8px] overflow-hidden md:w-[15%]'>
                                        <img className='w-[100%] h-[100%] object-cover' src={productImg} alt="" />
                                    </div>
                                    <div className='w-[80%]'>
                                        <h6 className='font-medium font-poppins text-[15px] leading-5'>John Doe has submitted a leave request for .....</h6>
                                        <div className='flex text-[#637381] text-[14px] md:text-[15px]'>
                                            <p className='mr-[15px] border-r-[2px] broder-[#919EAB] pe-[15px]'>Nov 21, 2024</p>
                                            <p>09:00 PM</p>
                                        </div>
                                    </div>
                                    <div className='w-[15px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <circle cx="5" cy="5" r="5" fill="#FF4842" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='md:px-[30px] px-[15px] pt-[20px]'>
                            <h4 className='text-[#637381] md:text-[18px] font-medium mb-[10px] text-[14px]'>Tomorrow</h4>
                            <div className='flex gap-[10px] flex-col'>

                                <div className='flex gap-[10px]'>
                                    <div className=' md:min-w-[70px]  min-w-[50px] w-[50px] md:h-[75px] h-[50px] rounded-[8px] overflow-hidden md:w-[15%]'>
                                        <img className='w-[100%] h-[100%] object-cover' src={productImg} alt="" />
                                    </div>
                                    <div className='w-[80%]'>
                                        <h6 className='font-medium font-poppins text-[15px] leading-5'>John Doe has submitted a leave request for .....</h6>
                                        <div className='flex text-[#637381] text-[14px] md:text-[15px]'>
                                            <p className='mr-[15px] border-r-[2px] broder-[#919EAB] pe-[15px]'>Nov 21, 2024</p>
                                            <p>09:00 PM</p>
                                        </div>
                                    </div>
                                    <div className='w-[15px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <circle cx="5" cy="5" r="5" fill="#FF4842" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='md:px-[30px] px-[15px] pt-[20px]'>
                            <Link to="notifications" onClick={() => openbox(false)} className='font-semibold bg-primaryOrange text-white block text-center md:py-[12px] py-[10px] font-poppins text-[14px] md:text-[16px]'> See all</Link>
                        </div>
                    </div>


                </div>

                <div className='relative ' ref={dropdownRef}>

                    <div className='flex cursor-pointer' onClick={profileToggleHandelar}>
                        <div className='md:w-[46px] w-[35px] md:h-[46px] h-[35px] rounded-full flex md:mr-[14px] '>
                            <img src={ProfileImg} alt="" className='  object-cover' />
                        </div>
                        <div className='hidden md:block'>
                            <h4 className='text-[16px] font-semibold font-poppins'>Md. Merajul Islam</h4>
                            <p className='text-[14px] font-poppins text-[#637381]'>Shop Owner</p>
                        </div>
                        <div className='hidden md:block'>
                            <button className='ms-[15px] text-[20px] font-light'><LiaAngleDownSolid /></button>
                        </div>
                    </div>

                    <div className={`absolute w-[200px] right-0 top-[100px] rounded bg-primaryBlack  backdrop-blur-[35px] px-[10px] transition-all
                         duration-[500] ease-in-out  ${profileToggle ? "opacity-[1] top-[50px] md:top-[70px]" : "opacity-[0] pointer-events-none"}`}>
                        <ul>
                            <li className='font-medium text-white mb-[1px] border-b-[1px] border-white p-[10px]' ><Link className='block' to="profile" onClick={() => setProfileToggle(false)}>Profile</Link></li>
                            <li className='font-medium text-white p-[10px]' onClick={() => setProfileToggle(false)}><button className='w-full text-start'>Logout</button></li>
                        </ul>
                    </div>

                </div>

                <div className='md:w-[46px] w-[35px]  md:h-[46px] h-[35px] flex justify-center items-center border-[1px] rounded-[100%] border-[#637381] visible lg:hidden' onClick={handelSidebar} ref={openBtn}>
                    <button className='text-[16px] text-[#919EAB]'><FaBars /></button>
                </div>


            </div>
        </div>
    )
}
