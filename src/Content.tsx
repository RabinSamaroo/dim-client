import { useState } from "react";

import FilteredSchedule from "./FilteredSchedule";
import Filter from "./Filter";


export default function Content() {
  const [filterText, setFilterText] = useState([""])

  let textFilterChangeHandler = (source: any) => {
    let temp = source.target.value.toLowerCase().split(",").map((text: string) => text.trim())
    if ((temp.length > 1) && (temp[temp.length - 1] === "")) temp.pop()
    setFilterText(temp)
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
                  <Filter filterText={filterText} titleFilterChangeHandler={textFilterChangeHandler}></Filter></div>
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
                  <FilteredSchedule filterText={filterText}></FilteredSchedule>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
