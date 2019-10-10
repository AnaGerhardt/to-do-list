import React from 'react'

const ListTable = props => (

    <table className="striped-table">
        <thead>
            <tr>
            <th>List</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox"></input>Wash clothes</td>
            </tr>
            <tr>
                <td>Bring pets to the vet</td>
            </tr>
            <tr>
                <td>Deposit money</td>
            </tr>
        </tbody>
    </table>

)

export default ListTable