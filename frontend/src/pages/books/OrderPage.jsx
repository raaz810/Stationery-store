import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';
import { getImgUrl } from '../../utils/getImgURL';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
import News from '../home/News';

const OrderPage = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);
    const { data: books = [] } = useFetchAllBooksQuery();

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error getting orders data</div>

    return (
        
        <div className=' border container mx-auto p-6'>
            <News />
            <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
            {
                orders.length === 0 ? (
                    <div>No orders found!</div>
                ) : (
                    <div>
                        {orders.map((order, index) => {
                            // Filter books for the current order based on productIds
                            const orderedBooks = books.filter(book => order.productIds.includes(book._id));

                            return (
                                <div key={order._id} className="border-b mb-4 pb-4">
                                    <p className='p-1 bg-secondary text-white w-10 rounded mb-1'># {index + 1}</p>
                                    <h2 className="font-bold">Order ID: {order._id}</h2>
                                    <p className="text-gray-600">Date: {new Date(order?.createdAt).toLocaleDateString()}</p>
                                    <p className="text-gray-600">Name: {order.name}</p>
                                    <p className="text-gray-600">Email: {order.email}</p>
                                    <p className="text-gray-600">Phone: {order.phone}</p>
                                    <p className="text-gray-600">Total Price: ₹{order.totalPrice}</p>
                                    <h3 className="font-semibold mt-2">Address:</h3>
                                    <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                                    <h3 className="font-semibold mt-2">Items:</h3>
                                    <ul>
                                        {orderedBooks.map((book) => (
                                            <li key={book._id} className="flex items-center mb-2">
                                                <img src={getImgUrl(book.coverImage)} alt={book.title} className="w-12 h-12 object-cover mr-3" />
                                                <span>{book.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default OrderPage;