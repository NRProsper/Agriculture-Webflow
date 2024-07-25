import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/sections/Footer.jsx";


const Root = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Root;