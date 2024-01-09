// AdminOrders.js
import React, { useState, useEffect } from 'react';
import './AdminOrders.css';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/admin/orders/');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteOrder = async (orderId) => {
        try {
            await fetch(`http://localhost:3000/api/admin/orders/${orderId}`, {
                method: 'DELETE',
            });

            fetchData();
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    return (
        <div className="admin-orders-page">
            <div className="order-list">
                <table>
                    <thead>
                        <tr>
                        <th style={{ width: '200px' }}>Product Name</th>
                            <th style={{ width: '150px' }}>Name</th>
                            <th style={{ width: '200px' }}>Email</th>
                            <th style={{ width: '160px' }}>Phone Number</th>
                            <th style={{ width: '200px' }}>Address</th>
                      
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order.OrderId}
                                className={selectedOrder && selectedOrder.OrderId === order.OrderId ? 'selected-row' : ''}
                            >
                                <td>{order.ProductName}</td>
                                <td>{order.CustomerName}</td>
                                <td>{order.CustomerEmail}</td>
                                <td>{order.CustomerPhoneNumber}</td>
                                <td>{order.CustomerAddress}</td>
                                <td className="edit-delete-buttons">
                                    <button
                                        className="delivered-button"
                                        onClick={() => handleDeleteOrder(order.OrderId)}
                                    >
                                        Confirm
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrders;
