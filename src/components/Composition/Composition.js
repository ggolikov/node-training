import React, { Component } from 'react';


class Composition extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span background-color={this.props.color}>
                    lalala
                    <br />
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default Composition;
