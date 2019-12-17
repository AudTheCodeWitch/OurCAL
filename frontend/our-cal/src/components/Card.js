import React, {Component} from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import CompleteBlock from "./CompleteBlock";
import { destroyBlock } from "../actions/destroyBlock";

class Card extends Component {

    handleDeleteClick = (id) => {
        this.props.destroyBlock(id)
    };

    render() {
        return (
            <div className='card' id={this.props.block.id + '-' + this.props.block.attributes.name}>
                <button onClick={(e) => this.handleDeleteClick(this.props.block.id, e)} className='fa-times-circle'>
                    <FontAwesomeIcon icon={ faTimesCircle } />
                </button>
                <h3>{this.props.block.attributes.name}</h3>
                <div className='block'>
                    <CompleteBlock block={this.props.block.attributes}/>
                </div>
                <ul>
                    <li>{this.props.block.attributes.difficulty.rating}</li>
                    <li>{this.props.block.attributes.user.username}</li>
                </ul>
            </div>
        );
    }
}

export default connect(null, {destroyBlock})(Card);
