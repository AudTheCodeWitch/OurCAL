import React, {Component} from "react";
import Pixel from "./Pixel";

class CompleteBlock extends Component {

    createColumns = () => {
        const columns = new Array(25);
        const items = [];
        for (const [index] of columns.entries()) {
            let p = <Pixel/>;
            // TODO Add id and class names to pixels
            items.push(p)
        }
        return items
    };

    createBlock = () => {
        const rows = new Array(25);
        const items = [];
        for (const [index] of rows.entries()) {
            items.push(<div key={index} className='row' id={'row-'+(index+1)}>
                {this.createColumns()}
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

export default CompleteBlock;