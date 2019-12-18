import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPixel } from "../actions/addPixel";

class Pixel extends Component {

    handleClick = () => {

    };

    componentDidMount() {
        let x = this.props.column + 1;
        let y = 25 - this.props.row;
        let pixel = {
            id: x + ', ' + y,
            x: x,
            y: y,
            color: this.props.colors.bg,
            colorVariable: 'bg'
        };
        if (this.props.location === 'Template') {
            //    add pixel to store
            this.props.addPixel(pixel)

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

const mapStateToProps = (state) => {
    return { colors: state.palette.colors }
};

export default connect(mapStateToProps,{addPixel})(Pixel);