import sidelinks from "../../data/SideNav";
import SideLink from "./SideLink";

export default function SideNavbar() {
  return (
    <div className="w-full h-screen flex flex-col md:gap-8 gap-5 overflow-hidden">
      <img
        src="/logo.png"
        alt="logo"
        className="md:w-[80px] w-[50px] mx-auto"
      />

      <div className="w-full min-h-full overflow-y-scroll scroller-none flex flex-col md:gap-4 gap-2">
        {sidelinks.map((link) => (
          <SideLink key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
}
