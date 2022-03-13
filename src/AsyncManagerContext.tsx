// src/AsyncManagerContext.tsx
import React, { createContext, useContext, useState } from 'react';
import AsyncManager from './AsyncManager';

const AsyncManagerContext = createContext(AsyncManager);

export const AsyncManagerProvider: React.FC = ({ children }) => {
    const [state, setState] = useState({});
    AsyncManager.setStateCallback(setState);

    return (
        <AsyncManagerContext.Provider value={AsyncManager}>
            {children}
        </AsyncManagerContext.Provider>
    );
};

export const useAsyncManager = () => useContext(AsyncManagerContext);