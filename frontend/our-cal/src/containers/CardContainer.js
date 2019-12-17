import React, {Component} from 'react';
import Card from "../components/Card";
import { connect } from 'react-redux'

class CardContainer extends Component {

    createCards = (blocks) => {
        return blocks.map((block, key) => {
            return <Card block={block} key={block.id}/>;
            }
        );
    };

    render() {
        console.log(this.props.blocks)
        return (
            <div className='card-container'>
                <h2>View Blocks</h2>
                <div className='cards'>
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