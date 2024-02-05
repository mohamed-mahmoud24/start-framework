import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

export default function App() {
    let Routers = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "portfolio", element: <Portfolio /> },
                { path: "contact", element: <Contact /> },
                { path: "*", element: <NotFound /> },
            ],
        },
    ]);
    return <RouterProvider router={Routers} />;
}
