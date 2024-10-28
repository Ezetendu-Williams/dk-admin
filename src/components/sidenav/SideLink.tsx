import { Link, useLocation } from "react-router-dom";
import { TSideLinkProps } from "../../data/SideNav";
import useAppStore from "../../hooks/store/AppStore";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

type SideLinkProps = Omit<TSideLinkProps, "id">;

export default function SideLink({
  title,
  Icon,
  hasArrow,
  isButton,
  isCollapsible,
  children,
  link,
}: SideLinkProps) {
  const [viewProduct, setViewProduct] = useState(false);
  const location = useLocation();
  const setIsLogoutOpen = useAppStore((state) => state.setIsLogoutOpen);
  const setIsSidenavOpen = useAppStore((state) => state.setIsSidenavOpen);
  const activeLink = location?.pathname?.split("/")[2];
  const isActive = activeLink?.toLowerCase() === title?.toLowerCase();
  const isProductActive =
    activeLink?.toLowerCase() === "products" ||
    activeLink?.toLowerCase() === "product-categories" ||
    activeLink?.toLowerCase() === "product-descriptions";

  const handleClick = () => {
    if (title === "log out") {
      setIsLogoutOpen(true);
    }

    if (title === "products") {
      if (viewProduct) {
        setViewProduct(false);
      } else {
        setViewProduct(true);
      }
    }
  };

  return (
    <>
      {isButton ? (
        <>
          <button
            onClick={handleClick}
            className={`capitalize w-[90%] md:h-[40px] h-[30px] mx-auto rounded-md flex items-center justify-between py-1 px-2 group transition-all duration-500 hover:scale-[1.05] ${
              title === "products" && isProductActive
                ? "text-white bg-primaryRed font-medium"
                : isActive
                ? "text-white bg-primaryRed font-medium"
                : "text-primaryBlack hover:text-primaryRed font-semibold"
            }`}
          >
            <div className="flex items-center gap-3">
              {Icon}
              {title}
            </div>
            {hasArrow && (isActive ? <FaChevronUp /> : <FaChevronRight />)}
          </button>

          <div
            className={`w-full transition-[max-height] ${
              viewProduct ? "max-h-[400px]" : "max-h-0 hidden"
            }`}
          >
            {isCollapsible &&
              children?.map((child) => <SideLink key={child.id} {...child} />)}
          </div>
        </>
      ) : (
        <Link
          to={link as string}
          onClick={() => setIsSidenavOpen(false)}
          className={`capitalize w-[90%] md:h-[40px] h-[30px] mx-auto rounded-md flex items-center justify-between py-1 px-2 group transition-all duration-500 hover:scale-[1.05] ${
            isActive
              ? "text-white bg-primaryRed font-medium"
              : "text-primaryBlack hover:text-primaryRed font-semibold"
          }`}
        >
          <div className="flex items-center gap-3">
            {Icon}
            {title}
          </div>
          {hasArrow && (isActive ? <FaChevronUp /> : <FaChevronRight />)}
        </Link>
      )}
    </>
  );
}
