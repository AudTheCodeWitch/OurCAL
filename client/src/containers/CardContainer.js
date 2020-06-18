import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import { fetchBlocks } from "../actions/fetchBlocks";

class CardContainer extends Component {
  createCards = blocks => {
    // Create a card for each block from store in reverse order (newest first)
    return blocks.slice(0).reverse().map(block => {
      return <Card block={block} key={block.id} />;
    });
  };

  componentDidMount() {
    // Fetch blocks from db once component loads to DOM
    this.props.fetchBlocks();
  }

  render() {
    return (
      <div className="card-container">
        <h2>View Blocks</h2>
        <div className="cards">{this.createCards(this.props.cards)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Get cards from store
  return { cards: state.cards.all };
};

export default connect(mapStateToProps, { fetchBlocks })(CardContainer);
