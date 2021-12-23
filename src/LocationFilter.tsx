const locations = [{ "locationName": "Huron Park CC", "locationAddress": "830 Paisley Mississauga ON L5C 3P5" }, { "locationName": "Frank McKechnie CC and Library", "locationAddress": "310 Bristol Mississauga ON L4Z 3V5" }, { "locationName": "River Grove CC", "locationAddress": "5800 River Grove Mississauga ON L5M 4R9" }, { "locationName": "Meadowvale CC and Library", "locationAddress": "6655 Glen Erin Mississauga ON L5N 3L4" }, { "locationName": "Mississauga Valley CC and Library", "locationAddress": "1275 Mississauga Valley Mississauga ON L5A 3R8" }, { "locationName": "Clarkson CC and Library", "locationAddress": "2475 Truscott Mississauga ON L5J 2B3" }, { "locationName": "Churchill Meadows CC", "locationAddress": "5320 Ninth Line Mississauga ON L5M 0R5" }, { "locationName": "South Common CC and Library", "locationAddress": "2233 South Millway Mississauga ON L5L 3H7" }, { "locationName": "Mississauga Seniors' Centre", "locationAddress": "1389 Cawthra Mississauga ON L5G 4L1" }, { "locationName": "Erin Mills Twin Arena", "locationAddress": "3205 Unity Mississauga ON L5L 4L5" }, { "locationName": "Iceland Mississauga", "locationAddress": "705 Matheson Mississauga ON L4Z 3X9" }, { "locationName": "Malton CC and Library", "locationAddress": "3540 Morning Star Mississauga ON L4T 1Y2" }, { "locationName": "Meadowvale 4 Rinks", "locationAddress": "2160 Torquay Mississauga ON L5N 2M6" }, { "locationName": "Carmen Corbasson CC", "locationAddress": "1399 Cawthra Mississauga ON L5G 4L1" }, { "locationName": "Cawthra Park Secondary School Pool", "locationAddress": "1305 Cawthra Mississauga ON L5G 4L1" }, { "locationName": "Erin Meadows CC and Library", "locationAddress": "2800 Erin Centre Mississauga ON L5M 6R5" }, { "locationName": "Glenforest Secondary School Pool", "locationAddress": "3575 Fieldgate Mississauga ON L4X 2J6" }]
export default function LocationFilter() {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">
                Locations
            </label>
            <fieldset>
                {locations.map((location) =>
                    <div key={location.locationName}>
                        <legend className="sr-only">{location.locationName}</legend>
                        <div className="relative flex items-start mt-1">
                            <div className="flex items-center h-5">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="comments" className="font-medium text-gray-700">
                                    {location.locationName}
                                </label>
                                <p id={location.locationName} className="text-gray-500">
                                    {location.locationAddress}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </fieldset>
        </div>
    )
}