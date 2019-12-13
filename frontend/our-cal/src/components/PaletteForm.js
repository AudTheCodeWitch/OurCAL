import React, {Component} from 'react';
import Palette from "./Palette";

class PaletteForm extends Component {

    createPenSelector = () => {
        const array = new Array(5);
        const pens = [];
        for (const [index] of array.entries()) {
            pens.push(
                <li key={index}>
                    {/*TODO Pass index+2 as props to palette*/}
                    {/*<button>Color {index+2}</button>*/}
                    <input type='radio' name='pen' id={'pen '+(index+1)}/>
                    <br/>
                    <br/>
                    <Palette />
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
                            Select your pen:
                            <br/>
                            <br/>
                            <Palette />
                        </li>
                    {/*TODO : Render Color Pickers*/}
                        {this.createPenSelector()}
                    </ul>
                </form>
                <div id='pen'/>
                
            </div>
        );
    }
};

export default PaletteForm;