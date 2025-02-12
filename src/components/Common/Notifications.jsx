import React, { useEffect, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import productImg from '../../assets/images/product-img.png';
import { FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router';
import EmptyNotifications from './EmptyNotifications';

export default function Notifications() {

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


    const products = [
        {
            id: 1,
            title: "John Doe has submitted a leave request for ...",
            image: productImg,
            orderDate: "Nov 21, 2024",
            orderTime: "10:20 PM"
        },
        {
            id: 2,
            title: "John Doe has submitted a leave request for ...",
            image: productImg,
            orderDate: "Nov 21, 2024",
            orderTime: "10:20 PM"
        },
        {
            id: 3,
            title: "John Doe has submitted a leave request for ...",
            image: productImg,
            orderDate: "Nov 21, 2024",
            orderTime: "10:20 PM"
        },
        {
            id: 4,
            title: "John Doe has submitted a leave request for ...",
            image: productImg,
            orderDate: "Nov 21, 2024",
            orderTime: "10:20 PM"
        },
    ]

    return (
        <>
            <div className='relative' ref={notificationBody}>

                <div className={` fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-100 ${openbox ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onClick={() => setOpenbox(false)}
                ></div>

                <div className={`md:w-[44px] w-[35px] md:h-[44px] h-[35px] rounded-full border-[1px]  flex items-center justify-center cursor-pointer relative ${openbox ? "border-primaryOrange" : "border-[#919EAB]"} `} onClick={notificationsBtn}>
                    <button className={`md:text-[20px] text-[16px] ${openbox ? "text-primaryOrange" : "text-[#919EAB]"}`}><FaRegBell /></button>
                    <div className='absolute -top-[0px] -right-[8px] bg-primaryOrange text-white min-w-[20px] h-[20px] flex items-center justify-center rounded-[100%] p-[3px]'>
                        <span className='text-[12px]'>0</span>
                    </div>
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
                        {
                            products.length > 0 ? <h4 className='text-[#637381] md:text-[18px] text-[14px]  font-medium mb-[10px]'>Today</h4> : ""
                        }



                        <div className='flex gap-[15px] flex-col'>

                            {

                                products.length > 0 ? (

                                    products.map((product, index) => (
                                        <div className='flex gap-[10px]' key={index}>
                                            <div className=' md:min-w-[70px]  min-w-[50px] w-[50px] md:h-[70px] h-[70px] rounded-[8px] overflow-hidden md:w-[15%]'>
                                                <img className='w-[100%] h-[100%]' src={product.image} alt="" />
                                            </div>
                                            <div className='w-[80%]'>
                                                <h6 className='font-medium font-poppins text-[15px] leading-5'>{product.title}</h6>
                                                <div className='flex text-[#637381] text-[14px] md:text-[15px]'>
                                                    <p className='mr-[15px] border-r-[2px] broder-[#919EAB] pe-[15px]'>{product.orderDate}</p>
                                                    <p>{product.orderTime}</p>
                                                </div>
                                            </div>
                                            <div className='w-[15px]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <circle cx="5" cy="5" r="5" fill="#FF4842" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <EmptyNotifications text="No Notifications Yet" className=""></EmptyNotifications>
                                    </>
                                )


                            }



                        </div>
                    </div>
                    {/* <div className='md:px-[30px] px-[15px] pt-[20px]'>
                        <h4 className='text-[#637381] md:text-[18px] font-medium mb-[10px] text-[14px]'>Tomorrow</h4>
                        <div className='flex gap-[10px] flex-col'>

                            {
                                products.map((product, index) => (
                                    <div className='flex gap-[10px]'>
                                        <div className=' md:min-w-[70px]  min-w-[50px] w-[50px] md:h-[75px] h-[50px] rounded-[8px] overflow-hidden md:w-[15%]'>
                                            <img className='w-[100%] h-[100%] object-cover' src={product.image} alt="" />
                                        </div>
                                        <div className='w-[80%]'>
                                            <h6 className='font-medium font-poppins text-[15px] leading-5'>{product.title}</h6>
                                            <div className='flex text-[#637381] text-[14px] md:text-[15px]'>
                                                <p className='mr-[15px] border-r-[2px] broder-[#919EAB] pe-[15px]'>{product.orderDate}</p>
                                                <p>{product.orderTime}</p>
                                            </div>
                                        </div>
                                        <div className='w-[15px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <circle cx="5" cy="5" r="5" fill="#FF4842" />
                                            </svg>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div> */}
                    <div className='md:px-[30px] px-[15px] pt-[20px]'>
                        <Link to="notifications" onClick={() => openbox(false)} className='font-semibold bg-primaryOrange text-white block text-center md:py-[12px] py-[10px] font-poppins text-[14px] md:text-[16px] rounded'> See all</Link>
                    </div>
                </div>


            </div>
        </>
    )
}
