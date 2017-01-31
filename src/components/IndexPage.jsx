import React, { Component } from 'react';

class IndexPage extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            name: props.name,
            place: props.place
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
