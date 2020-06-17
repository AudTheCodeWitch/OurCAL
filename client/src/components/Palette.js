import React from 'react'
import { ChromePicker } from 'react-color'
import { connect } from "react-redux";
import { changeColor } from "../actions/changeColor";

class Palette extends React.Component {
    state = {
        displayColorPicker: false,
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChangeComplete = (color) => {
        let button = this.props.id === 'background' ? 'bg' : `c${this.props.id}`;
        this.props.changeColor(button, color.hex)
    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        };
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        };
        const currentColor = this.props.id === 'background' ? 'bg' : `c${this.props.id}`;
        return (
            <div>
                <button id={"Color " + this.props.id}
                        onClick={ this.handleClick }
                        style={{backgroundColor: this.props.colors[currentColor]}}
                >
                    {this.props.id === 'background' ? 'Background Color' : `Color ${this.props.id}`}
                </button>
                { this.state.displayColorPicker ? <div style={ popover }>
                    <div style={ cover } onClick={ this.handleClose }/>
                    <ChromePicker color={this.props.colors[currentColor]} onChangeComplete={this.handleChangeComplete} />
                </div> : null }
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { colors: state.palette.colors };
};

export default connect(mapStateToProps, {changeColor})(Palette);
