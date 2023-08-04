"use client";

import { list } from "@/api";
import { useEffect, useState } from "react";

const ListAll = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await list();
        setItems(data);
      } catch (error) {
        console.error("Erro ao buscar a lista de itens: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-200">
      <h1 className="text-3xl font-bold mb-6">Lista de Itens</h1>
      <ul>
        {items.map((item, index) => (
          <li
            className="mt-4 py-2 px-4 rounded-lg shadow-md bg-white"
            key={index}
          >
            <strong className="text-blue-500">Título:</strong> {item.title}
            <br />
            <strong className="text-blue-500">Descrição:</strong>{" "}
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAll;
