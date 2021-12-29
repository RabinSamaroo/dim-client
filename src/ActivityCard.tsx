import {
  LocationMarkerIcon,
  ClockIcon,
  // CalendarIcon,
} from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmer, faSwimmingPool, faChild, faDumbbell, faBasketballBall, faSkating, faUserFriends, faWalking } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function colorHelper(type: string) {
  switch (type) {
    case "Swimming": return "from-blue-500 to-cyan-500"
    case "Water Exercise": return "from-violet-500 to-blue-500"
    case "Fitness": return "from-green-500 to-yellow-500"
    case "Sports": return "from-cyan-500 to-emerald-500"
    case "Therapeutic": return "from-pink-500 to-purple-500"
    case "Social Activites": return "from-red-500 to-pink-500"
    case "Skating & Hockey": return "from-cyan-500 to-emerald-500"


    default: return "from-yellow-500 to-orange-500"
  }
}

function iconHelper(type: string) {
  switch (type) {
    case "Swimming": return faSwimmer
    case "Water Exercise": return faSwimmingPool
    case "Fitness": return faDumbbell
    case "Sports": return faBasketballBall
    case "Therapeutic": return faWalking
    case "Social Activites": return faUserFriends
    case "Skating & Hockey": return faSkating

    default: return faChild
  }
}

export default function ActivityCard({ activity }: any) {
  return (
    <div
      key={activity.url}
      className={classNames(colorHelper(activity.programType), "block rounded-3xl m-1 bg-gradient-to-br hover:bg-gradient-to-tl shadow hover:shadow-md")}
    >
      <a href={activity.url} className="block rounded-3xl">
        <div className="flex items-center p-2 sm:px-4 rounded-3xl">
          <div className="flex-1 flex items-center">
            <div className="min-w-0 flex-shrink-0 h-12 w-14 flex items-center">
              <FontAwesomeIcon
                icon={iconHelper(activity.programType)}
                className="text-4xl h-12 w-14 text-slate-200 flex-1"
              />
            </div>
            <div className="min-w-0 flex-2 px-4 grid grid-cols-1 gap-1">
              <p className="text-sm font-medium text-slate-100 truncate">
                {activity.title}
              </p>
              <p className="flex items-center text-sm text-slate-200 truncate">
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
              <p className="flex items-center text-sm text-slate-200 truncate">
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
      </a>
    </div>
  );
}
