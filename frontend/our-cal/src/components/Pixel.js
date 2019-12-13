import React, {Component} from 'react';

class Pixel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div
                className="pixel"
                style={{backgroundColor: this.state.color}}
                onClick={this.handleClick}>
            </div>
        );
    }
}

export default Pixel;