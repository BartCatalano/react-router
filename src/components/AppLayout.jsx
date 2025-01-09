import { Outlet } from "react-router-dom";

function AppLayout() {
    return(
        <>
        <header>header</header>
        <Outlet />
        <footer>Footer</footer>
        </>
    )
}

export default AppLayout;