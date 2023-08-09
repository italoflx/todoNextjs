"use client";

import { list, createSubtask, toggleStatusTask, deleteSubTaskById } from "@/api";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"
import { TiDeleteOutline } from "react-icons/ti"
import Link from "next/link";


const ListAll = () => {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState({});
  const [subtaskData, setSubtaskData] = useState({
    text: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await list();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items list: ", error);
      }
    };
    fetchData();
  }, []);

  const handleShowForm = (taskId) => {
    setShowForm((prev) => ({ ...prev, [taskId]: true }));
  };

  const handleHideForm = (taskId) => {
    setShowForm((prev) => ({ ...prev, [taskId]: false }));
    setSubtaskData({ text: "" });
  };

  const handleChangeValue = (event) => {
    setSubtaskData({ text: event.target.value });
  };

  const handleSubmit = async (id, event) => {
    event.preventDefault();
    createSubtask(id, subtaskData);
  };

  const handleChecked = (id) => {
    toggleStatusTask(id).then(setItems((prev) => prev.map((item) => item.id === id ? {...item, concluded: !item?.concluded} : item)))
  };

  const handleDeleteSubTask = (id) => {
    deleteSubTaskById(id).then(setItems((prev) => prev.map((item) => item.id === id ? {...item, subtasks: item.subtasks.filter((subtask) => subtask.id !== id)} : item)))
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">Items List</h1>
      <div className="flex justify-center gap-4">
        <ul className="block align-baseline w-2/4">
          {items.map((item) => (
            <li
              className="relative mt-4 py-2 px-4 rounded-lg shadow-md bg-white padding-3"
              key={item.id}
            >
              {item?.concluded ? (<button className="text-blue-500 mt-2 absolute top-0 right-2" onClick={() => handleChecked(item.id)}><AiFillCheckCircle size={30}/></button>) : (<button className="text-blue-500 mt-2 absolute top-0 right-2" onClick={() => handleChecked(item.id)}><BsCircle size={30}/></button>)}
              <strong className="text-blue-500">Title:</strong> {item.title}
              <br />
              <strong className="text-blue-500">Description:</strong>{" "}
              <span style={{wordBreak: 'break-all'}}>{item.description}</span>
              <br />
              {!item?.concluded && <button className="text-blue-500 mt-1" onClick={() => handleShowForm(item.id)}>Add SubTask</button>}
              
              {showForm[item.id] && (
                <div className="mt-4">
                  <form onSubmit={(e) => handleSubmit(item.id, e)}>
                    <div className="mb-2">
                      <input
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="text"
                        placeholder="Subtask Text"
                        value={subtaskData.text}
                        onChange={handleChangeValue}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Create Subtask
                      </button>
                      <button
                        type="button"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-1"
                        onClick={() => handleHideForm(item.id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
              <ul className="mt-2">
                {item.subtasks.map((subtask, index) => (
                  <li key={index} className="flex"><span style={{ wordBreak: 'break-all' }}>{subtask.text}</span> {!item?.concluded && <TiDeleteOutline onClick={() => handleDeleteSubTask(subtask.id)} color="red" size={18} className="mt-1 ml-1"/>}</li>  
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Link href="create">
        <button className="fixed bottom-4 right-4 py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg">
          <p className="font-size: 2.0rem"><IoMdAdd/></p>
        </button>
      </Link>
    </div>
  );
};

export default ListAll;
