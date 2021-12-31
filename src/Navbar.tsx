import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    < div className="flex items-center grid">
      <div className="p-4 my-2 rounded-xl">
        <nav className="flex space-x-4">
          <div className="flex-shrink-0 flex items-center">
            <div className="min-w-0 flex-shrink-0 h-12 w-14 flex items-center -scale-x-100">
              <FontAwesomeIcon
                icon={faSwimmer}
                className="text-4xl h-12 w-14 text-slate-200 flex-1"
              />
            </div>
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
