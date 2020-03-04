export type ComplexState<T> = { status: 'idle' | 'loading' | 'error' | 'success'; data?: T; error?: Error; };