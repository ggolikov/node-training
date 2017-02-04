import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        console.log(this.textInput);
        // this.textInput.style.backgroundColor = "green";
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input) => {this.textInput = input;}} />
                <input type="button" onClick={this.focus} />
            </div>
        );
    }
}

export default Input;
