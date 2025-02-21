import React, { useState } from 'react'
import { Id } from 'react-flags-select';
import Select from 'react-select';

export default function OrderOverview() {

    const options = [
        { value: 'this_month', label: 'This Month' },
        { value: 'this_day', label: 'This Day' },
        { value: 'this_year', label: 'This Year' },
    ];
    const [selectedOption, setSelectedOption] = useState("this_month");

    const orderOverview = [
        {
            id: 1,
            title: "Delivered Orders",
            orderNumber: 38,
        },
        {
            id: 2,
            title: "Canceled Orders",
            orderNumber: 10,
        },
        {
            id: 3,
            title: "Refunded Orders",
            orderNumber: 2,
        },
        {
            id: 4,
            title: "Payment Failed Orders",
            orderNumber: 21,
        },
    ]


    return (
        <div className='grid grid-cols-4 gap-5 mb-[20px]'>
            {
                orderOverview.map(item => (
                    <>
                        <div className={`p-[30px] border-[1px] border-[#FFBD8A] rounded-[24px]  ${item.id === 2 ? "bg-[#FEECEB]" : item.id === 3 ? "bg-[#FFF1E6]" : item.id === 4 ? "bg-[#FFD9E0]" : "bg-[#EDF7EE]"}`}>
                            <div className=' mb-[20px] flex justify-end '>
                                <Select
                                    onChange={setSelectedOption}
                                    options={options}
                                    defaultValue={options[1]}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: "transparent",
                                            boxShadow: "none",
                                            border: "none",
                                            fontSize: "14px",
                                        }),
                                    }}
                                    className="w-[50%] text-[14px] border-[1px] border-[#bbc2c7] rounded-[30px]"
                                />
                            </div>
                            <div>
                                <h2 className={`text-[36px] font-poppins font-bold  leading-[48px] mb-[15px] ${item.id === 1 ? "text-[#459F49]" : item.id === 2 ? "text-[#FF4842]" : "text-[#000]"}`}>{item.orderNumber}</h2>
                            </div>
                            <div>
                                <h4 className='text-[#212B36] font-poppins text-[24px] font-semibold leading-[36px]'>{item.title}</h4>
                            </div>
                        </div>

                    </>

                ))
            }



        </div>
    )
}
