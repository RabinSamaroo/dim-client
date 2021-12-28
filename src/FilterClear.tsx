export default function FilterClear({ filterClearHandler }: any) {
    return (
        <button
            type="button"
            className="inline-flex items-center mt-4 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={filterClearHandler}
        >Clear Filter</button>
    )
}
