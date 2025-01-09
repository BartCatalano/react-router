import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter.jsx";
function AppLayout() {
    return(
        <>
        <AppHeader />
        <Outlet />
        <AppFooter />
        </>
    )
}

export default AppLayout;