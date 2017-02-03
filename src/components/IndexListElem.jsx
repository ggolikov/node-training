import React, { Component } from 'react';

class IndexListElem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return (
            <li>
                <span> {this.state.name} </span>
            </li>
        )
    }
}

export default IndexListElem;
