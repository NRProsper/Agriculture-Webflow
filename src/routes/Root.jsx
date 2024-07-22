import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";


const Root = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root;