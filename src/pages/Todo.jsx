import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { IoSad } from "react-icons/io5";
import Navbar from "../components/Navbar";

function Todo() {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  // add task
  const addTask = () => {
    const newTab = [...task];
    newTab.push(value);
    setTask(newTab);
    setValue("");
  };

  //* delete

  const deleteTask = (index) => {
    const newTab = [...task];
    newTab.splice(index, 1);
    setTask(newTab);
  };

  //* update

  const updateTask = (index) => {
    const newTab = [...task];
    newTab[index] = updatedValue;
    setTask(newTab);
    setUpdatedValue("");
  };

  const filteredTasks = task.filter((t) =>
    t.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar />
      <div className="w-[80vw]  bg-amber-200 rounded-xl flex flex-col items-center p-10 gap-y-10">
        {/* input area */}
        <div className="w-[80%]  flex items-center justify-between relative">
          <input
            type="text"
            className="w-[90%] p-2 border-2 rounded-xl "
            placeholder="add task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="w-[30px] h-[30px] rounded-full border-2 border-amber-700 flex items-center justify-center absolute right-25" onClick={addTask}>
            <IoIosAdd size={50} color="red"  />
          </button>
        </div>
        {/* tasks area */}

        {/* search input */}
        <div>
          <input
            type="text"
            placeholder="search for a task"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border-2 rounded-xl"
          />
        </div>
        {filteredTasks.map((task, index) => (
            <div
              key={index}
              className="w-[80%] p-2 border rounded-xl flex justify-between"
            >
              <textarea
                readOnly={!isEditing}
                onClick={() => {
                  setIsEditing(!isEditing);
                }}
                onChange={(e) => setUpdatedValue(e.target.value)}
                cols={100}
                value={isEditing ? updatedValue : task}
              />
              <div className="flex gap-x-4">
                <button className="w-[30px] h-[30px] rounded-full  flex items-center justify-center ">
                  <BiTrash
                    size={30}
                    color="red"
                    onClick={() => deleteTask(index)}
                  />
                </button>
                <button className="w-[30px] h-[30px] rounded-full flex items-center justify-center ">
                  <GrUpdate
                    size={30}
                    color="red"
                    onClick={() => updateTask(index)}
                  />
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Todo;
