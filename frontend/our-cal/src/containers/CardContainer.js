import React, {Component} from 'react';
import Card from "../components/Card";
import { connect } from 'react-redux'
import { fetchBlocks } from "../actions/fetchBlocks";

class CardContainer extends Component {

    createCards = (blocks) => {
        return blocks.map((block, key) => {
            return <Card block={block} key={block.id}/>;
            }
        );
    };

    componentDidMount() {
        this.props.fetchBlocks()
    }

    render() {
        return (
            <div className='card-container'>
                <h2>View Blocks</h2>
                <div className='cards'>
                    {this.createCards(this.props.cards)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state.cards.all }
};

export default connect(mapStateToProps, {fetchBlocks})(CardContainer);