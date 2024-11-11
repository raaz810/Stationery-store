import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { Link, useParams } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5";
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error happending to load book info</div>
    return (
        <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

            <div className=''>
                <div>
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt={book.title}
                        className="mb-8"
                    />
                </div>

                <div className='mb-5'>
                    {/* <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p> */}
                    {/* <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p> */}
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {book?.category}
                    </p>
                    <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
                    <br></br>
                    <p className="font-medium mb-5">
                    <strong>Price: </strong>  ₹{book?.newPrice} <span className="line-through font-normal ml-2">₹ {book?.oldPrice}</span>
                            </p>
                </div>

                <div className="flex items-center space-x-4 py-4">
               
                    <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                        <FiShoppingCart className="" />
                        <span>Add to Cart</span>

                    </button>

                    <Link to="/" className="flex items-center text-blue-900 hover:text-blue-600 font-semibold space-x-1 transition-all">
                        <IoArrowBackOutline className="w-5 h-5" />
                        <span>Go back</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default SingleBook