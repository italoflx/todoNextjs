const baseUrl = "http://localhost:8080/task"
const baseUrlSubTask = "http://localhost:8080/subtask"

export const list = async () =>{
    const response = fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())

    return response
}

export const create = (item) => {
    const response = fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
    .then((response) => response.json());
  
    return response;
}  

export const update = (id, item) => {
    const response = fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
    .then((response) => response.json());
  
    return response;
}  

export const createSubtask = (idTask, item) => {
  const response = fetch(`${baseUrlSubTask}/${idTask}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(() => window.location.reload(true));

  return response;
}  

export const getById = (id) => {
    const response = fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json());
  
    return response;
}

export const deleteById = (id) => {
    const response = fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json());
  
    return response;
}

export const deleteSubTaskById = (id) => {
  const response = fetch(`${baseUrlSubTask}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(() => window.location.reload(true));

  return response;
}

export const toggleStatusTask = (id) => {
  const response = fetch(`${baseUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  return response;
}
  