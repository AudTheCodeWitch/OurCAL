import React, {Component} from 'react';
import Palette from "./Palette";

class PaletteForm extends Component {

    createPenSelector = () => {
        const array = new Array(5);
        const pens = [];
        for (const [index] of array.entries()) {
            pens.push(
                <li key={index}>
                    <Palette id={index+1} />
                    <br/>
                    <input type='radio' name='pen' id={'pen '+(index+1)}/>
                </li>
            )

        }
        return pens
    };



    render() {
        return (
            <div>
                <form className="palette-form">
                    <ul id='palette'>
                        <li>
                            <Palette id={'background'}/>
                            <br/>
                            Select your pen:
                        </li>
                        {this.createPenSelector()}
                    </ul>
                </form>
                <div id='pen'/>
                
            </div>
        );
    }
};

export default PaletteForm;