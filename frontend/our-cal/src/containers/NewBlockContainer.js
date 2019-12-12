import React, {Component} from 'react';
import BlockHeader from "../components/BlockHeader";

class NewBlockContainer extends Component {

    render() {
        return (
            <div className='block-container'>
                <BlockHeader />
                New block goes here
            </div>
        );
    }
}

export default NewBlockContainer;