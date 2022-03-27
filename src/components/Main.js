import React, { useState } from 'react';

const Main = () => {
  const [taskName, settaskName] = useState('');
  const [tasklist, settaskList] = useState([]);
  const addTask = () => {
    settaskList([...tasklist, taskName]);
  };

  const deleteTask = index => {
    let duplicateArray = [...tasklist];
    duplicateArray.splice(index, 1);
    settaskList(duplicateArray);
  };

  const tasklistcontent = tasklist.map((task, index) => {
    return (
      <div className="d-flex mt-3 p-3 justify-content-between border border-success">
        <p>{task}</p>
        <i class="far fa-trash-alt" onClick={() => deleteTask(index)}></i>
      </div>
    );
  });
  return (
    <div>
      <div className="row justify-content-center mx-auto mt-5">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1 className="text-center">React TODO List</h1>
          <input
            className="form-control"
            type="text"
            placeholder="Enter task"
            value={taskName}
            onChange={e => {
              settaskName(e.target.value);
            }}
          />
          <button className="btn btn-success" onClick={addTask}>
            ADD
          </button>
          <br></br>
          {tasklistcontent}
        </div>
      </div>
    </div>
  );
};

export default Main;
