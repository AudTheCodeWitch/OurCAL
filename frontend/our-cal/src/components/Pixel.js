import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPixel } from "../actions/addPixel";

class Pixel extends Component {

    handleClick = () => {

    };

function Pixel({location, column, row}) {

        }
    }

    render() {
        const { location, column, row } = this.props;
        if (location === 'Template') {
            return (
                <div className="pixel bg"
                     id={location + '-' + (column + 1) + ',' + (25-row) }
                     style={{backgroundColor: this.props.colors.bg}}
                     onClick={this.handleClick}
                />
            );}
        else {
            return (
                <div className="pixel bg"
                     id={location + '-' + (column + 1) + ',' + (25-row) }
                />
            )
        }
    }
}

// const Pixel = ({location, column, row}) => (
//     <div className="pixel bg"
//          id={location + '-' + (column + 1) + ',' + (25-row) }
//     >
//     </div>
// )

export default Pixel;