import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";

function App() {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [query, setQuery] = useState("");

  const addTask = () => {
    if (!value.trim()) return;
    setTask([...task, value]);
    setValue("");
  };

  const deleteTask = (index) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  const updateTask = (index) => {
    if (!updatedValue.trim()) return;
    const newTasks = [...task];
    newTasks[index] = updatedValue;
    setTask(newTasks);
    setUpdatedValue("");
  };

  // Derive filtered tasks (search)
  const filteredTasks = task.filter((t) =>
    t.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="w-[80vw] bg-amber-200 rounded-xl flex flex-col items-center p-10 gap-y-10">
        {/* input area */}
        <div className="w-[80%] flex items-center justify-between relative">
          <input
            type="text"
            className="w-[90%] p-2 border-2 rounded-xl"
            placeholder="add task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="w-[30px] h-[30px] rounded-full border-2 border-amber-700 flex items-center justify-center absolute right-25"
            onClick={addTask}
          >
            <IoIosAdd size={50} color="red" />
          </button>
        </div>

        {/* search input */}
        <div>
          <input
            type="text"
            placeholder="search for a task"
            className="w-[90%] p-2 border-2 rounded-xl"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* tasks list */}
        {filteredTasks.map((t, index) => (
          <div
            key={index}
            className="w-[80%] p-2 border rounded-xl flex justify-between"
          >
            <textarea
              readOnly={!isEditing}
              onClick={() => setIsEditing(!isEditing)}
              onChange={(e) => setUpdatedValue(e.target.value)}
              cols={100}
              value={isEditing ? updatedValue : t}
            />
            <div className="flex gap-x-4">
              <button className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <BiTrash
                  size={30}
                  color="red"
                  onClick={() => deleteTask(index)}
                />
              </button>
              <button className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
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

export default App;
