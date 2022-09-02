import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner-border  text-info" role="status">
                <span className="visually-hidden">Loading...</span>
                <div className="d-flex justify-content-center mb-3">
            </div>
        </div>
    );
};

export default Spinner;