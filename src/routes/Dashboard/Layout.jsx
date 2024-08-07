import {Link, Outlet} from "react-router-dom";
import { RiDashboardHorizontalFill as Dashboard } from "react-icons/ri";


const Navigation =  () => {
    return(
        <div className="bg-darkGreen z-10 fixed flex items-center justify-center top-4 left-1/2 -translate-x-1/2 h-[80px] rounded-[50px] shadow-xl">
            <nav className="flex items-center gap-2">
                <Link className="d-link" to={"/dashboard"}>
                    <Dashboard />
                    <span>Dashboard</span>
                </Link>
                <Link className="d-link" to={"/dashboard/products"}>
                    <Dashboard />
                    <span>Products</span>
                </Link>
                <Link className="d-link" to={"/dashboard/categories"}>
                    <Dashboard />
                    <span>Categories</span>
                </Link>
                <Link className="d-link" to={"/dashboard/profile"}>
                    <Dashboard />
                    <span>Profile</span>
                </Link>
            </nav>
        </div>
    )
}

const Layout = () => {
    return (
        <>
            <Navigation />
            <main className="mt-[150px]">
                <Outlet />
            </main>
        </>
    )
}


export default Layout;
