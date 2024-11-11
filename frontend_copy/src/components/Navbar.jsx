import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3 } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import avatarImg from "../assets/avatar.png";
import { useSelector } from 'react-redux';
import { useAuth } from "../context/AuthContext";
import { FaChevronDown } from 'react-icons/fa'; 

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { currentUser, logout } = useAuth()
    const handleLogOut = () => {
        logout()
    }
    const navigation = [
        { name: "Dashboard", href: "/user-dashboard" },
        { name: "Orders", href: "/orders" },
        { name: "Cart Page", href: "/cart" },
        { name: "Check Out", href: "/checkout" },

    ]
    const token = localStorage.getItem('token');

    return (
        <>
            <header className="ax-w-screen-2mxl mx-auto px-4 py-6 font-secondary bg-gray-100">
                <nav className='flex justify-between items-center'>
                    <div className='flex items-center md:gap-16 gap-4'>

                        {/* left side */}
                        <Link to="/"><FaHome className='size-6' /></Link>
                        <h1 className="title text-5xl font-bold text-grey-600 hover:text-blue-600 transition-all cursor-pointer">
                            Skribb
                        </h1>
                    </div>



                    {/* right side */}
                    <div className='relative flex items-center md:space-x-5 space-x-2'>
                        <div>
                            {
                                currentUser ? <>
                                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2">
                                            <img 
                                                src={avatarImg} 
                                                alt="Avatar" 
                                                className={`w-8 h-8 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} 
                                            />
                                            <FaChevronDown 
                                                size={16} 
                                                className={`transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform`} 
                                            />
                                        </button>
                                    {/* show dropdowns */}
                                    {
                                        isDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                                <ul className="py-2">
                                                    {
                                                        navigation.map((item) => (
                                                            <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                                <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                    <li>
                                                        <button
                                                            onClick={handleLogOut}
                                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                    
                                </> : <Link to="/login"><HiOutlineUser className='size-6' /></Link>
                            }
                        </div>




                        <Link to="/cart" className="bg-primary text-3xl p-1 sm:px-6 px-2 flex items-center rounded-lg">
                            <LuShoppingCart className='' />
                            {
                                cartItems.length > 0 ? <span className="text-xl font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span>
                            }
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
