const baseUrl = "http://localhost:8080/tarefa"

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

export const atualizar = (id, item) => {
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
  