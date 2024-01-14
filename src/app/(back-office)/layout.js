"use client"
import Navbar from "@/components/back-office/Navbar";
import Sidebar from "@/components/back-office/Sidebar";
import { useState } from "react";

export default function layout({ children }) {

  const [showSidebar, setSidebar] = useState(false);

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <Sidebar openSidebar={showSidebar} onOpenChange={setSidebar} />
      
      <div className="w-full z-10">
        {/* HEADER */}
        <Navbar onOpenChange={setSidebar} />

        {/* MAIN */}
        <main className={`p-5 dark:bg-slate-900 dark:text-slate-50 h-screen overflow-auto
        pt-24 transition-all delay-150 ${showSidebar ? "md:ms-60" : "ms-0 md:ms-24"}`}>{children}</main>
      </div>
    </div>
  );
}
