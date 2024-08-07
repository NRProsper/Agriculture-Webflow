import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import Layout from "./routes/Dashboard/Layout.jsx";
import Products from "./routes/Dashboard/pages/Products.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Layout/>,
        children: [
            {
                path: "products",
                element: <Products />
            }
        ]
    }
])


const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App;