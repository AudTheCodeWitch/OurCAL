import React, {Component} from 'react';
import Pixel from "./Pixel";

class BlankBlock extends Component {

    createColumns = (row) => {
        const columns = new Array(25);
        const items = [];
        for (const [index] of columns.entries()) {
            let p = <Pixel row={row} column={index} location='Template'/>;
            items.push(p)
        }
        return items
    };

    createBlock = () => {
        const rows = new Array(25);
        const items = [];
        for (const [index] of rows.entries()) {
            items.push(<div key={index} className='row' id={'row-'+(index+1)}>
                {this.createColumns(index)}
            </div>)
        }
        return items
    }


    render() {
        return (
            <div className='template block'>
                {this.createBlock()}
            </div>
        );
    }
}

export default BlankBlock;