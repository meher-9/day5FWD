import React from 'react';

function StarRating({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i}>★</span>); // Filled star
        } else {
            stars.push(<span key={i}>☆</span>); // Empty star
        }
    }
    return <div>{stars}</div>;
}

export default StarRating;