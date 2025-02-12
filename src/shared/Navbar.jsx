import React, { useEffect, useRef, useState } from 'react'
import ProfileImg from "../assets/images/profile-pic.png"
import { Link } from 'react-router';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { FaBars } from 'react-icons/fa';
import Select from '../components/Common/ReactSelect';
import Notifications from '../components/Common/Notifications';
import SearchBox from '../components/Common/SearchBox';

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





    return (
        <div className='flex justify-between items-center p-[15px] lg:py-[24px] lg:ps-[24px] lg:pr-[40px] bg-white'>
            <div>
                <h4 className='md:text-[24px] text-[18px] leading-[20px] font-medium'>Dashboard Overview</h4>
            </div>
            <div className='flex gap-[20px]'>
                <div>
                    <SearchBox></SearchBox>
                </div>
                <div className='hidden md:block'>
                    {/* Language select options */}
                    <Select></Select>
                </div>
                <div>
                    <Notifications></Notifications>
                </div>

                <div className='relative ' ref={dropdownRef}>
                    <div className='flex cursor-pointer' onClick={profileToggleHandelar}>
                        <div className='md:w-[46px] w-[35px] md:h-[46px] h-[35px] rounded-full flex md:mr-[14px] '>
                            <img src={ProfileImg} alt="" className='  object-cover' />
                        </div>
                        <div className='hidden md:block'>
                            <h4 className='text-[15px] font-semibold font-poppins truncate w-[100px]'>
                                Md. Merajul Islam
                            </h4>

                            <p className='text-[14px] font-poppins text-[#637381]'>Shop Owner</p>
                        </div>
                        <div className='hidden md:block'>
                            <button className='ms-[15px] text-[18px] font-light'><LiaAngleDownSolid /></button>
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

                <div className='md:w-[46px] md:min-w-[46px] w-[35px] min-w-[35px]  md:h-[46px] md:min-h-[46px] min-h-[35px] h-[35px] flex justify-center items-center border-[1px] rounded-[100%] border-[#637381] visible lg:hidden' onClick={handelSidebar} ref={openBtn}>
                    <button className='text-[16px] text-[#919EAB]'><FaBars /></button>
                </div>


            </div>
        </div>
    )
}
