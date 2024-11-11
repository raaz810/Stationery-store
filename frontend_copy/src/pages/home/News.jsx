import React from 'react';
import { FaClipboardCheck, FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
      <p className="text-gray-600 mb-10">
        Simplify your shopping experience with our pre-order system at <span className='text-blue-600'>Skribb, </span>managed by Sri Balaji Books & Stationary Xerox. Order online, and your items will be ready for pick-up, reducing wait times and ensuring convenience.
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
            Pick up your order at <Link to='https://maps.app.goo.gl/zjM8kqkShBgggySL6' target="_blank" className='text-blue-600'>Sri Balaji Books & Stationary Xerox, located at 20-1-44 RELIVEEDHI, AVN College Polytechnic Gate, Vizag.</Link>
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