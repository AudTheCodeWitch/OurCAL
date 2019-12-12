import React, {Component} from 'react';

class BlockForm extends Component {
    render() {
        return (
            <div className='block-details'>
                <form className="block-form">
                    <h2>Block Details</h2>
                    Block name:<br/>
                    <input type="text" name="blockName" /><br/>
                    <input type="radio" name="difficulty" value="Beginner" />
                        Beginner<br/>
                    <input type="radio" name="difficulty" value="Intermediate" />
                        Intermediate<br/>
                    <input type="radio" name="difficulty" value="Advanced" />
                        Advanced<br/><br/>
                    Username:<br/>
                    <input type="text" name="username" /><br/>
                    Email:<br/>
                    <input type="email" name="email" /><br/><br/>
                    <input id='create' type="submit" value="Create Block" />
                </form>
            </div>
        );
    }
}

export default BlockForm;