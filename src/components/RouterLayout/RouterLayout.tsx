import { NavBar } from "../NavBar/NavBar"
import { Outlet } from "react-router-dom"

function RouterLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export { RouterLayout };