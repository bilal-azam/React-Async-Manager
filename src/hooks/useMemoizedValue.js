import { useMemo } from 'react';

export function useMemoizedValue(value, dependencies) {
    return useMemo(() => value, dependencies);
}