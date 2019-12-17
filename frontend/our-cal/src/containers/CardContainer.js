import React, {Component} from 'react';
import Card from "../components/Card";
import { connect } from 'react-redux'

class CardContainer extends Component {

    createCards = (blocks) => {
        let items = [];
        blocks.map((block, key) => {
            let c = <Card block={block} key={block.id}/>;
            items.push(c)
            }
        );
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