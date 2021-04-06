// Design the UI components for displaying progress
import React from 'react';
export const ProgressUI = ({ progress }) => (
    <div style={{ width: '100%', backgroundColor: 'grey' }}>
        <div style={{ width: `${progress}%`, backgroundColor: 'green', height: '20px' }}></div>
    </div>
);