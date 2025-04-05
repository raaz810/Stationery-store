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
                    <h1 className='md:text-5xl text-2xl font-medium mb-7'>Premium Stationary in Vizag – Discover Quality at <span className='text-blue-700'>Stationery Haven 📚</span></h1>
                    <p className='mb-10'>
                    Welcome to <span  className='text-blue-700'>Stationery Haven 📚</span> managed by Saraswati Stationery & Books, Stationery & Xerox! Located at <Link  to='https://www.google.com/maps/place/LNCT+Group+of+Colleges/@23.2512042,77.5221699,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x397c4244c97d6f29:0x72457a4e85fd116c!2sLNCT+Group+of+Colleges!8m2!3d23.2512042!4d77.5247448!16s%2Fm%2F05b1kzf!3m5!1s0x397c4244c97d6f29:0x72457a4e85fd116c!8m2!3d23.2512042!4d77.5247448!16s%2Fm%2F05b1kzf?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D' target="_blank" className='text-blue-700'>20-1-44 Kolar Road, Ward-23, near LNCT College Gate, Bhopal</Link>, we provide a simple, time-saving ordering experience. Place your order online, and we’ll have it ready for quick pick-up and payment at our shop – no need to wait in line. Just place your order here, and it’ll be packed and waiting for you!
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