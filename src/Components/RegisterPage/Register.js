// AdminPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link


import AdminOrders from '../AdminOrders/AdminOrders'; // Create separate components for Orders, Products, Customers
import AdminProducts from '../AdminProducts/AdminProducts';
import '../LoginPage/Login.css';

const Register = () => {


    return (
        <div className="login-section">
            <div className='login-container'>
                <h1>Register</h1>
                <div className='input-container'>
                    <input type="text" name="name" placeholder="User Name" />
                </div>
                <div className='input-container'>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                    // value={newProduct.price}
                    // onChange={handleInputChange}
                    />
                </div>
                <div className='need-to-sign-up-text'>

                    <Link to="/auth/login">
                        Already have an account? Login
                    </Link>

                </div>

                <div className='login-button-section'>

                    <button className='login-button' >
                        SignUp
                    </button>




                </div>
            </div>
        </div>

    );
};

export default Register;
