import React, { Component } from 'react';

/**
 * <button
 *      onClick={() => props.sortBy('nameOfProperty')
 */

class GetList extends Component {

    state={
        loading:true,
        user:null
    };

    async componentDidMount() {
        const url = "http://localhost:8080/users/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({user: data._embedded.users, loading: false});

    }




    render() {

        return(

            <div>
                {this.state.loading || !this.state.user? (
                    <div>loading...</div>
                ):(
                    <table>
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>password</th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            Object.values(this.state.user).forEach((row)=>

                                    <tr>
                                        {console.log(row)}
                                        <td>row</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                )}
            </div>
      )
    }
}
export default GetList