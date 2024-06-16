"use client";
import {
  Boxes,
  ChevronDown,
  ChevronRightIcon,
  ExternalLink,
  Folder,
  LayoutDashboard,
  LayoutList,
  MessageCircle,
  PictureInPicture2,
  Settings,
  Store,
  Ticket,
  Truck,
  User,
  Users,
  Wallet,
  Warehouse
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Catalog",
    path: "/dashboard/attributes",
    icon: <Folder />,
    child: [
      {
        label: "Store Banners",
        path: "/dashboard/banners",
        icon: <PictureInPicture2 />,
      },
      {
        label: "Categories",
        path: "/dashboard/categories",
        icon: <LayoutList />,
      },
      {
        label: "Coupons",
        path: "/dashboard/coupons",
        icon: <Ticket />,
      },
      {
        label: "Products",
        path: "/dashboard/products",
        icon: <Boxes />,
      },
    ],
  },
  {
    label: "Customers",
    path: "/dashboard/customers",
    icon: <Users />,
  },
  {
    label: "Orders",
    path: "/dashboard/orders",
    icon: <Truck />,
  },
  {
    label: "Our Staff",
    path: "/dashboard/staff",
    icon: <User />,
  },
  {
    label: "Community",
    path: "/dashboard/community",
    icon: <MessageCircle />,
  },
  {
    label: "Wallet",
    path: "/dashboard/wallet",
    icon: <Wallet />,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: <Settings />,
  },
  {
    label: "Markets",
    path: "/dashboard/markets",
    icon: <Warehouse />,
  },
  {
    label: "Farmers",
    path: "/dashboard/farmers",
    icon: <Store />,
  },
  {
    label: "Online Store",
    path: "/",
    icon: <ExternalLink />,
  },
];

const Sidebar = ({ openSidebar, onOpenChange }) => {
  const active = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`${
        openSidebar ? "w-48" : "w-0 md:w-20"
      } dark:bg-slate-800 min-h-screen
      drop-shadow-lg bg-slate-100 z-20
    dark:text-slate-50 fixed left-0 transition-all delay-100 mt-20 scroll`}
    >
      <div className="space-y-1 flex flex-col overflow-auto h-[90vh]">
        {navItems.map((nav, i) => {
          if (nav.child) {
            const isParentActive = nav.child.some((childNav) =>
              active.match(childNav.path)
            );
            return (
              <Collapsible
                key={i}
                open={open}
                onOpenChange={() => setOpen((prev) => !prev)}
              >
                <CollapsibleTrigger
                  className={`w-full flex items-center ${
                    openSidebar && "gap-3"
                  } dark:text-gray-400 p-5 border-l-4 border-transparent
                  hover:text-yellow-600 dark:hover:text-green-600 hover:border-l-yellow-600 dark:hover:border-l-green-600
                  hover:bg-white dark:hover:bg-slate-900 mb-1
                  ${
                    isParentActive &&
                    "text-yellow-600 dark:text-green-600 border-l-yellow-600 dark:border-l-green-600 bg-white dark:bg-slate-900"
                  }`}
                  title={nav.label}
                >
                  {nav.icon}
                  {openSidebar && nav.label}
                  {open ? <ChevronDown /> : <ChevronRightIcon />}
                </CollapsibleTrigger>
                {nav.child.map((nav, i) => (
                  <CollapsibleContent
                    key={i}
                    className={`bg-slate-200 dark:bg-slate-900 border-0 mx-2 text-sm`}
                  >
                    <Link
                      onClick={() => {setOpen(false), onOpenChange(false)}}
                      href={nav.path}
                      className={`flex items-center gap-3 dark:text-gray-400 p-3
                      hover:text-yellow-600 dark:hover:text-green-600
                      ${!openSidebar && "justify-center"}
                      ${
                        active.startsWith(nav.path) &&
                        "text-yellow-600 dark:text-green-600"
                      }`}
                      title={nav.label}
                    >
                      {nav.icon} {openSidebar && nav.label}
                    </Link>
                  </CollapsibleContent>
                ))}
              </Collapsible>
            );
          }
          return (
            <Link
              className={`flex items-center gap-3 dark:text-gray-400 p-5 border-l-4 border-transparent
              hover:text-yellow-600 dark:hover:text-green-600 hover:border-l-yellow-600 hover:bg-white
               dark:hover:border-l-green-600 dark:hover:bg-slate-900
              ${
                active === nav.path &&
                "text-yellow-600 dark:text-green-600 border-l-yellow-600 dark:border-l-green-600 bg-white dark:bg-slate-900"
              }`}
              key={i}
              onClick={() => onOpenChange(false)}
              href={nav.path}
              title={nav.label}
            >
              {nav.icon}
              {openSidebar && nav.label}
            </Link>
          );
        })}
        {/* {openSidebar ? (
          <button
            className="fixed bottom-28 px-3 py-2 w-5/6 left-5 text-xl text-white border rounded-3xl
        bg-yellow-600 border-yellow-600 hover:bg-transparent hover:text-yellow-600
        dark:bg-green-600 dark:border-green-600 dark:hover:bg-transparent dark:hover:text-green-600
        flex items-center justify-center gap-3
        "
          >
            <LogOut />
            <p>Logout</p>
          </button>
        ) : (
          <button className="p-4 mx-3 flex justify-center text-white border rounded-full
        bg-yellow-600 border-yellow-600 hover:bg-transparent hover:text-yellow-600
        dark:bg-green-600 dark:border-green-600 dark:hover:bg-transparent dark:hover:text-green-600"> 
            <LogOut />
          </button>
        )} */}
      </div>
    </aside>
  );
};

export default Sidebar;
