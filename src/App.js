import React from 'react';

function App() {
  return (
    <div className="container">

      <div className="flex-row">
        <form>
          <h2>My "To Do" List</h2>
          <label>Add a new item</label>
          <input type="text"></input>
          <button className="muted-button">Done!</button>
        </form>
      </div>

    </div>
  );
}

export default App;
