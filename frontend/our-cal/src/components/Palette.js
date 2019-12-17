// 'use strict'

import React from 'react'
import { ChromePicker } from 'react-color'

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

    handleChange(color, event) {
        // color = {
        //   hex: '#333',
        //   rgb: {
        //     r: 51,
        //     g: 51,
        //     b: 51,
        //     a: 1,
        //   },
        //   hsl: {
        //     h: 0,
        //     s: 0,
        //     l: .20,
        //     a: 1,
        //   },
        // }
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
                <button onClick={ this.handleClick }>Pick Color</button>
                { this.state.displayColorPicker ? <div style={ popover }>
                    <div style={ cover } onClick={ this.handleClose }/>
                    <ChromePicker onChange={this.handleChange} />
                </div> : null }
            </div>
        )
    }
}

export default Palette;
