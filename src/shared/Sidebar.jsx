import React, { useRef, useState } from 'react'
import Logo from "../assets/images/logo.png"
import { Link, NavLink, useLocation } from 'react-router'
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleQuestion } from 'react-icons/lu';
import { GoQuestion } from 'react-icons/go';
import { CiLogout } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';
import { TiShoppingCart } from 'react-icons/ti';
import { BiFoodMenu } from 'react-icons/bi';
import { RiWallet3Line } from 'react-icons/ri';
import { MdReviews } from 'react-icons/md';
import { IoChevronDown } from "react-icons/io5";



export default function Sidebar({ setSidebar }) {

    const menuItems = [
        { name: "Dashboard", path: "/", icon: <RxDashboard /> },
        {
            name: "Orders",
            icon: <TiShoppingCart />,
            subMenu: [
                { name: "Order Requests", path: "/order/order-requests" },
                { name: "Order List", path: "/order/order-lists" },
            ]
        },
        { name: "Menu Management", path: "/menu-management", icon: <BiFoodMenu /> },
        { name: "Analytics", path: "/analytics", icon: <IoAnalytics /> },
        { name: "Wallet", path: "/wallet", icon: <RiWallet3Line />, },
        { name: "Review & Rating", path: "/review-rating", icon: <MdReviews /> }
    ];

    const supportItems = [
        { name: "Help & Center", path: "/help-center", icon: <LuMessageCircleQuestion /> },
        { name: "Settings", path: "/setting", icon: <IoSettingsOutline /> },
        { name: "FAQs", path: "/faqs", icon: <GoQuestion /> }
    ];


    // Toggle submenu

    const [openMenu, setOpenMenu] = useState(null);
    const location = useLocation(); // Get current route

    // Toggle submenu
    const toggleSubMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    // Close submenu when clicking a non-submenu item
    const handleMenuClick = () => {
        setOpenMenu(null);
    };




    return (
        <div className='h-[100vh bg-red-500]' >
            <div className="logo mb-[50px]">
                <Link to="/">
                    <img src={Logo} alt="" className='w-[100px] mx-auto' />
                </Link>
            </div>

            <div className='flex flex-col gap-[50px]' >
                <div>
                    <h5 className="mb-2 px-4 text-sm text-gray-400">MAIN MENU</h5>
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => {
                            const isActive = item.subMenu
                                ? item.subMenu.some((sub) => sub.path === location.pathname)
                                : item.path === location.pathname;

                            return (
                                <li key={index} className="relative" >
                                    {item.subMenu ? (
                                        <div>
                                            <button
                                                onClick={() => toggleSubMenu(index)}
                                                className={`flex items-center justify-between w-full px-4 py-[12px] mb-[2px] ${isActive || location.pathname === item.subMenu?.[0]?.path
                                                    ? "bg-white/20 backdrop-blur-[35px] text-white"
                                                    : "hover:bg-gray-700"
                                                    }`}
                                            >
                                                <div className="flex items-center">
                                                    <span className="pr-3">{item.icon}</span>
                                                    {item.name}
                                                </div>
                                                {/* Arrow Icon */}
                                                {item.subMenu && (
                                                    <IoChevronDown
                                                        className={`transition-transform duration-300 ${openMenu === index ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                )}
                                            </button>

                                            <ul className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openMenu === index ? "max-h-96" : "max-h-0"}`} >
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="ml-6 border-s-[1.5px] border-[#FF6F00]">
                                                        <NavLink
                                                            onClick={() => setSidebar(false)}
                                                            to={subItem.path}
                                                            className={({ isActive }) =>
                                                                `block px-4 py-[12px]  ${isActive ? "bg-white/20 backdrop-blur-[35px] text-white" : "hover:bg-gray-700"
                                                                }`
                                                            }
                                                        >
                                                            {subItem.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <NavLink

                                            to={item.path}
                                            onClick={(event) => {
                                                setSidebar(false);
                                                handleMenuClick(event);
                                            }}
                                            className={({ isActive }) =>
                                                `flex items-center px-4 py-[12px] mb-[1px] ${isActive ? "bg-white/20 backdrop-blur-[35px] text-white" : "hover:bg-gray-700"
                                                }`
                                            }
                                        >
                                            <span className="pr-3">{item.icon}</span>
                                            {item.name}

                                        </NavLink>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Help & Support */}
                <div>
                    <h5 className="mb-2 px-4 text-sm text-gray-400">HELP & SUPPORT</h5>
                    <ul className="space-y-1">
                        {supportItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    onClick={() => setSidebar(false)}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-[12px] mb-[2px] ${isActive ? "bg-white/15 backdrop-blur-[17.5px] text-white" : "hover:bg-gray-700"
                                        }`
                                    }
                                >
                                    <span className="pr-3">{item.icon}</span>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>



                <div className='mx-[15px]'>
                    <button className='border border-[#919EAB] py-[12px] px-[16px] rounded-[8px] text-[18px] w-full  flex items-center'> <span className='pr-[16px]'><CiLogout /></span> Log Out</button>
                </div>
            </div>

        </div>
    )
}
