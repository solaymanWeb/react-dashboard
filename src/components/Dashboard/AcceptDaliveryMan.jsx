import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { useLocation } from 'react-router'

export default function AcceptDaliveryMan() {
    const location = useLocation()
    const { daliveryStatus } = location.state || {};
    console.log(daliveryStatus)


    const deliveryStatus = [
        { status: "pick-up", orderId: "#101", riderId: "#A1", name: "Miraj", riderImg: "/raider-profile.jpg", date: "31 Jan 2025", time: "08:25 PM" },
        { status: "picked", orderId: "#102", riderId: "#A2", name: "Rahim", riderImg: "/raider-profile.jpg", date: "01 Feb 2025", time: "10:15 AM" },
        { status: "pick-up", orderId: "#103", riderId: "#A3", name: "Karim", riderImg: "/raider-profile.jpg", date: "02 Feb 2025", time: "02:45 PM" },
        { status: "picked", orderId: "#104", riderId: "#A4", name: "Jamal", riderImg: "/raider-profile.jpg", date: "03 Feb 2025", time: "05:30 PM" },
        { status: "pick-up", orderId: "#105", riderId: "#A5", name: "Kamal", riderImg: "/raider-profile.jpg", date: "04 Feb 2025", time: "07:20 AM" },

        { status: "picked", orderId: "#106", riderId: "#A6", name: "Salam", riderImg: "/raider-profile.jpg", date: "05 Feb 2025", time: "11:10 AM" },
        { status: "pick-up", orderId: "#107", riderId: "#A7", name: "Nayeem", riderImg: "/raider-profile.jpg", date: "06 Feb 2025", time: "03:05 PM" },
        { status: "picked", orderId: "#108", riderId: "#A8", name: "Rakib", riderImg: "/raider-profile.jpg", date: "07 Feb 2025", time: "06:50 PM" },
        { status: "pick-up", orderId: "#109", riderId: "#A9", name: "Tareq", riderImg: "/raider-profile.jpg", date: "08 Feb 2025", time: "09:30 AM" },
        { status: "picked", orderId: "#110", riderId: "#A10", name: "Sajib", riderImg: "/raider-profile.jpg", date: "09 Feb 2025", time: "12:45 PM" },

        { status: "pick-up", orderId: "#111", riderId: "#A11", name: "Shakib", riderImg: "/raider-profile.jpg", date: "10 Feb 2025", time: "02:15 PM" },
        { status: "picked", orderId: "#112", riderId: "#A12", name: "Fahim", riderImg: "/raider-profile.jpg", date: "11 Feb 2025", time: "05:40 PM" },
    ];

    

    

    const filterStatus = deliveryStatus.filter(item => item.status === daliveryStatus)

    return (
        <>
            <div className='grid grid-cols-4 gap-5'>
                {

                    filterStatus.length > 0 ? (
                        filterStatus.map(item => (
                            <div className='rounded-[16px] bg-[#FFF] p-[20px]' key={item.orderId}>
                                <div className='mb-[20px]'>
                                    <h3 className='mb-[4px] text-[#161C24] font-poppins text-[18px] font-semibold leading-[28px]'>Order {item.orderId}</h3>
                                    <p className='text-[#637381] font-nunito text-[14px] leading-[22px]'><span>{item.date}</span> <span>{item.time}</span></p>
                                </div>
                                <div className='text-center'>
                                    <div className='w-[80px] h-[80px] rounded-full overflow-hidden mx-auto mb-[5px]' >
                                        <img className='w-full h-full object-cover' src={item.riderImg} alt="" />
                                    </div>
                                    <h3 className='text-[#161C24] mb-[6px] font-nunito'>Rider ID: <span>{item.riderId}</span></h3>
                                    <h5 className='font-poppins text-[14px] font-semibold leading-[20px] mb-[20px]'>{item.name}</h5>
                                    <div className='flex justify-center'>
                                        {
                                            item.status === "pick-up" ? (<button className='flex items-center justify-center gap-2 rounded-[8px] border border-[#70BF73] py-[9px] px-[12px] font-poppins font-semibold bg-[#C8E6C9] text-[#4CAF50]'> <FaCheck /> Pick Up</button>)
                                                : (<button className='flex items-center justify-center gap-2 rounded-[8px] border border-[#919EAB] py-[9px] px-[12px] font-poppins font-semibold bg-[#DFE3E8] text-[#919EAB]'> <FaCheck /> Picked</button>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    
                    ) : (<p className="text-center text-[#637381] font-nunito text-[16px]">No orders available for {daliveryStatus}</p>
                    )


                    


                }
            </div>
        </>
    )
}
