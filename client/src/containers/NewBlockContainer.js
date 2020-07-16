import React, { Component } from "react";
import BlockHeader from "../components/BlockHeader";
import BlankBlock from "../components/BlankBlock";
import BlockForm from "../components/BlockForm";
import PaletteForm from "../components/PaletteForm";

// New block template - instructions, blank block, form, and color palette

class NewBlockContainer extends Component {
  render() {
    return (
      <div className="block-container">
        {/*Instructions*/}
        <BlockHeader />
        {/*25x25 grid*/}
        <BlankBlock />
        {/*Block info && store updates*/}
        <BlockForm />
        {/*Pen color selectors*/}
        <PaletteForm />
      </div>
    );
  }
}

export default NewBlockContainer;
