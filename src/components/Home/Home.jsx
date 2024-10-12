import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Bars } from "react-loader-spinner";

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className="flex mb-5">
        <div className="w-1/6">
          <Sidebar></Sidebar>
        </div>
        <div className="w-5/6 mt-2 pl-2">
          {navigation.state === "loading" ? (
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
