import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class UserList extends Component {

    constructor(props){
        super(props);
        this.state = {users: [], isLoading: true};

    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('api/users')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    render() {
        const {users, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const userList = users.map(user => {
            return <tr key={user.id}>
                <td style={{whiteSpace: 'nowrap'}}>{user.id}</td>
                <td style={{whiteSpace: 'nowrap'}}>{user.userName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{user.roles}</td>
            </tr>
        });
        return (
            <div>
                    <Container fluid>
                        <div className="float-right">
                            <Button color="success" tag={Link} to="users/new">Add User</Button>
                        </div>
                        <Table className="mt-4">
                            <thead>
                            <tr>
                                <th>User ID</th>
                                <th>UserName</th>
                                <th>Roles</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userList}
                            </tbody>
                        </Table>
                    </Container>

            </div>
        );
    }
}
export default UserList;
