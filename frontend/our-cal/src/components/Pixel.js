import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPixel } from "../actions/addPixel";

class Pixel extends Component {

    handleClick = () => {

    };

function Pixel({location, column, row}) {

    return (
        <div className="pixel bg"
             id={location + '-' + (column + 1) + ',' + (25-row) }
        >

        </div>
    );

}

// const Pixel = ({location, column, row}) => (
//     <div className="pixel bg"
//          id={location + '-' + (column + 1) + ',' + (25-row) }
//     >
//     </div>
// )

export default Pixel;