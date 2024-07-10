import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import PackagePage from "../pages/PackagePage";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index : true,
                element: <HomePage />
            },
            {
                path:'search',
                element:<SearchPage />
            },
            {
                path:'packages/:name',
                element: <PackagePage />
            },
        ]
    },
]);