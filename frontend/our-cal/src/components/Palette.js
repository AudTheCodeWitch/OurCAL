import React from 'react'
import { ChromePicker } from 'react-color'
import { connect } from "react-redux";
import { changeColor } from "../actions/changeColor";

class Palette extends React.Component {
    state = {
        color: '#fff',
        displayColorPicker: false,
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChangeComplete = (color, event) => {
        this.setState({ color: color.hex })
        // TODO: change from setState to keeping color in the store

    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return (
            <div>
                <button id={"Color " + this.props.id}
                        onClick={ this.handleClick }
                        style={{backgroundColor: this.state.color}}
                >{this.props.id === 'background' ? 'Background Color' : `Color ${this.props.id}`}</button>
                { this.state.displayColorPicker ? <div style={ popover }>
                    <div style={ cover } onClick={ this.handleClose }/>
                    <ChromePicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
                </div> : null }
            </div>
        )
    }
}

export default connect(null, {changeColor})(Palette);
