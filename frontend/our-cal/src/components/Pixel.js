import React, {Component} from 'react';

class Pixel extends Component {

    render() {
        return (
            <div className="pixel bg"
                 id={this.props.location + '-' + (this.props.column + 1) + ',' + (25-this.props.row) }
            >

            </div>
        );
    }
}

export default Pixel;