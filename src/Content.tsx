import { useState } from "react";

import FilteredSchedule from "./FilteredSchedule";
import LocationFilter from "./LocationFilter";
import TextFilter from "./TextFilter";


export default function Content() {
  const [filterText, setFilterText] = useState([""])
  const [filterLocations, setFilterLocations] = useState([] as any)

  let titleFilterChangeHandler = (source: any) => {
    let temp = source.target.value.toLowerCase().split(",").map((text: string) => text.trim())
    if ((temp.length > 1) && (temp[temp.length - 1] === "")) temp.pop()
    setFilterText(temp)
  }

  let locationFilterChangeHandler = (source: any) => {
    if (filterLocations.includes(source.target.id)) {
      let temp: any = filterLocations
      temp.splice(temp.indexOf(source.target.id), 1)
      setFilterLocations([...temp])
    }
    else {
      setFilterLocations([...filterLocations, source.target.id])
    }
  }

  return (
    <main className="-mt-24 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Page title</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-1-title">
              <h2 className="sr-only" id="section-1-title">
                Section title
              </h2>
              <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="p-6">{/* Your content */}
                  <TextFilter value={filterText} titleFilterChangeHandler={titleFilterChangeHandler}></TextFilter>
                  <LocationFilter filterLocations={filterLocations} locationFilterChangeHandler={locationFilterChangeHandler}></LocationFilter>
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-2-title">
              <h2 className="sr-only" id="section-2-title">
                Section title
              </h2>
              <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="p-6">
                  {/* Your content */}
                  <FilteredSchedule filterLocations={filterLocations} filterText={filterText}></FilteredSchedule>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
