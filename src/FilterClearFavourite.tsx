import { XIcon } from "@heroicons/react/solid";

export default function FilterFavourite({ favouriteClearHandler }: any) {
    return (
        <button
            type="button"
            className="inline-flex items-center mt-4 px-1 py-2 border-l-2 border-slate-800 shadow-sm text-sm leading-4 font-medium rounded-r-md text-white bg-gradient-to-bl from-orange-500 to-red-500 hover:from-yellow-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-200"
            onClick={favouriteClearHandler}
        >
            <XIcon className="h-4 w-4" aria-hidden="true" />
        </button>
    )
}
