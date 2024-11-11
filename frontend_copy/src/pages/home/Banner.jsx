import React from 'react'
import bannerImg from "../../assets/banner.png"
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="relative py-16">
            {/* Top Links Section */}


            {/* Main Banner Content */}
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
                <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                    <img src={bannerImg} alt="New releases banner" className="w-full h-auto" />
                </div>

                <div className='md:w-1/2 w-full'>
                    <h1 className='md:text-5xl text-2xl font-medium mb-7'>Premium Stationary in Vizag – Discover Quality at <span className='text-blue-700'>Skribb</span></h1>
                    <p className='mb-10'>
                    Welcome to <span  className='text-blue-700'>Skribb</span> managed by Sri Balaji Books, Stationery & Xerox! Located at <Link  to='https://maps.app.goo.gl/zjM8kqkShBgggySL6' target="_blank" className='text-blue-700'>20-1-44 Reliveedhi, Ward-23, near AVN College Polytechnic Gate, Visakhapatnam</Link>, we provide a simple, time-saving ordering experience. Place your order online, and we’ll have it ready for quick pick-up and payment at our shop – no need to wait in line. Just place your order here, and it’ll be packed and waiting for you!
                    </p>

                    <div className="flex justify-left space-x-8  py-4 z-10">
                    <Link to="/all-products">
                        <button className='btn-primary'>
                            
                                Browse Products
                            
                        </button>
                        </Link>
                        <Link to="/about-us">
                        <button className='btn-primary'>
                            
                                About Us
                            
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner