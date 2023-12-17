// AllProducts.js
import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import './AllProductSection.css'; // Import your CSS file
import ProductSection from "../ProductSection/ProductSection";
import Header from "../Header/Header";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";

// AllProducts.js
// ...

const AllProductSection = () => {
    // State to store products
    const [allProductsData, setAllProductsData] = useState([]);
    const [showOrderPopup, setShowOrderPopup] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);


    const handleBuyNowClick = (productId) => {
        setSelectedProductId(productId);
        setShowOrderPopup(true);
    };

    const handleConfirmOrder = (orderDetails) => {
        // Call the API endpoint with the orderDetails
        fetch('http://project-design-fabric-f30ca63e31e3.herokuapp.com/api/orders/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Order created successfully:', data);
                // Additional logic or UI updates after successful order creation
            })
            .catch((error) => {
                console.error('Error creating order:', error);
                // Handle error, show error message, etc.
            });
        // Close the popup
        setShowOrderPopup(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://project-design-fabric-f30ca63e31e3.herokuapp.com/api/products');
                const data = await response.json();
                console.log('Fetched data:', data); // Log the fetched data
                setAllProductsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allProductsData.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate the number of empty cards needed
    const emptyCardCount = Math.max(0, productsPerPage - currentProducts.length);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (


        <div className="section">
            {/* <ProductSection/> */}

            <Header />
{/* 
            <div id='latestArrivals'>
                <ProductSection />
            </div> */}

            <div className='all-products-section' id='products'>
                <div className="all-product-cards">
                    {currentProducts.map((product, index) => (
                        <div key={index} className="all-product-card">
                            {/* Render product details */}
                            <img src={product.ImageURL} alt={product.Name} className="product-image" />
                            <div className='product-name-container'>
                                <h2>{product.Name}</h2>
                            </div>

                            <div className='product-description-container'>
                                <p>{product.Description}</p>
                            </div>
                            <div className='product-price-container'>
                                <p>LKR {product.Price}.00</p>
                            </div>
                            <div className="buttons">
                                <button className="add-to-cart-button">Add to Cart</button>
                                <button className="buy-now-button" onClick={() => handleBuyNowClick(product.ProductID)}>Buy Now</button>
                            </div>
                        </div>
                    ))}

                    {showOrderPopup && (
                        <OrderConfirmation
                            ProductId={selectedProductId}
                            onClose={() => setShowOrderPopup(false)}
                            onConfirmOrder={handleConfirmOrder}
                        />
                    )}

                    {/* Render empty cards */}
                    {[...Array(emptyCardCount)].map((_, index) => (
                        <div key={`empty-${index}`} className="all-product-card empty-card">
                            {/* You can customize the appearance of empty cards if needed */}
                        </div>
                    ))}
                </div>

                <div className="pagination-all-products">
                    {Array.from({ length: Math.ceil(allProductsData.length / productsPerPage) }).map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProductSection;