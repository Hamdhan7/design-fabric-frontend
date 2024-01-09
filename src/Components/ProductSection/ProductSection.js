// Products.js
import React, { useState } from 'react';
import './ProductSection.css'; // Import your CSS file
const productsData = [
    // Define your product data here
    { id: 1, name: 'Product 1', description: 'Description 1', price: '$20', imageUrl: 'http://localhost:3000/images/product-1701978538783.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: '$30', imageUrl: 'http://localhost:3000/images/product-1701978573608.jpg' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: '$25', imageUrl: 'http://localhost:3000/images/product-1701978640484.jpg' },
    { id: 4, name: 'Product 4', description: 'Description 4', price: '$40', imageUrl: 'http://localhost:3000/images/product-1701978786746.jpg' },
    { id: 1, name: 'Product 5', description: 'Description 1', price: '$20', imageUrl: 'http://localhost:3000/images/product-1701978573608.jpg' },
    { id: 4, name: 'Product 4', description: 'Description 4', price: '$40', imageUrl: 'http://localhost:3000/images/product-1701978786746.jpg' },


    // Add more products as needed
];

const ProductSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="products-section">
            <div className="product-cards">
                {currentProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <div className="latest-products-buttons">
                            <button className="latest-products-add-to-cart-button">Add to Cart</button>
                            <button className="latest-products-buy-now-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: Math.ceil(productsData.length / productsPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                       
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
