import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter.jsx";
import AppAlert from "./AppAlert.jsx";
function AppLayout() {
    return (
        <>
            <AppHeader />
            <AppAlert />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default AppLayout;