import React from "react";
import { TbHomeHeart } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa6";

import { Link } from "react-router-dom";

const SideBar = () => {
  const SidebarList = [
    {
      name: "Home",
      icon: TbHomeHeart,
      path: "/",
    },

    {
      name: "Discover",
      icon: FaRegCompass,
      path: "/discover",
    },
  ];
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-20 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            {
              SidebarList.map((sidebar,idx)=>(
                <li key={idx}>
                <Link
                  to = {sidebar.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                 <sidebar.icon 
                  className="text-white h-8 w-8 group-hover:text-black"/>

                </Link>
              </li>
              ))
            }
            
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
