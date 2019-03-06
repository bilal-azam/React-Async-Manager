import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

export function useSharedContext() {
    const context = useContext(MyContext);
    return context;
}