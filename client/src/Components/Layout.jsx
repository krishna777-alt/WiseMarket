import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
// import { AuthProvider } from "../Auth/AuthContext";

function Layout() {
  const { loading } = useContext(AuthContext);

  return (
    <>
      {/* {loading ? <LoadingSpinner /> : (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
     )} */}

      <Navbar />
      {loading ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default Layout;
