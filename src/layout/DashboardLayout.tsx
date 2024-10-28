import { PropsWithChildren } from "react";
import SideNavbar from "../components/sidenav/SideNavbar";
import Navbar from "../components/navbar/Navbar";
import SideDrawer from "../components/sidenav/SideDrawer";
import LogoutModal from "../components/modals/Logout/Logout";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-screen h-screen bg-white flex overflow-hidden relative">
        <div className="md:flex hidden w-[280px] min-h-screen border-r border-[#E6E8F0] overflow-y-auto">
          <SideNavbar />
        </div>
        <div className="w-full h-screen overflow-hidden">
          <div className="w-full h-[10vh]">
            <Navbar />
          </div>
          <div className="w-full h-[90vh] overflow-hidden">{children}</div>
        </div>
      </div>

      <SideDrawer />
      <LogoutModal />
    </>
  );
}
