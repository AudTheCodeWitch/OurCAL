import React, { Component } from 'react';
import { connect } from "react-redux";
import { postBlock } from "../actions/postBlock";
import { clearBlock } from "../actions/clearBlock";

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
        this.props.postBlock(this.state, this.props.block);
        this.props.clearBlock(this.props.block);
        this.setState({
            blockName: '',
            difficulty: '',
            username: '',
            email: ''
        });
        console.log('submitted')
    };
    render() {
        return (
            <div className='block-details'>
                <form onSubmit={(event) => this.handleSubmit(event)} className="block-form">
                    <h2>Block Details</h2>
                    Block name:<br/>
                    <input onChange={(event) => this.handleChange(event)} type="text" name="blockName" value={this.state.blockName} /><br/>
                    <input onChange={(event) => this.handleChange(event)} type="radio" checked={this.state.difficulty === 'Beginner'} name="difficulty" value="Beginner" />
                        Beginner<br/>
                    <input onChange={(event) => this.handleChange(event)} type="radio" checked={this.state.difficulty === 'Intermediate'} name="difficulty" value="Intermediate" />
                        Intermediate<br/>
                    <input onChange={(event) => this.handleChange(event)} type="radio" checked={this.state.difficulty === 'Advanced'} name="difficulty" value="Advanced" />
                        Advanced<br/><br/>
                    Username:<br/>
                    <input onChange={(event) => this.handleChange(event)} type="text" name="username" value={this.state.username}/><br/>
                    Email:<br/>
                    <input onChange={(event) => this.handleChange(event)} type="email" name="email" value={this.state.email} /><br/><br/>
                    <input id='create' type="submit" value="Create Block" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { block: state.blockTemplate.blockTemplate }
};

export default connect(mapStateToProps,{postBlock, clearBlock})(BlockForm);
