import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
function RootLayout(){
    return <>
        <MainNavigation/>
        <main classes='content'>
        <Outlet/>
        </main>
    </>
}

export default RootLayout