import React from 'react';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import { Provider } from 'react-redux';

const store = require('./reducers/store').init()

function App() {
  return (
   <Provider store={store}> 
      <Router>
        <div className="container">
          <Route exact path="/" component={ProductList} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/edit/:id" component={EditProduct} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
