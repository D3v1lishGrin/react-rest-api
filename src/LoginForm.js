import React from "react";

/**
 * Basic Login form without Validation
 */

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        const { email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={this.handleChange}
                />
                <label htmlFor="email">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={this.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
        
    };
} export default LoginForm;
