import React, {Component} from 'react';
import Card from "../components/Card";
import { connect } from 'react-redux'

class CardContainer extends Component {

    createCards = (blocks) => {
        // const cards = new Array(8);
        const items = [];
        for (const [index] of blocks.entries()) {
            let c = <Card/>;
            items.push(c)
        }
        return items
    };

    render() {
        console.log(this.props.blocks)
        return (
            <div className='card-container'>
                <h2>View Blocks</h2>
                <div className='cards'>
                    {/*TODO write map card function*/}
                    {this.createCards(this.props.blocks)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { blocks: state.blocks.all }
};

export default connect(mapStateToProps)(CardContainer);