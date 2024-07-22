import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
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
            }
        ]
    }
])


const App = () => (
    <RouterProvider router={router} />
)

export default App;