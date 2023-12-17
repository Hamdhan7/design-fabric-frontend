// AdminPage.js
import React, { useState } from 'react';


import AdminOrders from '../AdminOrders/AdminOrders'; // Create separate components for Orders, Products, Customers
import AdminProducts from '../AdminProducts/AdminProducts';
import './AdminPage.css';

const AdminPage = () => {
    const [selectedSection, setSelectedSection] = useState('products');

    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };



    return (
        <div className="admin-panel">
            <div className="left-panel">

                <div className={`orders-row ${selectedSection === 'orders' ? 'selected' : ''}`}
                    onClick={() => handleSectionChange('orders')}>
                    Orders
                </div>

                <div className={`orders-row ${selectedSection === 'products' ? 'selected' : ''}`}
                    onClick={() => handleSectionChange('products')}>
                    Products
                </div>


                {/* Add more navigation buttons for other sections if needed */}
            </div>
            <div className="right-panel">
                {selectedSection === 'orders' && <AdminOrders />}
                {selectedSection === 'products' && <AdminProducts />}
                {/* Add more components for other sections if needed */}
            </div>
        </div>
    );
};

export default AdminPage;
