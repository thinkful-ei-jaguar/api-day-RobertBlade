import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';

import shoppingList from './shopping-list';

const main = function () {
  
  

  // eslint-disable-next-line indent
    //.then(res => console.log(res));
  

  shoppingList.bindEventListeners();
  shoppingList.render();

};



$(main);
