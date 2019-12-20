import React from "react";

const ShowHeader = (props) => {
    return (
        <div className="block-header">
            <h2>{props.name}</h2>
        </div>
    );
};

export default ShowHeader;
