import React from 'react'
import { Link } from 'react-router'


const orderStatus = [
    {
        id: 1,
        status: "canceled",
        icon: "../../../public/unassign-order.svg",
        title: "Canceled Orders",
        orderStatusNumber: 84,
    },
    {
        id: 2,
        status: "pick-up",
        icon: "../../../public/accept-dalivery-man.svg",
        title: "Accepted Delivery Man",
        orderStatusNumber: 20,
    },
    {
        id: 3,
        status: "cooking",
        icon: "../../../public/cooking-in-iestaurant.png",
        title: "Cooking In Restaurant",
        orderStatusNumber: 15,
    },
    {
        id: 4,
        status: "picked",
        icon: "../../../public/picked-up-elivery-an.svg",
        title: "Picked up Delivery Man",
        orderStatusNumber: 2,
    }
]

export default function OrderStatus() {
    return (
        <>
            <div className='grid grid-cols-4 gap-5'>
                {
                    orderStatus.map(item => (
                        <Link state={{ daliveryStatus: item.status }} to="/accept-delivery-man" key={item.id}>
                            <div className='flex items-center justify-between bg-[#F4F6F8] border-[1px] border-[#FFBD8A] rounded-[16px] p-[20px]'>
                                <div className='flex gap-4'>
                                    <div>
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-[#212B36] text-[18px] leading-[28px]'>{item.title}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[24px] font-semibold leading-[36px] text-[#FF6F00]'>52</span>
                                </div>
                            </div>

                        </Link>

                    ))
                }
            </div>

        </>
    )
}
