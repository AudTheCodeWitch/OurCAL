import React, {Component} from 'react';
import BlockHeader from "../components/BlockHeader";
import BlockForm from '../components/BlockForm'
import PaletteForm from "../components/PaletteForm";

class NewBlockContainer extends Component {

    render() {
        return (
            <div className='block-container'>
                <BlockHeader />
                <BlockForm />
                <PaletteForm />
            </div>
        );
    }
}

export default NewBlockContainer;