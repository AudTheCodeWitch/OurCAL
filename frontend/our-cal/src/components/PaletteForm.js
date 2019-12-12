import React, {Component} from 'react';

class PaletteForm extends Component {
    render() {
        return (
            <div>
                <form className="palette-form">
                    <ul id='palette'>
                        <li>1</li>
                    </ul>
                </form>
                <div id='pen'/>
                
            </div>
        );
    }
}

export default PaletteForm;