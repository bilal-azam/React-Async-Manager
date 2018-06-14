import React from 'react';

class AsyncManager extends React.Component {
    state = { isLoading: true, data: null };

    componentDidMount() {
        fetchData().then(data => this.setState({ data, isLoading: false }));
    }

    render() {
        const { isLoading, data } = this.state;
        return isLoading ? <div>Loading...</div> : <div>{data}</div>;
    }
}

export default AsyncManager;