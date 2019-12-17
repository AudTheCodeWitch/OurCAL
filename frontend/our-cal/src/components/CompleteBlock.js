import React, {Component} from "react";
import Pixel from "./Pixel";

class CompleteBlock extends Component {

    createColumns = () => {
        const columns = new Array(25);
        const items = [];
        for (const [index] of columns.entries()) {
            let p = <Pixel/>;
            // TODO Add id and class names to pixels - pass as props
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
    };


    render() {
        return (
            <div className='block' id={this.props.block.name}>
                {this.createBlock(this.props.block)}
            </div>
        );
    }
}

export default CompleteBlock;