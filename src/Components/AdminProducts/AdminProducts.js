// AdminProducts.js
import React, { useState, useEffect } from 'react';
import './AdminProducts.css';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', image: null });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://project-design-fabric-f30ca63e31e3.herokuapp.com/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        // If the input is a file, set the image in the state
        if (name === 'image') {
            setNewProduct((prevProduct) => ({ ...prevProduct, image: files[0] || null }));
        } else {
            setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
        }
    };

    const handleAddProduct = async () => {
        try {
            const formData = new FormData();
            formData.append('name', newProduct.name);
            formData.append('description', newProduct.description);
            formData.append('price', newProduct.price);

            if (newProduct.image) {
                formData.append('image', newProduct.image);
            }
    

            if (selectedProduct) {
                await fetch(`http://project-design-fabric-f30ca63e31e3.herokuapp.com/api/admin/products/${selectedProduct.ProductID}`, {
                    method: 'PUT',
                    body: formData,
                });
                setSelectedProduct(null);
            } else {
                await fetch('http://project-design-fabric-f30ca63e31e3.herokuapp.com/api/admin/products', {
                    method: 'POST',
                    body: formData,
                });
            }

            fetchData();
            setNewProduct({ name: '', description: '', price: '', image: null });
            setEditMode(false); // Exit edit mode after adding/editing
        } catch (error) {
            console.error('Error adding/editing product:', error);
        }
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
    
        // Enter edit mode
        setEditMode(true);
    
        // Update the state with the modified product
        setNewProduct({
            name: product.Name,
            description: product.Description,
            price: product.Price,
            image: product.image, // Keep the existing image value
        });
    };
    

    const handleCancelEdit = () => {
        // Exit edit mode without saving changes
        setEditMode(false);
        setSelectedProduct(null);
        setNewProduct({ name: '', description: '', price: '', image: null });
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await fetch(`http://project-design-fabric-f30ca63e31e3.herokuapp.com/api/admin/products/${productId}`, {
                method: 'DELETE',
            });

            fetchData();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="admin-page">

            <div className="product-list">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '150px' }}>Name</th>
                            <th style={{ width: '200px' }}>Description</th>
                            <th style={{ width: '140px' }}>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr
                                key={product.ProductID}
                                className={selectedProduct && selectedProduct.ProductID === product.ProductID ? 'selected-row' : ''}
                            >
                                <td>
                                    {editMode && selectedProduct && selectedProduct.ProductID === product.ProductID ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={newProduct.name}
                                            onChange={handleInputChange}
                                            style={{ width: '100%' }}
                                        />
                                    ) : (
                                        product.Name
                                    )}
                                </td>
                                <td>
                                    {editMode && selectedProduct && selectedProduct.ProductID === product.ProductID ? (
                                        <input
                                            type="text"
                                            name="description"
                                            value={newProduct.description}
                                            onChange={handleInputChange}
                                            style={{ width: '100%' }}
                                        />
                                    ) : (
                                        product.Description
                                    )}
                                </td>
                                <td>
                                    {editMode && selectedProduct && selectedProduct.ProductID === product.ProductID ? (
                                        <input
                                            type="number"
                                            name="price"
                                            value={newProduct.price}
                                            onChange={handleInputChange}
                                            style={{ width: '100%' }}
                                        />
                                    ) : (
                                        product.Price
                                    )} LKR
                                </td>
                                <td className="edit-delete-buttons">
                                    {editMode && selectedProduct && selectedProduct.ProductID === product.ProductID && (
                                        <>
                                            <button className="save-button" onClick={handleAddProduct}>Save</button>
                                            <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                                        </>
                                    )}
                                    {!editMode && (
                                        <>
                                            <button className="edit-button" onClick={() => handleEditProduct(product)}>Edit</button>
                                            <button className="delete-button" onClick={() => handleDeleteProduct(product.ProductID)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="add-product-form">
                <div className='name-description-price-section'>
                    <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='image-choose-section'>
                    <input className="choose-" type="file" name="image" onChange={handleInputChange} />
                    <div className='add-product-button-section'>
                    <button className='add-product-button' onClick={handleAddProduct} >
                        {selectedProduct ? 'Update Product' : 'Add Product'}
                    </button>

                    </div>

                    {editMode && (
                        <div className="edit-buttons">
                            <button onClick={handleAddProduct}>Save</button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AdminProducts;
