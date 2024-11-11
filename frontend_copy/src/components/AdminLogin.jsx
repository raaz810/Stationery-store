import React, { useState } from 'react'
import { useForm } from "react-hook-form"

import axios from "axios"
import getBaseUrl from '../utils/baseURL'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [message, setMessage] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate()

      const onSubmit = async (data) => {
        // console.log(data)
        try {
           const response =  await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
           })
           const auth = response.data;
        //    console.log(auth)
            if(auth.token) {
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Token has been expired!, Please login again.');
                    navigate("/")
                }, 3600 * 1000)
            }

            alert("Admin Login successful!")
            navigate("/dashboard")

        } catch (error) {
            setMessage("Please provide a valid email and password") 
            console.error(error)
        }
      }
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-purple-600'>
    <div className='text-center mb-8'>
        <p className='text-white  font-bold'><strong>Note : </strong>This login form is only meant for the owner and developer of this website.</p>
    </div>
    <div className='w-full max-w-md mx-auto bg-white shadow-lg rounded-lg px-10 pt-8 pb-8'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-6 text-center'>Admin Dashboard Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
                <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor="username">Username</label>
                <input 
                    {...register("username", { required: true })} 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder='Enter your username'
                    className='w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
            </div>
            <div>
                <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor="password">Password</label>
                <input 
                    {...register("password", { required: true })} 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Enter your password'
                    className='w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
            </div>
            {message && <p className='text-red-500 text-sm text-center mt-1'>{message}</p>}
            <div className='mt-4'>
                <button 
                    type="submit"
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    Login
                </button>
            </div>
        </form>

        <p className='mt-8 text-center text-gray-400 text-xs'>
            ©2025 Book Store. All rights reserved.
        </p>
    </div>
</div>
  )
}

export default AdminLogin