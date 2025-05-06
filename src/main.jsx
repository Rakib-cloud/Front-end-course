import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Import your page components
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import DetailsPage from "./pages/DetailsPage.jsx";
import Portfolio from "./pages/Portfolio.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path:"details",
                element:<DetailsPage/>
            },
            {
                path:"portfolio",
                element:<Portfolio/>
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)