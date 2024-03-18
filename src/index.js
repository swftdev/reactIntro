import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom';
import { FilmTable } from './components/FilmTable';
import { FilmDetails } from './components/FilmDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FilmTable/>
  },
  {
    path: "/films/:filmId",
    element: <FilmDetails/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
