import { ReactNode } from "react";
import { FaChevronRight, FaChevronUp } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import FadeDown from "../animations/FadeDown";

interface SideLinkWrapperProps {
  children: ReactNode;
  leftIcon: ReactNode;
  isCollapsible: boolean;
  activeLink: string;
  delay?: number;
  isLink?: boolean;
}

export default function SideLinkWrapper({
  children,
  isCollapsible,
  leftIcon,
  activeLink,
  delay = 0,
  isLink = true,
}: SideLinkWrapperProps) {
  const location = useLocation();
  const pathname = location?.pathname?.split("/")[2];
  return (
    <FadeDown delay={delay}>
      {isLink ? (
        <Link
          to={`/dashboard/${activeLink}`}
          className={`w-[90%] h-[40px] flex items-center justify-between gap-2 mx-auto cursor-pointer group transition-all duration-500 px-3 rounded-lg ${
            activeLink === pathname
              ? "bg-primaryRed text-white"
              : "hover:text-primaryRed"
          }`}
        >
          <div className="flex items-center gap-3">
            {leftIcon}
            {children}
          </div>

          {isCollapsible && activeLink === pathname ? (
            <FaChevronUp />
          ) : (
            <FaChevronRight />
          )}
        </Link>
      ) : (
        <div
          className={`w-[90%] h-[40px] flex items-center justify-between gap-2 mx-auto cursor-pointer group transition-all duration-500 px-3 rounded-lg ${
            activeLink === pathname
              ? "bg-primaryRed text-white"
              : "hover:text-primaryRed"
          }`}
        >
          <div className="flex items-center gap-3">
            {leftIcon}
            {children}
          </div>

          {isCollapsible && activeLink === pathname ? (
            <FaChevronUp />
          ) : (
            <FaChevronRight />
          )}
        </div>
      )}
    </FadeDown>
  );
}
