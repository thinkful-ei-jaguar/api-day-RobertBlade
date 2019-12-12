
const items = [];
let hideCheckeditems = false;
let error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const setError = function (error) {
  this.error = error;
};

const addItem = function (item) {
  this.items.push(item);
};
/*
const findAndToggleChecked = function (id) {
  const currentItem = this.findById(id);
  currentItem.checked = !currentItem.checked;
};

const findAndUpdateName = function (id, name) {
  try {
    item.validateName(name);
    const currentItem = this.findById(id);
    currentItem.name = name;
  } catch (e) {
    console.log('Cannot update name: ' + e.message);
  }
};
*/



const findAndUpdate = function (id, newData) {
  console.log(`The id passed in is: ${id}`);
  console.log(`The new data is: ${newData}`);
  let currentItem = this.findById(id);
  Object.assign(currentItem, newData);
  
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  //findAndToggleChecked,
  //findAndUpdateName,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter,
  error,
  setError
};