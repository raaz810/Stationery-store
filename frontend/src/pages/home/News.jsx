import React from 'react';
import { FaClipboardCheck, FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
      <p className="text-gray-600 mb-10">
        Simplify your shopping experience with our pre-order system at <span className='text-blue-600'>Stationery Haven 📚, </span>managed by Saraswati Stationery & Books Xerox. Order online, and your items will be ready for pick-up, reducing wait times and ensuring convenience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <FaClipboardCheck className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Step 1: Order Online</h3>
          <p className="text-gray-600">Browse and add your needed items to the cart. Submit your order to let us prepare it in advance.</p>
        </div>

        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Step 2: Visit Our Store</h3>
          <p className="text-gray-600">
            Pick up your order at <Link to='https://www.google.com/maps/place/LNCT+Group+of+Colleges/@23.2512042,77.5221699,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x397c4244c97d6f29:0x72457a4e85fd116c!2sLNCT+Group+of+Colleges!8m2!3d23.2512042!4d77.5247448!16s%2Fm%2F05b1kzf!3m5!1s0x397c4244c97d6f29:0x72457a4e85fd116c!8m2!3d23.2512042!4d77.5247448!16s%2Fm%2F05b1kzf?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D' target="_blank" className='text-blue-600'>Saraswati Stationery & Books Xerox, located at 20-1-44 Kolar Road, LNCT College Gate, Vizag.</Link>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaShoppingBag className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Step 3: Collect & Pay</h3>
          <p className="text-gray-600">
            Pay for your items upon collection, avoiding wait times. Your order will be ready for you in a bag for easy pick-up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;