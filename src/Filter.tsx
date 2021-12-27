import LocationFilter from "./LocationFilter"
import TextFilter from "./TextFilter"

export default function Filter({ filterText, titleFilterChangeHandler }: any) {
    return (
        <div>
            <TextFilter value={filterText} titleFilterChangeHandler={titleFilterChangeHandler}></TextFilter>
            <LocationFilter></LocationFilter>
        </div>
    )
}
