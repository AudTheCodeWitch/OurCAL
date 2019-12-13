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
                <h3>Block Name</h3>
                <div className='block'>
                    <CompleteBlock/>
                </div>
                <ul>
                    <li>Block Difficulty</li>
                    <li>Username</li>
                </ul>
            </div>
        );
    }
}

export default Card;