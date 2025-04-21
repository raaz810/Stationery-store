import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const AllBooks = () => {
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

    // Filter books based on selected category
    const filteredBooks = selectedCategory === 'all'
        ? books
        : books.filter((book) => book.category === selectedCategory);
       // console.log(books);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading books</div>;

    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-8 text-left">All Products</h1>
            <Link to="/" className="flex items-center text-blue-900 hover:text-blue-600 font-semibold space-x-1 transition-all">
                <IoArrowBackOutline className="w-5 h-5" />
                <span>Go back</span>
            </Link>
            <br />

            {/* Category Dropdown */}
            <div className="mb-6">
                <label htmlFor="category" className="font-medium mr-2">Filter by Category:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="border border-gray-300 rounded-md px-3 py-2"
                >
                    <option value="all">All</option>
                    <option value="book">Book</option>
                    <option value="notebook">Register</option>
                    <option value="pen">Pen</option>
                    <option value="highlighter">Highlighter</option>
                    <option value="crayons">Colors</option>
                    <option value="adhesive">Adhesive or Gum</option>
                    <option value="pencil">Pencil</option>
                    <option value="eraser">Eraser</option>
                    <option value="sharpener">Sharpener</option>
                    <option value="stationery kit">Box</option>
                    <option value="paper">Paper</option>
                </select>
            </div>

            {/* Display filtered books */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {filteredBooks.map((book) => (
                    <div key={book._id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
                        <div className='w-full'>
                            <Link to={`/books/${book._id}`}>
                                <img
                                    src={`${getImgUrl(book.coverImage)}`}
                                    alt=""
                                    className="w-full h-auto object-contain bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                                />
                            </Link>
                        </div>

                        <div className='p-5'>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">{book.title}</h3>
                            <p className="text-gray-700 mb-4 capitalize">
                                <strong>Category:</strong> {book?.category}
                            </p>
                            <p className="text-gray-700 mb-4">{book.description}</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-b-lg">
                            <p className="font-medium mb-5">
                                ₹{book?.newPrice} <span className="line-through font-normal ml-2">₹ {book?.oldPrice}</span>
                            </p>
                            <button
                                onClick={() => handleAddToCart(book)}
                                className="btn-primary px-6 py-2 space-x-1 flex items-center gap-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                <FiShoppingCart className="text-white" />
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;



