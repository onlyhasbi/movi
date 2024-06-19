import { Outlet } from "react-router-dom";
import Header from "./header.layout";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
