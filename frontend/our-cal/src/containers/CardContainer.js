import React, {Component} from 'react';
import Card from "../components/Card";

class CardContainer extends Component {

    createCards = () => {
        const cards = new Array(8);
        const items = [];
        for (const [index] of cards.entries()) {
            let c = <Card/>;
            items.push(c)
        }
        return items
    };

    render() {
        return (
            <div className='card-container'>
                <h2>View Blocks</h2>
                <div className='cards'>
                    {/*TODO write map card function*/}
                    {this.createCards()}
                </div>
            </div>
        );
    }
}

export default CardContainer;