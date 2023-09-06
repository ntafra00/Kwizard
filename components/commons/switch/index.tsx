"use client"

import React, { useState } from 'react';

export function Switch() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div style={{
            width: "50px",
            height: "28px",
            padding: "2px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: isChecked ? "flex-end" : "flex-start",
            backgroundColor: isChecked ? "#3182CE" : "#CBD5E0",
            borderRadius: "9999px",
        }} className="switch">
            <span style={{
                width: "24px",
                height: "24px",
                cursor: 'pointer',
                backgroundColor: "#FFF", // Customize the background color here
                borderRadius: '50%',
            }} className="slider" onClick={handleToggle}></span>
        </div>
    );
}