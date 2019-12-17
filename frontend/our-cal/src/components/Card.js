import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import CompleteBlock from "./CompleteBlock";

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <button className='fa-times-circle'>
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

export default Card;
