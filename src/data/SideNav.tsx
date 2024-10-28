import { ReactNode } from "react";

type SideLinks =
  | "/dashboard/dashboard"
  | "/dashboard/products"
  | "/dashboard/product-categories"
  | "/dashboard/product-descriptions"
  | "/dashboard/customers"
  | "/dashboard/orders"
  | "/dashboard/receipts"
  | "/dashboard/settings";
type SideTitles =
  | "dashboard"
  | "products"
  | "products"
  | "product-categories"
  | "product-descriptions"
  | "customers"
  | "orders"
  | "receipts"
  | "settings"
  | "log out";

export interface TSideLinkProps {
  id: number;
  Icon: ReactNode;
  title: SideTitles;
  hasArrow: boolean;
  isCollapsible: boolean;
  link?: SideLinks;
  isButton: boolean;
  children?: TSideLinkProps[];
}

const sidelinks: TSideLinkProps[] = [
  {
    id: 1,
    isButton: false,
    Icon: (
      <svg
        width="21"
        height="22"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.24512 13.7815L8.23825 9.89131L11.6524 12.5732L14.5815 8.79291"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="17.9954"
          cy="3.20023"
          r="1.9222"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9248 2.12013H5.65704C2.6456 2.12013 0.77832 4.25286 0.77832 7.2643V15.3467C0.77832 18.3581 2.60898 20.4817 5.65704 20.4817H14.2612C17.2726 20.4817 19.1399 18.3581 19.1399 15.3467V8.30778"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    hasArrow: true,
    isCollapsible: false,
    link: "/dashboard/dashboard",
    title: "dashboard",
  },
  {
    id: 2,
    Icon: (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0134 20H5.66555C2.59919 20 0.246786 18.8925 0.914978 14.4348L1.69301 8.3936C2.10491 6.16934 3.52367 5.31808 4.76852 5.31808H14.947C16.2102 5.31808 17.5466 6.23342 18.0225 8.3936L18.8006 14.4348C19.3681 18.389 17.0797 20 14.0134 20Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1502 5.0984C14.1502 2.71233 12.216 0.778039 9.82988 0.778039V0.778039C8.68088 0.77317 7.57727 1.2262 6.76308 2.03695C5.94889 2.84771 5.4912 3.94939 5.49121 5.0984H5.49121"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.796 9.60183H12.7502"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.96492 9.60183H6.91916"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    hasArrow: true,
    isCollapsible: true,
    isButton: true,
    title: "products",
    children: [
      {
        id: 3,
        hasArrow: false,
        isButton: false,
        Icon: (
          <svg
            fill="#000000"
            width="20"
            height="21"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.961 29.457l-2.606-15.743c-0.233-2.041-2.093-3.701-4.148-3.701h-2.208v-2.665c0-4.067-2.901-7.376-6.968-7.376-4.066 0-7.029 3.308-7.029 7.376v2.665h-2.396c-2.054 0-3.915 1.66-4.141 3.658l-2.415 15.755c-0.093 0.83 0.070 1.485 0.482 1.947 0.389 0.434 0.954 0.656 1.679 0.656h27.299c1.029 0 1.618-0.413 1.933-0.76 0.288-0.319 0.614-0.88 0.519-1.811zM11.002 7.348c0-2.964 2.066-5.376 5.029-5.376s4.968 2.412 4.968 5.376v2.665h-9.998zM29.599 30.014l-27.266 0.014c-0.172 0-0.344-0.092-0.304-0.334l2.414-15.753c0.12-1.045 1.109-1.928 2.161-1.928h2.397v2.279c-0.596 0.346-1.002 0.984-1.002 1.723 0 1.105 0.896 2 2 2s2-0.895 2-2c0-0.738-0.404-1.375-0.998-1.722v-2.281h9.997v2.281c-0.594 0.347-0.998 0.984-0.998 1.722 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.739-0.405-1.377-1.002-1.723v-2.279h2.208c1.052 0 2.041 0.883 2.169 1.982l2.604 15.727c0.012 0.128-0.088 0.291-0.381 0.291z"></path>
          </svg>
        ),
        isCollapsible: false,
        title: "products",
        link: "/dashboard/products",
      },
      {
        id: 4,
        hasArrow: false,
        isButton: false,
        Icon: (
          <svg
            width="20"
            height="21"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="28"
              width="36"
              height="14"
              rx="4"
              stroke="#000000"
              strokeWidth="4"
            />
            <path
              d="M20 7H10C7.79086 7 6 8.79086 6 11V17C6 19.2091 7.79086 21 10 21H20"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              cx="34"
              cy="14"
              r="8"
              fill="#000"
              stroke="#000000"
              strokeWidth="4"
            />
            <circle cx="34" cy="14" r="3" fill="white" />
          </svg>
        ),
        isCollapsible: false,
        title: "product-categories",
        link: "/dashboard/product-categories",
      },
      {
        id: 5,
        hasArrow: false,
        isButton: false,
        Icon: (
          <svg
            width="20"
            height="21"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="var(--ci-primary-color, #000000)"
              d="M334.627,16H48V496H472V153.373ZM440,166.627V168H320V48h1.373ZM80,464V48H288V200H440V464Z"
              className="ci-primary"
            />
            <rect
              width="224"
              height="32"
              x="136"
              y="296"
              fill="var(--ci-primary-color, #000000)"
              className="ci-primary"
            />
            <rect
              width="224"
              height="32"
              x="136"
              y="376"
              fill="var(--ci-primary-color, #000000)"
              className="ci-primary"
            />
          </svg>
        ),
        isCollapsible: false,
        title: "product-descriptions",
        link: "/dashboard/product-descriptions",
      },
    ],
  },
  {
    id: 6,
    hasArrow: false,
    isButton: false,
    Icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.27051 13.9519L8.86319 8.8627L13.9524 7.27002L12.3598 12.3593L7.27051 13.9519Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="10.611"
          cy="10.611"
          r="9.61098"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isCollapsible: false,
    title: "customers",
    link: "/dashboard/customers",
  },
  {
    id: 7,
    hasArrow: true,
    isButton: false,
    Icon: (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6389 12.3958H16.5906C15.1042 12.3949 13.8993 11.1909 13.8984 9.70449C13.8984 8.21805 15.1042 7.01413 16.5906 7.01322H20.6389"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.049 9.64288H16.7373"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.74766 1H15.3911C18.2892 1 20.6388 3.34951 20.6388 6.24766V13.4247C20.6388 16.3229 18.2892 18.6724 15.3911 18.6724H6.74766C3.84951 18.6724 1.5 16.3229 1.5 13.4247V6.24766C1.5 3.34951 3.84951 1 6.74766 1Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.03516 5.53816H11.4341"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isCollapsible: false,
    title: "orders",
    link: "/dashboard/orders",
  },
  {
    id: 8,
    hasArrow: true,
    isButton: false,
    Icon: (
      <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7161 14.2234H5.49609"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.7161 10.0369H5.49609"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25207 5.8601H5.49707"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.909 0.749802C12.909 0.749802 5.23198 0.753802 5.21998 0.753802C2.45998 0.770802 0.750977 2.5868 0.750977 5.3568V14.5528C0.750977 17.3368 2.47298 19.1598 5.25698 19.1598C5.25698 19.1598 12.933 19.1568 12.946 19.1568C15.706 19.1398 17.416 17.3228 17.416 14.5528V5.3568C17.416 2.5728 15.693 0.749802 12.909 0.749802Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isCollapsible: false,
    title: "receipts",
    link: "/dashboard/receipts",
  },
  {
    id: 9,
    hasArrow: false,
    isButton: false,
    Icon: (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6389 12.3958H16.5906C15.1042 12.3949 13.8993 11.1909 13.8984 9.70449C13.8984 8.21805 15.1042 7.01413 16.5906 7.01322H20.6389"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.049 9.64288H16.7373"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.74766 1H15.3911C18.2892 1 20.6388 3.34951 20.6388 6.24766V13.4247C20.6388 16.3229 18.2892 18.6724 15.3911 18.6724H6.74766C3.84951 18.6724 1.5 16.3229 1.5 13.4247V6.24766C1.5 3.34951 3.84951 1 6.74766 1Z"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.03516 5.53816H11.4341"
          stroke="#101828"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    isCollapsible: false,
    title: "settings",
    link: "/dashboard/settings",
  },
  {
    id: 10,
    hasArrow: true,
    isButton: true,
    Icon: (
      <svg
        width="17"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.3749 0.00199565C11.2949 0.00199565 13.6729 2.38 13.6729 5.303L13.6728 6.87959C15.448 7.49741 16.725 9.1874 16.725 11.1708V15.4598C16.725 17.9648 14.688 20.0018 12.183 20.0018H4.542C2.037 20.0018 0 17.9648 0 15.4598V11.1708C0 9.18778 1.27652 7.49804 3.05121 6.87994L3.0519 5.303C3.0579 3.863 3.6149 2.534 4.6199 1.538C5.6259 0.540996 6.9539 -0.0360043 8.3749 0.00199565ZM12.183 8.1288H4.542C2.864 8.1288 1.5 9.4928 1.5 11.1708V15.4598C1.5 17.1378 2.864 18.5018 4.542 18.5018H12.183C13.86 18.5018 15.225 17.1378 15.225 15.4598V11.1708C15.225 9.4928 13.86 8.1288 12.183 8.1288ZM8.3623 11.4546C8.7763 11.4546 9.1123 11.7906 9.1123 12.2046V14.4256C9.1123 14.8396 8.7763 15.1756 8.3623 15.1756C7.9483 15.1756 7.6123 14.8396 7.6123 14.4256V12.2046C7.6123 11.7906 7.9483 11.4546 8.3623 11.4546ZM8.3719 1.502H8.3559C7.3429 1.502 6.3939 1.892 5.6769 2.603C4.9549 3.317 4.5559 4.27 4.5519 5.286L4.551 6.62823H12.172L12.1729 5.303C12.1729 3.207 10.4679 1.502 8.3719 1.502Z"
          fill="#101828"
        />
      </svg>
    ),
    isCollapsible: false,
    title: "log out",
  },
];

export default sidelinks;
