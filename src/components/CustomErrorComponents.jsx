// Develop custom React components for handling errors
import React from 'react';
export const ErrorComponent = ({ errorMessage }) => (
    <div style={{ color: 'red' }}>
        <h1>Error Encountered</h1>
        <p>{errorMessage}</p>
    </div>
);