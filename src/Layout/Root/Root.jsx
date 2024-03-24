import { Outlet } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";

const Root = () => {
    return (
        <main className="max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </main>
    );
};

export default Root;