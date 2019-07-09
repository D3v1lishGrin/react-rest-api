import React, { Component } from 'react';

class PostValues extends Component {
    constructor(props){
        super(props);
        this.state={'username': ''}
    }
    handleChange(e){
        this.setState({username: e.target.value});
    }
    handleSubmit(e){
        fetch("http://localhost:8080/users/");
    }
    render(){
        return(
            <form>
                <input onChange={this.handleChange.bind(this)} type="text" name="username" placeholder="Enter name here" />
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}
export default PostValues

