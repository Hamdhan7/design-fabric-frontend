// Header.js
import React from 'react';
import './Header.css';
import {Button} from "@mui/material"; // Import your CSS file
const Header = () => {
    return (
        <header className="header-section">
            <div className="header-section-content">
            <div className="left-blob">
                {/* Image over the left blob */}
                <img src="/Assets/LeftBlobImage.png" alt="Left Blob" className="blob-image" />
            </div>

            <div className="header-content">
                <div className="text-section">
                    <div className="text-area">
                        <div className="text-area-heading">
                            <div className="text-area-heading-1">DISCOVER THE</div>
                            <div className="text-area-heading-2">ARTISTRY OF </div>
                            <div className="text-area-heading-3">FABRICS</div>
                        </div>
                        <div className="text-area-paragraph">Whether you're a fashion designer, an interior decorator, or a DIY enthusiast, our range of premium printed fabrics is sure to inspire and elevate your creations.</div>
                    </div>
                    <div className="header-section-buttons">
                        <div className="Explore-now-button-header-section">
                            EXPLORE
                        </div>
                        <div className="Buy-now-button-header-section">
                           BUY NOW
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-blob">
                {/* Image over the right blob */}
                <img src="/Assets/RightBlobImage.png" alt="Right Blob" />
            </div>
            </div>

        </header>

    );
};

export default Header;
