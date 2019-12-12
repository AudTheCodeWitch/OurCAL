import React, {Component} from 'react';

class PaletteForm extends Component {

    render() {
        return (
            <div>
                <form className="palette-form">
                    <ul id='palette'>
                    {/*TODO: Render Color Pickers*/}
                    </ul>
                </form>
                <div id='pen'/>
                
            </div>
        );
    }
};

export default PaletteForm;