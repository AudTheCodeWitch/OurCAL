import React from "react";

// Functional component - instructions to create pattern

const BlockHeader = () => {
  return (
    <div className="block-header">
      <h2>Create A Block</h2>
      <ol>
        <li>
          Use the color pickers to set your colors. You may use up to 6 colors
          in your block, and you can change the colors at any time.
        </li>
        <li>Select a color radio button to set your active color.</li>
        <li>
          Click on a box to fill it in with your chosen color. Click it again to
          revert to the background color.
        </li>
        <li>Fill in the block details form and submit your creation!</li>
      </ol>
    </div>
  );
};

export default BlockHeader;
