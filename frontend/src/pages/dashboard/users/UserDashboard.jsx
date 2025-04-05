import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useFetchAllBooksQuery } from '../../../redux/features/books/booksApi';
import { getImgUrl } from '../../../utils/getImgURL';
import { useGetOrderByEmailQuery } from '../../../redux/features/orders/ordersApi';

const UserDashboard = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isLoading: ordersLoading, isError: ordersError } = useGetOrderByEmailQuery(currentUser?.email);
    const { data: books = [], isLoading: booksLoading, isError: booksError } = useFetchAllBooksQuery();

    if (ordersLoading || booksLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (ordersError || booksError) return <div className="flex justify-center items-center h-screen">Error fetching data</div>;

    // Map productIds in orders to corresponding book data
    const getBookDetails = (productId) => books.find(book => book._id === productId);

    return (
        <div className=" min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
                <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">User Dashboard</h1>
                <p className="text-lg text-gray-600 text-center mb-8">Welcome, {currentUser?.name || 'User'}!</p>

                <div className="bg-blue-50 text-blue-800 p-4 rounded-md mb-8 text-center shadow-md">
                    <p><strong>Your Email:</strong> {currentUser?.email}</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Recent Orders</h2>
                    {orders.length > 0 ? (
                        <ul className="space-y-6">
                            {orders.map((order) => (
                                <li key={order._id} className="bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200">
                                    <p className="font-semibold text-gray-700">Order ID: {order._id}</p>
                                    <p className="text-gray-600">Date: {new Date(order?.createdAt).toLocaleDateString()}</p>
                                    <p className="text-gray-600">Total: ₹{order.totalPrice}</p>
                                    <div className="mt-4">
                                        <strong className="text-gray-700">Products:</strong>
                                        <ul className="mt-2 space-y-3">
                                            {order.productIds.map((productId) => {
                                                const book = getBookDetails(productId);
                                                return book ? (
                                                    <li key={productId} className="flex items-center gap-4 bg-white p-3 rounded-md shadow-sm border">
                                                        <img
                                                            src={getImgUrl(book.coverImage)} 
                                                            alt={book.name} 
                                                            className="w-16 h-16 object-cover rounded"
                                                        />
                                                        <div>
                                                            <p className="font-medium text-gray-700">{book.title}</p>
                                                            <p className="text-sm text-gray-500">Price: ₹{book.newPrice}</p>
                                                        </div>
                                                    </li>
                                                ) : (
                                                    <li key={productId} className="text-gray-500">Product not found</li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 text-center">You have no recent orders.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;