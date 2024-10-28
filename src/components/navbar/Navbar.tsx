import { MdMenu } from "react-icons/md";
import useAppStore from "../../hooks/store/AppStore";
import { Image, Input } from "@mantine/core";
import { FaRegBell, FaRegEnvelope, FaSearch } from "react-icons/fa";
import useIsMobile from "../../hooks/custom/useIsMobile";

export default function Navbar() {
  const setIsSidenavOpen = useAppStore((state) => state.setIsSidenavOpen);
  const { isMobile } = useIsMobile();

  const handleOpenSidenav = () => {
    setIsSidenavOpen(true);
  };
  return (
    <nav className="w-full h-full bg-white md:px-8 px-5 flex items-center justify-between">
      <MdMenu
        size={25}
        onClick={handleOpenSidenav}
        className="md:hidden flex cursor-pointer"
      />
      <Input
        type="search"
        radius={8}
        name="search"
        id="search"
        placeholder="search anything ..."
        leftSection={<FaSearch />}
        style={{ width: isMobile ? "40%" : "55%" }}
      />
      <div className="flex items-center md:gap-5 gap-3">
        <div className="relative w-7 h-7">
          <FaRegEnvelope size={isMobile ? 20 : 22} />
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#4F46E5] text-white text-[9px] font-medium grid place-content-center rounded-full">
            2
          </span>
        </div>

        <FaRegBell size={isMobile ? 20 : 22} />
        <Image
          src="/user.png"
          alt="user avatar"
          className="object-cover"
          w={isMobile ? 30 : 40}
          h={isMobile ? 30 : 40}
        />
      </div>
    </nav>
  );
}
