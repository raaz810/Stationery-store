import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Bookcard from '../books/Bookcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Recommended = () => {
    const { data: books = [], isLoading, isError } = useFetchAllBooksQuery();
    const dispatch = useDispatch();

    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // console.log(books);
    // console.log(selectedCategory)

    // Filter books to show trending ones and by selected category
    const filteredBooks = selectedCategory === 'all'
        ? books.filter(book => book.trending === true)
        : books.filter(book => book.trending === true && book.category === selectedCategory);

       // console.log("Filtered Books", filteredBooks);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading books</div>;

    return (
        <div className='py-16'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-3xl font-semibold'>Trending items</h2>
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
                     <option value="notebook">Register</option>
                    <option value="pen">Pen</option>
                    <option value="crayons">Colors</option>
                    <option value="adhesive">Adhesive or Gum</option>
                    <option value="pencil">Pencil</option>
                </select>
            </div>
            
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                    <SwiperSlide key={index}>
                        <Bookcard book={book} onAddToCart={() => handleAddToCart(book)} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Recommended;