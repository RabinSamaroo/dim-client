import {
  LocationMarkerIcon,
  ClockIcon,
  CashIcon,
} from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";

export default function ActivityCard({ activity }: any) {
  return (
    <div
      key={activity.ProgramId}
      className="block  rounded-full border-indigo-100 border-2 mb-2 hover:bg-gray-50 hover:border-indigo-200"
    >
      <a
        href={activity.Barcode}
        className="block hover:bg-gray-50 rounded-full"
      >
        <div className="flex items-center px-4 py-4 sm:px-6 rounded-full">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              {/* <img
                      className="h-12 w-12 rounded-full"
                      src={activity.LocationAddress}
                      alt=""
                    /> */}

              <FontAwesomeIcon
                icon={faSwimmer}
                className="text-6xl mx-2 h-12 w-12 text-indigo-500"
              ></FontAwesomeIcon>
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-indigo-600 truncate">
                  {activity.Title}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <LocationMarkerIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="truncate">{activity.LocationName}</span>
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <ClockIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {activity.FriendlyStartDate +
                    " to " +
                    activity.FriendlyEndDate}
                </p>
              </div>
              <div className="flex-1">
                <div>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <CashIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {activity.Amount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
