## Advanced Examples

### Combining Multiple Async States

```
import React from 'react';
import { useAsyncManager } from 'react-async-manager';

const fetchUserData = async () => { ... };
const fetchPostsData = async () => { ... };

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