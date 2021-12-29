export default function FilterText({ value, titleFilterChangeHandler }: any) {
    return (
        <div>
            <label htmlFor="filter" className="block text-sm font-medium text-slate-100">
                Filter
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name="filter"
                    id="filter"
                    className="shadow-sm bg-slate-700 border-0 text-slate-100 placeholder-slate-400 focus:ring-slate-400 block w-full sm:text-sm rounded-md"
                    placeholder="Lane Swim, Yoga"
                    aria-describedby="filter-description"
                    value={value}
                    onChange={titleFilterChangeHandler}
                />
            </div>
            <p className="mt-2 text-sm text-slate-300" id="email-description">
                Use commas to filter multiple programs
            </p>
        </div>
    )
}
