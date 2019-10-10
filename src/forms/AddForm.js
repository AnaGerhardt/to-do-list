import React from 'react'

const AddForm = props => (
    <form>
        <h2>My "To Do" List</h2>
        <label>Add a new item</label>
        <input type="text"></input>
        <button className="muted-button">Done!</button>
    </form>
)

export default AddForm