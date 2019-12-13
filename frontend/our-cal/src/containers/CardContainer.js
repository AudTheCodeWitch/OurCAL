import React, {Component} from 'react';
import Card from "../components/Card";

class CardContainer extends Component {
    render() {
        return (
            <div className='card-container'>
                <h2>View Blocks</h2>
                <div className='cards'>
                    {/*TODO write map card function*/}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default CardContainer;