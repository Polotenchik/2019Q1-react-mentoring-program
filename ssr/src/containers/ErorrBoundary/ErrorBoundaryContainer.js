import React from 'react';

export default class ErrorBoundaryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
                <h1 className="error-boundary">
                    Something went wrong
                </h1>
      );
    }

    return this.props.children;
  }
}
