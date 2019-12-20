import React from "react";
import CardContainer from "./CardContainer";
import ViewBlockContainer from "./ShowBlockContainer";
import { connect } from 'react-redux'


class ShowContainer extends React.Component {
    render() {
        return (
            <div className="Home">
                <ViewBlockContainer id={this.props.id}/>
                <br />
                <CardContainer />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {id: props.match.params.id}
};

export default connect(mapStateToProps)(ShowContainer);