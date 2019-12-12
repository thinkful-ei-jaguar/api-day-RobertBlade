const BASE_URL = 'https://thinkful-list-api.herokuapp.com/RobertBlade';

const getItems = function() {
  return fetch(`${BASE_URL}/items`); 
};

const createItem = function (name) {
  const newItem = JSON.stringify({ name });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
};



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
  createItem
};