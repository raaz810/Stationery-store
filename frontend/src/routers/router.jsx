import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cartpage from "../pages/books/Cartpage";
import Checkout from "../pages/books/Checkout";
import Singlebook from "../pages/books/Singlebook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/managebooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/editBook/UpdateBook";
import ViewOrders from "../pages/dashboard/ViewOrders";
import UserDashboard from "../pages/dashboard/users/UserDashboard";
import AllProducts from "../pages/books/AllProducts";
import AboutUs from "../pages/aboutus/AboutUs";




// import UserDashboard from "../pages/dashboard/users/UserDashboard";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrderPage /></PrivateRoute>
            },
            {
                path: "/cart",
                element: <Cartpage />
            },
            {
                path: "/checkout",
                element: <PrivateRoute ><Checkout /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/books/:id",
                element: <Singlebook />
            },
            {
                path: "/user-dashboard",
                element: <UserDashboard />
            },
            {
                path: "/all-products",
                element:<AllProducts />
            },
            {
                path: "/about-us",
                element:<AboutUs />
            }

        ]
    },
    {
        path: "/admin",
        element: <AdminLogin />
    },


    {
        path: "/dashboard",
        element: <AdminRoute><DashboardLayout /></AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><Dashboard /></AdminRoute>
            },
            {
                path: "add-new-book",
                element: <AdminRoute><AddBook /></AdminRoute>
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute><UpdateBook /></AdminRoute>
            },
            {
                path: "manage-books",
                element: <AdminRoute><ManageBooks /></AdminRoute>
            },
            {
                path: "view-orders",
                element:<AdminRoute><ViewOrders /></AdminRoute>
            }
        ]
    }
]);
export default router;