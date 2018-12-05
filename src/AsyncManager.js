import React from 'react';

class AsyncManager extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        // Only re-render if data has changed
        if (this.state.data !== nextState.data) {
            return true;
        }
        return false;
    }

    render() {
        return <div>{this.state.data}</div>;
    }
}

export default AsyncManager;