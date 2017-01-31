import React, { Component } from 'react';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            state: props.state
        };
    }

    render() {
        return (
            <div>
                <span> {this.state.name} </span>
                <br />
                <span> {this.state.place} </span>
            </div>
        )
    }
}

export default IndexPage;
