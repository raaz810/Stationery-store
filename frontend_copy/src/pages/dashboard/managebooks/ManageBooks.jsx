import React from 'react';
import { useDeleteBookMutation, useFetchAllBooksQuery } from '../../../redux/features/books/booksApi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageBooks = () => {
  const { data: books, refetch } = useFetchAllBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  // Handle deleting a book
  const handleDeleteBook = async (id) => {
    try {
      // Show SweetAlert confirmation dialog
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "This book will be permanently deleted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
        focusConfirm: false,
        focusCancel: true
      });

      if (result.isConfirmed) {
        // Proceed with deletion if user confirmed
        await deleteBook(id).unwrap(); // Delete the book
        Swal.fire('Deleted!', 'The book has been deleted.', 'success'); // Show success message
        refetch(); // Refresh the list
      } else {
        Swal.fire('Cancelled', 'The book is safe :)', 'info'); // Show cancellation message
      }
    } catch (error) {
      console.error('Failed to delete book:', error);
      Swal.fire('Error', 'Failed to delete book. Please try again.', 'error'); // Show error message
    }
  };

  return (
    <section className="py-6 md:py-8 bg-blueGray-50">
      <div className="container mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blueGray-700">All Books</h3>
          <div className="mt-6 space-y-4">
            {books && books.length ? (
              books.map((book) => (
                <div key={book._id} className="flex flex-col md:flex-row justify-start items-center bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                  {/* Book Info Section aligned to the left */}
                  <div className="flex flex-col text-left text-gray-900 font-medium md:w-2/3">
                    <h4 className="text-xl">{book.title}</h4>
                    <p className="text-sm text-gray-600">{book.category}</p>
                    <p className="text-lg text-gray-900">₹{book.newPrice}</p>
                  </div>

                  {/* Action Buttons Section */}
                  <div className="flex space-x-4 mt-4 md:mt-0 md:w-1/3 justify-end">
                    <Link to={`/dashboard/edit-book/${book._id}`} className="text-indigo-600 hover:text-indigo-700">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteBook(book._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No books available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBooks;