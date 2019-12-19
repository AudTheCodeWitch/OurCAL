import React, { Component } from 'react';
import { connect } from "react-redux";
import { postBlock } from "../actions/postBlock";

class BlockForm extends Component {

    constructor() {
        super();
        this.state = {
            blockName: '',
            difficulty: '',
            username: '',
            email: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postBlock(this.state, this.props.block)
    };
    render() {
        return (
            <div className='block-details'>
                <form onSubmit={(event) => this.handleSubmit(event)} className="block-form">
                    <h2>Block Details</h2>
                    Block name:<br/>
                    <input onChange={(event) => this.handleChange(event)} type="text" name="blockName" /><br/>
                    <input onChange={(event) => this.handleChange(event)} type="radio" name="difficulty" value="Beginner" />
                        Beginner<br/>
                    <input onChange={(event) => this.handleChange(event)} type="radio" name="difficulty" value="Intermediate" />
                        Intermediate<br/>
                    <input onChange={(event) => this.handleChange(event)} type="radio" name="difficulty" value="Advanced" />
                        Advanced<br/><br/>
                    Username:<br/>
                    <input onChange={(event) => this.handleChange(event)} type="text" name="username" /><br/>
                    Email:<br/>
                    <input onChange={(event) => this.handleChange(event)} type="email" name="email" /><br/><br/>
                    <input id='create' type="submit" value="Create Block" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { block: state.blockTemplate.blockTemplate }
};

export default connect(mapStateToProps,{postBlock})(BlockForm);
