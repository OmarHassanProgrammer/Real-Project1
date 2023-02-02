import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Dashboard';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainDashboard from "./MainDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "main",
        element: <MainDashboard />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
