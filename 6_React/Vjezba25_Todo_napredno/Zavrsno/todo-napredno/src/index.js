import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createBrowserRouter , RouterProvider  } from 'react-router-dom';
import store from './store/redux-store';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />
  } 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
