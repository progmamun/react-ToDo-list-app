import React from 'react';

const main = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>React TODO List</h1>
          <input
            className="form-control"
            type="text"
            placeholder="Enter task"
          />
          <button className="btn btn-success">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default main;
