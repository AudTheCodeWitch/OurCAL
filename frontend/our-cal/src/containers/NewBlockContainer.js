import React, {Component} from 'react';
import BlockHeader from "../components/BlockHeader";
import BlockForm from '../components/BlockForm'

class NewBlockContainer extends Component {

    render() {
        return (
            <div className='block-container'>
                <BlockHeader />
                <BlockForm />
                New block goes here
            </div>
        );
    }
}

export default NewBlockContainer;