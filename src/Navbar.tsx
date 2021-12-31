import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import { SearchIcon } from "@heroicons/react/solid";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
let item = {
  name: "Home",
  href: "#",
  current: false
}

export default function Navbar() {
  return (<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    < div className="flex items-center grid">
      <div className="p-4 my-2 rounded-xl">
        <nav className="flex space-x-4">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>

          <div className="flex flex-1 items-center">
            <span className="text-slate-100 text-lg font-bold">Active Mississauga Drop-In Schedule</span>
          </div>
          <button
            key="Help"
            className="text-slate-300 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10 justify:end"
          >
            Help
          </button>
        </nav>
      </div >
    </div >
  </div>
  );
}
