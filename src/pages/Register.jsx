import React from 'react'
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className='container'>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-full">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
          First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="fname" type="text" placeholder="First Name" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
          Last Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="lname" type="text" placeholder="Last Name"/>
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="phone" type="text" placeholder="Phone Number" />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="email" type="text" placeholder="email@example.com" />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
        Country/Region 
        </label>
        {/* <CountrySelect
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
        focus:outline-none focus:shadow-outline"
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
      // /> */}
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="country" type="text" placeholder="Search country" />
       
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="address" type="text" placeholder="Address......" />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address2">
          Address 2 (Optional)
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="address2" type="text" />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
        
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="password" type="password" placeholder="******************" />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control" id="confirmpassword" type="password" placeholder="******************" />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="conditions">
          I Agree
        </label>
        <input className="shadow appearance-none" id="conditions" type="checkbox" />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>
      <div className="flex items-center justify-between">
        <button className="btn btn-primary mx-5" type="button">
          Register
        </button>
        <NavLink to="#" className="mx-6">
        Forgot Password?
      </NavLink>
      </div>
    </form>

  </div>
  )
}

export default Register
