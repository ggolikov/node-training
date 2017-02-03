import React, { Component } from 'react';
import IndexListElem from './IndexListElem';

class IndexList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.list.map((value) => {
                    return <IndexListElem key={value.dataValues.id} name={value.dataValues.name} />
                })}
            </ul>
        )
    }
}

export default IndexList;
