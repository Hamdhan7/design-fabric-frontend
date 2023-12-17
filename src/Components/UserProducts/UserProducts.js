// AdminPage.js
import React, { useState } from 'react';


import AllProducts from '../AllProductsSection/AllProductSection'; // Create separate components for Orders, Products, Customers
import AdminProducts from '../AdminProducts/AdminProducts';
import './UserProducts.css';

const UserProducts = () => {

    return (
        <div className="admin-panel">

            <AllProducts />

        </div>
    );
};

export default UserProducts;
