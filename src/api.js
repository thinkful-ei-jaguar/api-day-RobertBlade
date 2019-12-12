import store from "./store";

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/RobertBlade';

const getItems = function() {
  return listApiFetch(BASE_URL + '/items');
  //return fetch(`${BASE_URL}/items`); 
};

const createItem = function (name) {
  const newItem = JSON.stringify({ name });
  //
  return listApiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  })
    .catch((error) => {
      store.setError(error.message);
    });
};

const updateItem = function (id, updateData) {
  const newData = JSON.stringify(updateData);
  console.log(`${BASE_URL}/items/${id}`);
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newData
  })
    .catch((error) => {
      store.setError(error.message);
    });

};


const DeleteItem = function (id) {
  console.log(`${BASE_URL}/items/${id}`);
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .catch((error) => {
      store.setError(error.message);

    });
};
	
function listApiFetch(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        // Valid HTTP response but non-2xx status - let's create an error!
        error = { code: res.status };
      }
 
      // In either case, parse the JSON stream:
      return res.json();
    })
 
    .then(data => {
      // If error was flagged, reject the Promise with the error object
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
 
      // Otherwise give back the data as resolved Promise
      return data;
    });
}
/*
let newItem = new {
    name: name
  };
  let newItemStringified = JSON.stringify(newItem);
  fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItemStringified
  });
*/










export default {
  getItems,
  createItem,
  updateItem,
  DeleteItem
};