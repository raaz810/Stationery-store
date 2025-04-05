import React, { useState } from 'react';
import Bookcard from '../books/Bookcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import { Link } from 'react-router-dom';

const TopSellers = () => {
    const { data: books = [], isLoading, isError } = useFetchAllBooksQuery();
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredBooks = selectedCategory === 'all'
        ? books
        : books.filter((book) => book.category === selectedCategory);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading books</div>;

    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-3xl font-semibold'>Top Sellers</h2>
                <Link
                    to="/all-products"
                    className="bg-yellow-400 text-black  px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition"
                >
                    <strong>All Products</strong>
                </Link>
            </div>
            
            {/* Category filtering */}
            <div className="mb-6">
                <label htmlFor="category" className="font-medium mr-2">Filter by Category:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="border border-gray-300 rounded-md px-3 py-2"
                >
                    <option value="all">All</option>
                    <option value="penandpencil">Pen and Pencil</option>
                    <option value="colors">Colors</option>
                    <option value="adhesive">Adhesive or Gum</option>
                    <option value="box">Box</option>
                    <option value="book">Register</option>
                    <option value="book">Book</option>
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1180: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                    <SwiperSlide key={index}>
                        <Bookcard book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopSellers;