import LocationFilter from "./LocationFilter"
import TextFilter from "./TextFilter"

export default function Filter({ titleFilterChangeHandler }: any) {
    return (
        <div>
            <TextFilter titleFilterChangeHandler={titleFilterChangeHandler}></TextFilter>
            <LocationFilter></LocationFilter>
        </div>
    )
}
