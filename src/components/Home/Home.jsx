import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";


const Home = () => {
    return (
       <>
        <div className="flex mb-5">
            <div className="w-1/6 h-full">
            <Sidebar></Sidebar>
            </div>
            <div className="w-5/6 mt-2">
                <Outlet></Outlet>
            </div>
        </div>
            <Footer></Footer>
       </>
        
    );
};

export default Home;