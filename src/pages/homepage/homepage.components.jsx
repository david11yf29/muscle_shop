import React from 'react';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homapage">
            <div className="menu-container">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">CHEST</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">BACK</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">LEGS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SHOULDER</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">CORE</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;