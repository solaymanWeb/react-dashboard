import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export default function SearchBox() {

    return (
        <>
            <div className='relative w-[300px]'>
                <form action="">
                    <input type="search" placeholder='search...' className='border-[1px] border-[#919eab] focus:outline-0 w-full p-[10px] rounded-[30px] pl-[43px] ' />
                    <button className='absolute left-0 top-[50%] h-[100%] w-[50px] -translate-y-[50%] text-[18px]  text-center flex items-center justify-center text-[#919eab] rounded-l-[30px]' ><IoSearchOutline /></button>
                </form>
            </div>
        </>
    )
}
