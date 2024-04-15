import React, { useRef, useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <form>
        <input
          type="text"
          className=" mx-4 mb-6 p-2 border ring-1 ring-black border-black"
          placeholder="Enter Task"
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button
          type=""
          className="px-3 text-md border border-black bg-black text-white"
          onClick={handleAddTask}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Create;
