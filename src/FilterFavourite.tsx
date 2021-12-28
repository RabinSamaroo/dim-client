import { HeartIcon } from "@heroicons/react/solid";

export default function FilterFavourite({ favouriteHandler }: any) {
    return (
        <div className="flex justify-end">
            <button
                type="button"
                className="inline-flex items-center mt-4 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={favouriteHandler}
            >
                Favourite Filter
                <HeartIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
            </button>
        </div>
    )
}
