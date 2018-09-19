import React from 'react';

const AsyncManagerContext = React.createContext();

export const AsyncManagerProvider = ({ children, value }) => (
    <AsyncManagerContext.Provider value={value}>
        {children}
    </AsyncManagerContext.Provider>
);

export const AsyncManagerConsumer = AsyncManagerContext.Consumer;

export default AsyncManagerContext;