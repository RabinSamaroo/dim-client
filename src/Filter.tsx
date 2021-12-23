import LocationFilter from "./LocationFilter"

export default function Filter() {
    return (
        <div>
            <div>
                <label htmlFor="filter" className="block text-sm font-medium text-gray-700">
                    Filter
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="filter"
                        id="filter"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Lane Swim, Yoga"
                        aria-describedby="filter-description"
                    />
                </div>
                <p className="mt-2 text-sm text-gray-500" id="email-description">
                    Use commas to filter multiple programs
                </p>
            </div>
            <LocationFilter></LocationFilter>
        </div>
    )
}
