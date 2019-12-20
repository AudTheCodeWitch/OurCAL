import React, {Component} from "react";
import Pixel from "./Pixel";

class ShowBlock extends Component {

    createColumns = (row, location) => {
        const columns = new Array(25);
        const items = [];
        for (const [
            index
        ] of columns.entries()) {
            let p = (
                <Pixel
                    key={index}
                    row={row}
                    column={index}
                    location={'View' + location}
                />
            );
            items.push(p);
        }
        return items;
    };

    createBlock = (block) => {
        const rows = new Array(25);
        const items = [];
        for (const [index] of rows.entries()) {
            items.push(<div key={index} className='row' id={'row-'+(index+1)}>
                {this.createColumns(index, block.name)}
            </div>)
        }
        return items
    };

    colorPixels = (blank, pixels) => {
        for (let p of pixels) {
            let box = document.getElementById(`${blank.id}-${p.x},${p.y}`);
            box.style.backgroundColor = p.color;
            box.className = `pixel ${p.color_variable}`;
        }
    };

    componentDidMount() {
        let b = document.getElementById('View'+ this.props.block.name);
        this.colorPixels(b, this.props.block.pixels)

    }

    componentDidUpdate(props){
        let b = document.getElementById('View'+ this.props.block.name);
        this.colorPixels(b, this.props.block.pixels)
    }


    render() {
        let id = 'View' + this.props.block.name;
        return (
            <div className='block' id={id}>
                {this.createBlock(this.props.block)}
            </div>
        );
    }
}

export default ShowBlock;