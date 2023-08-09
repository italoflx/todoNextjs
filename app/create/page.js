"use client";

import { useState } from "react";
import { create } from "@/api";
import { useRouter } from "next/navigation";


const CreateTask = () => {
  
  const router = useRouter()

  const [dataForm, setDataForm] = useState({
    title: "",
    description: "",
  });

  const handleChangeValue = (event) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(dataForm.description === "" || dataForm.title === "") return
    create(dataForm)
      .then((data) => {
        router.push("/list")
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        <a href="/list">New task</a>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-1"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            onChange={handleChangeValue}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-1"
          >
            Description
          </label>
          <input

            type="text"
            name="description"
            onChange={handleChangeValue}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="submit-button">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md"
            >
              Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
