import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoadingSpinner() {
    return (
        <div className="flex items-stretch m-10">
            <FontAwesomeIcon
                icon={faSpinner}
                className="animate-spin text-4xl h-12 w-14 text-slate-200 flex-grow"
            />
        </div>
    )
}
