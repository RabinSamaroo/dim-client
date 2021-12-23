export default function LocationFilter() {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">
                Locations
            </label>
            <fieldset>
                <legend className="sr-only">Notifications</legend>
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
                            Comments
                        </label>
                        <p id="comments-description" className="text-gray-500">
                            Get notified when someones posts a comment on a posting.
                        </p>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}