// OrderConfirmation.js
import React, { useState } from 'react';
import './OrderConfirmation.css'; // Import additional CSS for OrderConfirmation

const OrderConfirmation = ({ ProductId, onClose, onConfirmOrder }) => {
  const [CustomerName, setCustomerName] = useState('');
  const [CustomerEmail, setCustomerEmail] = useState('');
  const [CustomerPhoneNumber, setCustomerPhoneNumber] = useState('');
  const [CustomerAddress, setCustomerAddress] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [addressError, setAddressError] = useState('');

  const handleConfirmOrder = () => {
    // Validate input data
    const isValidPhone =
      /^\d{10}$/.test(CustomerPhoneNumber) && CustomerPhoneNumber.startsWith('0');

    // Set error messages
    setNameError(CustomerName ? '' : 'Name cannot be empty');
    setEmailError(CustomerEmail ? '' : 'Email cannot be empty');
    setPhoneError(isValidPhone ? '' : 'Invalid phone number');
    setAddressError(CustomerAddress ? '' : 'Address cannot be empty');

    // Check if there are any validation errors
    if (!CustomerName || !CustomerEmail || !isValidPhone || !CustomerAddress) {
      return;
    }

    // Call the onConfirmOrder callback with the order details
    onConfirmOrder({
      ProductId,
      CustomerName,
      CustomerEmail,
      CustomerPhoneNumber,
      CustomerAddress,
    });

    // Close the popup
    onClose();
  };

  const handleInputChange = (e, setError) => {
    // Clear the corresponding error when the user starts typing again
    setError('');
    // Update the state with the new input value
    switch (e.target.name) {
      case 'CustomerName':
        setCustomerName(e.target.value);
        break;
      case 'CustomerEmail':
        setCustomerEmail(e.target.value);
        break;
      case 'CustomerPhoneNumber':
        setCustomerPhoneNumber(e.target.value);
        break;
      case 'CustomerAddress':
        setCustomerAddress(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="order-confirmation-popup">
      <div className="order-confirmation-content">
        <h1>Confirm Your Order</h1>
        <p>Product ID: {ProductId}</p>
        <div className="order-confirmation-input-container">
          <input
            type="text"
            name="CustomerName"
            value={CustomerName}
            onChange={(e) => handleInputChange(e, setNameError)}
            placeholder="Your Name"
            className={nameError ? 'error' : ''}
          />
          {nameError && <span className="error-message">{nameError}</span>}
        </div>
        <div className="order-confirmation-input-container">
          <input
            type="email"
            name="CustomerEmail"
            value={CustomerEmail}
            onChange={(e) => handleInputChange(e, setEmailError)}
            placeholder="Your Email"
            className={emailError ? 'error' : ''}
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div className="order-confirmation-input-container">
          <input
            type="tel"
            name="CustomerPhoneNumber"
            value={CustomerPhoneNumber}
            onChange={(e) => handleInputChange(e, setPhoneError)}
            placeholder="Your Phone Number"
            className={phoneError ? 'error' : ''}
          />
          {phoneError && <span className="error-message">{phoneError}</span>}
        </div>
        <div className="order-confirmation-input-container">
          <input
            type="text"
            name="CustomerAddress"
            value={CustomerAddress}
            onChange={(e) => handleInputChange(e, setAddressError)}
            placeholder="Your Address"
            className={addressError ? 'error' : ''}
          />
          {addressError && <span className="error-message">{addressError}</span>}
        </div>
        <div className="order-confirmation-buttons">
          <button className="order-confirmation-register-button" onClick={onClose}>
            Cancel
          </button>
          <button className="order-confirmation-login-button" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
