import {
  LocationMarkerIcon,
  ClockIcon,
  // CalendarIcon,
} from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";

export default function ActivityCard({ activity }: any) {
  return (
    <div
      key={activity.url}
      className="block rounded-3xl m-1 bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-gradient-to-tl shadow hover:shadow-md"
    >
      <a href={activity.url} className="block rounded-3xl">
        <div className="flex items-center p-2 sm:px-4 rounded-3xl">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              <FontAwesomeIcon
                icon={faSwimmer}
                className="text-4xl mx-2 h-12 w-12 text-slate-200"
              />
            </div>
            <div className="min-w-0 flex-2 px-4 md:grid md:grid-cols-1 md:gap-4">
              <div>
                <p className="text-sm font-medium text-slate-100 truncate">
                  {activity.title}
                </p>
                <p className="mt-2 flex items-center text-sm text-slate-200 truncate">
                  <LocationMarkerIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-slate-200"
                    aria-hidden="true"
                  />
                  <span className="truncate">{activity.locationName}</span>
                </p>
                {/* <p className="mt-2 flex items-center text-sm text-gray-500 truncate">
                  <CalendarIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {activity.dateFormatted}
                </p> */}
                <p className="mt-2 flex items-center text-sm text-slate-200 truncate">
                  <ClockIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-slate-200"
                    aria-hidden="true"
                  />
                  {activity.startTime +
                    " to " +
                    activity.endTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
