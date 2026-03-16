import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout: React.FC = () => {
  return (
    <>
     
        <NavBar/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
