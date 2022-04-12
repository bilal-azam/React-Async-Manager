# AsyncManager

AsyncManager is a powerful React library for managing asynchronous operations and state with ease. It simplifies handling loading, error, and success states, making it easier to manage complex async workflows in your React applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Advanced Usage](#advanced-usage)
    - [Combining Multiple Async States](#combining-multiple-async-states)
    - [Custom Hooks](#custom-hooks)
- [Performance Optimization](#performance-optimization)
- [Showcase Application](#showcase-application)
- [Testing](#testing)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Simplified Async Management**: Manage loading, error, and success states with ease.
- **Customizable Hooks**: Create custom hooks for reusable async operations.
- **Modular and Performant**: Designed for large applications with performance optimizations.
- **Easy Integration**: Simple to integrate with existing React applications.
- **Extensive Documentation**: Comprehensive guides and examples to get you started.

## Installation

Install AsyncManager using npm or yarn:

```
npm install react-asynchronous-manager
```
or
```
yarn add react-asynchronous-manager
```

## Usage
### Basic Example
Here’s a basic example of how to use AsyncManager in a React component:

```
import React from 'react';
import { useAsyncManager } from 'react-asynchronous-manager';

const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};

const MyComponent: React.FC = () => {
    const AsyncManager = useAsyncManager();
    const [state, fetchData] = AsyncManager.useAsyncState('data', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchData(fetchData);
    }, [fetchData]);

    if (state.loading) return <p>Loading...</p>;
    if (state.error) return <p>Error: {state.error.message}</p>;

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;
```

## Advanced Usage
### Combining Multiple Async States
AsyncManager allows you to manage multiple async states within a single component:

```
import React from 'react';
import { useAsyncManager } from 'react-asynchronous-manager';

const fetchUserData = async () => {
    const response = await fetch('https://api.example.com/user');
    return response.json();
};

const fetchPostsData = async () => {
    const response = await fetch('https://api.example.com/posts');
    return response.json();
};

const CombinedComponent: React.FC = () => {
    const AsyncManager = useAsyncManager();
    const [userState, fetchUser] = AsyncManager.useAsyncState('user', { loading: false, data: null, error: null });
    const [postsState, fetchPosts] = AsyncManager.useAsyncState('posts', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchUser(fetchUserData);
        fetchPosts(fetchPostsData);
    }, [fetchUser, fetchPosts]);

    if (userState.loading || postsState.loading) return <p>Loading...</p>;
    if (userState.error || postsState.error) return <p>Error: {userState.error?.message || postsState.error?.message}</p>;

    return (
        <div>
            <h1>User Data:</h1>
            <pre>{JSON.stringify(userState.data, null, 2)}</pre>
            <h1>Posts Data:</h1>
            <pre>{JSON.stringify(postsState.data, null, 2)}</pre>
        </div>
    );
};

export default CombinedComponent;
```

### Custom Hooks
You can create custom hooks that leverage AsyncManager for reusable logic:

```
import React from 'react';
import { useAsyncManager } from 'react-asynchronous-manager';

const useCustomData = (url: string) => {
    const AsyncManager = useAsyncManager();
    const [state, fetchData] = AsyncManager.useAsyncState('customData', { loading: false, data: null, error: null });

    React.useEffect(() => {
        fetchData(() => fetch(url).then(res => res.json()));
    }, [url, fetchData]);

    return state;
};

const MyComponent: React.FC = () => {
    const state = useCustomData('https://api.example.com/data');

    if (state.loading) return <p>Loading...</p>;
    if (state.error) return <p>Error: {state.error.message}</p>;

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;
```

## Performance Optimization
### Tips for Large Applications
1. Lazy Loading: Load async operations only when necessary to reduce initial load time.
2. Memoization: Use memoized callbacks for async actions to avoid unnecessary re-renders.
3. Error Boundaries: Implement error boundaries to catch and handle errors gracefully within your component tree.

## Showcase Application
We’ve created a showcase application that demonstrates the capabilities of AsyncManager. You can find the source code and a live demo in the showcase-app directory.

## Testing
We’ve ensured comprehensive test coverage for AsyncManager:
1. Unit Tests: Written using Jest to test individual components and hooks.
2. End-to-End Tests: Written using Cypress to simulate real-world usage scenarios.

To run the tests:
```
npm test
```

## CI/CD Pipeline
AsyncManager includes a CI/CD pipeline powered by GitHub Actions, which handles:

1. Code linting and formatting
2. Running unit and end-to-end tests
3. Building and publishing the package

The pipeline is configured in the .github/workflows/node.js.yml file.

##Contributing
We welcome contributions! Please read our CONTRIBUTING.md for guidelines on how to contribute to this project.

##License
AsyncManager is licensed under the MIT License.

