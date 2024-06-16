"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LayoutDashboard, LogOut, Menu, Settings, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = ({ onOpenChange }) => {
    const { theme } = useTheme();

    const [imgSrc, setImgSrc] = useState("/logolight.png");

    useEffect(() => {
      setImgSrc(theme === "light" ? "/logolight.png" : "/logodark.png");
    }, [theme]);
  return (
    <header
      className={`flex items-center justify-between p-5 drop-shadow-lg bg-slate-100
    dark:bg-slate-800 h-20 fixed top-0 w-full dark:text-green-600`}
    >
      {/* ICONS */}
      <div className="flex items-center">
      <  button
          className="md:order-2"
          onClick={() => onOpenChange((prev) => !prev)}
        >
          <Menu className="ms-2" />
        </button>
        
          <Image
            src={imgSrc}
            alt="DevSS"
            width={100}
            height={100}
            priority={true}
            className={`w-auto pointer-events-none select-none`}
            style={{ aspectRatio: "3/2" }}
          />

      </div>
      {/* 3 ICONS */}
      <div className="flex justify-end gap-3 md:gap-5">
        {/* THEME CHANGER */}
        <ThemeSwitcher />

        {/* NOTIFICATION */}
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <Bell />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-slate-50 bg-red-600 rounded-full -top-2 -start-2">
              6
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-100 dark:bg-slate-700 border-0 dark:text-slate-400 rounded mt-4">
            <DropdownMenuLabel className="dark:text-slate-300 text-md">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-300 dark:bg-slate-900" />
            <DropdownMenuItem className="hover:cursor-pointer p-0">
              <div className="flex items-start justify-between space-x-3 hover:bg-slate-200 dark:hover:bg-slate-600 w-full p-1">
                <Image
                  src={"/profile.jpg"}
                  alt="User Profile"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-lg dark:text-slate-300">Yellow sweet</p>
                  <div className="flex text-xs items-center space-x-2">
                    <p className="rounded-full text-white bg-red-600 px-3 py-0.5">
                      Stock out
                    </p>
                    <p>{Date().slice(0, 24)}</p>
                  </div>
                </div>
                <button className="hover:text-red-900 dark:hover:text-white">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-900" />

            <DropdownMenuItem className="hover:cursor-pointer p-0">
              <div className="flex items-start justify-between space-x-3 hover:bg-slate-200 dark:hover:bg-slate-600 w-full p-1">
                <Image
                  src={"/profile.jpg"}
                  alt="User Profile"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-lg dark:text-slate-300">Yellow sweet</p>
                  <div className="flex text-xs items-center space-x-2">
                    <p className="rounded-full text-white bg-red-600 px-3 py-0.5">
                      Stock out
                    </p>
                    <p>{Date().slice(0, 24)}</p>
                  </div>
                </div>
                <button className="hover:text-red-900 dark:hover:text-white">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-900" />

            <DropdownMenuItem className="hover:cursor-pointer p-0">
              <div className="flex items-start justify-between space-x-3 hover:bg-slate-200 dark:hover:bg-slate-600 w-full p-1">
                <Image
                  src={"/profile.jpg"}
                  alt="User Profile"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-lg dark:text-slate-300">Yellow sweet</p>
                  <div className="flex text-xs items-center space-x-2">
                    <p className="rounded-full text-white bg-red-600 px-3 py-0.5">
                      Stock out
                    </p>
                    <p>{Date().slice(0, 24)}</p>
                  </div>
                </div>
                <button className="hover:text-red-900 dark:hover:text-white">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-900" />

            <DropdownMenuItem className="hover:cursor-pointer p-0">
              <div className="flex items-start justify-between space-x-3 hover:bg-slate-200 dark:hover:bg-slate-600 w-full p-1">
                <Image
                  src={"/profile.jpg"}
                  alt="User Profile"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-lg dark:text-slate-300">Yellow sweet</p>
                  <div className="flex text-xs items-center space-x-2">
                    <p className="rounded-full text-white bg-red-600 px-3 py-0.5">
                      Stock out
                    </p>
                    <p>{Date().slice(0, 24)}</p>
                  </div>
                </div>
                <button className="hover:text-red-900 dark:hover:text-white">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-900" />

            <DropdownMenuItem className="hover:cursor-pointer p-0">
              <div className="flex items-start justify-between space-x-3 hover:bg-slate-200 dark:hover:bg-slate-600 w-full p-1">
                <Image
                  src={"/profile.jpg"}
                  alt="User Profile"
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-lg dark:text-slate-300">Yellow sweet</p>
                  <div className="flex text-xs items-center space-x-2">
                    <p className="rounded-full text-white bg-red-600 px-3 py-0.5">
                      Stock out
                    </p>
                    <p>{Date().slice(0, 24)}</p>
                  </div>
                </div>
                <button className="hover:text-red-900 dark:hover:text-white">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-900" />
          </DropdownMenuContent>
        </DropdownMenu>

        {/* USER */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={"/profile.jpg"}
              alt="User Profile"
              width={100}
              height={100}
              priority={true}
              className="w-10 h-10 rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-100 dark:bg-slate-700 border-0 dark:text-slate-400 rounded w-5/6 mt-4 min-w-44">
            <DropdownMenuLabel className="dark:text-slate-300 text-md">
              User name
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-300 dark:bg-slate-900" />
            <DropdownMenuItem className="p-0">
              <button className="hover:bg-slate-200 dark:hover:bg-slate-800 w-full p-2 flex items-center space-x-1">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <button className="hover:bg-slate-200 dark:hover:bg-slate-800 w-full p-2 flex items-center space-x-1">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <button className="hover:bg-slate-200 dark:hover:bg-slate-800 w-full p-2 flex items-center space-x-1">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
