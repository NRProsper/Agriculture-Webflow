import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about"
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