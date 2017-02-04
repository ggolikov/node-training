import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                child child {this.props.text}
            </div>
        );
    }
}

export default Child;
