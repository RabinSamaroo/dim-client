export default function FilterClear({ filterClearHandler }: any) {
    return (
        <button
            type="button"
            className="inline-flex items-center mt-4 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-slate-300 bg-slate-800 hover:bg-slate-600 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-200"
            onClick={filterClearHandler}
        >Clear Filter</button>
    )
}
