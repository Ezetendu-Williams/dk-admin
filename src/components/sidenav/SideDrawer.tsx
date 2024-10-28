import { Drawer } from "@mantine/core";
import useAppStore from "../../hooks/store/AppStore";
import sidelinks from "../../data/SideNav";
import SideLink from "./SideLink";

export default function SideDrawer() {
  const setIsSidenavOpen = useAppStore((state) => state.setIsSidenavOpen);
  const isSidenavOpen = useAppStore((state) => state.isSidenavOpen);

  const handleCloseSidenav = () => {
    setIsSidenavOpen(false);
  };
  return (
    <Drawer
      opened={isSidenavOpen}
      onClose={handleCloseSidenav}
      title={null}
      size="65%"
    >
      <div className="w-full h-full flex flex-col md:gap-8 gap-5 overflow-hidden">
        <img
          src="/logo.png"
          alt="logo"
          className="md:w-[80px] w-[50px] mx-auto"
        />

        <div className="w-full min-h-full overflow-hidden flex flex-col md:gap-4 gap-2">
          {sidelinks.map((link) => (
            <SideLink key={link.id} {...link} />
          ))}
        </div>
      </div>
    </Drawer>
  );
}
