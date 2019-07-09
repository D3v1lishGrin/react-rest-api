import React, {Component} from 'react';
import users from './data';

/**
 * Shows Data From Local JSON File
 */

class GetLocalList extends Component{

    render() {
        return(
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>roles</th>
            </tr>
            </thead>
            <tbody>
            {users.map((dataDetail, index)=>{
                return (
                    <tr>
                    <td>{dataDetail.id}</td>
                    <td>{dataDetail.name}</td>
                    <td>{dataDetail.roles}</td>
                    </tr>
                    )

            })
            }

            </tbody>
        </table>
        )
    }

}
export default GetLocalList