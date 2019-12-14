import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // New lifecylce method, similar to try/catch in JS
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Sorry, but this section isn't working properly.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;