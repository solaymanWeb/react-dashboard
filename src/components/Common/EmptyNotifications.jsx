import React from 'react'
import emptyNotifications from "../../assets/images/empty-notifications.svg"

export default function EmptyNotifications({ text, className }) {
    return (
        <div>
            <div className={` pt-[70px]  ${className}`}><img src={emptyNotifications} alt="" className='w-[150px] mx-auto' /></div>
            <h2 className='text-[24px] font-[700] text-center pt-[30px] pb-[50px]'>{text}</h2>
        </div>
    )
}
