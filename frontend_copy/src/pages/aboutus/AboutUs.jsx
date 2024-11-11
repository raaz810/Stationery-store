import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const AboutUs = () => {
  return (
    
    <div className="max-w-screen-lg mx-auto py-16 px-4">
        
      <h1 className="text-4xl font-bold mb-8 text-blue-600">About Us</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Welcome to <span className='text-blue-600'>Skribb</span> - Sri Balaji Books & Stationary</h2>
          <p className="text-lg text-gray-700">
            Sri Balaji Books & Stationary is a trusted shop located in the heart of Visakhapatnam, offering a wide variety of books, stationery, and Xerox services. 
            We have been serving the local community for years, providing quality products and exceptional customer service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
          <p className="text-lg text-gray-700">
            At Sri Balaji Books & Stationary, we believe in offering a comprehensive selection of products for students, professionals, and creative individuals. 
            From books in various categories to essential stationery items like pens, pencils, colors, adhesives, and much more, we have everything you need.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Additionally, our Xerox services provide high-quality photocopying solutions for academic, office, and personal needs. 
            Our mission is to provide a one-stop shop for all your reading, stationary, and printing requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Convenient Service Model</h2>
          <p className="text-lg text-gray-700">
            With our website, you can conveniently browse through a wide range of products and order online. 
            Once you place your order, simply visit our physical store at <Link target="_blank" to="https://maps.app.goo.gl/zjM8kqkShBgggySL6"><strong>20-1-44 Reliveedhi, Ward-23, AVN College Polytechnic Gate, Visakhapatnam</strong></Link> to pick up your order. 
            The product will be packaged and ready for you to collect without having to stand in long queues.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Our goal is to simplify the shopping experience for our customers by allowing them to order products online and pick them up quickly at our store. 
            Whether you need a book, stationery, or Xerox services, we make it easier than ever to get what you need without the hassle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Wide range of books, stationary, and Xerox services</li>
            <li>Convenient online ordering with in-store pickup</li>
            <li>Friendly, knowledgeable staff ready to assist you</li>
            <li>Quality products at competitive prices</li>
            <li>Reliable and fast service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <p className="text-lg text-gray-700">
            Sri Balaji Books & Stationary is conveniently located at <Link target="_blank" to="https://maps.app.goo.gl/zjM8kqkShBgggySL6"><strong>20-1-44 Reliveedhi, Ward-23, AVN College Polytechnic Gate, Visakhapatnam</strong></Link>.
            Visit us anytime during our store hours from Monday to Saturday: 9:00 AM - 8:00 PM. We are closed on Sundays.
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;