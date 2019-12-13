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
                {/*TODO Pass as props*/}
                <h3>Block Name</h3>
                <div className='block'>
                    <CompleteBlock/>
                </div>
                <ul>
                    {/*TODO Pass as props*/}
                    <li>Block Difficulty</li>
                    <li>Username</li>
                </ul>
            </div>
        );
    }
}

export default Card;