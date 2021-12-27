import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import FilteredScheduleTabs from "./FilteredScheduleTabs";
import LoadingSpinner from "./LoadingSpinner";

export default function FilteredSchedule() {
   const [visibleActivities, setVisibleActivities] = useState([])
   const [allActivities, setAllActivities] = useState({} as any)
   const [viewDate, setViewDate] = useState("")
   const [tabs, setTabs] = useState([])

   useEffect(() => {
      let url = "http://localhost:8081/"
      fetch(url)
         .then(res => res.json())
         .then(resJson => {
            let firstKey = resJson.dates[0]
            setViewDate(firstKey)
            setVisibleActivities(resJson.data[firstKey])
            setAllActivities(resJson.data)
            setTabs(resJson.dates)
         })
   }, [])

   let dateChangedHandler = (source: any) => {
      let newViewDate = source.target.value || source.target.innerHTML
      setViewDate(newViewDate)
      setVisibleActivities(allActivities[newViewDate])
   }

   return (
      <div className="bg-white overflow-hidden">
         {viewDate ? <FilteredScheduleTabs tabs={tabs} viewDate={viewDate} dateChangedHandler={dateChangedHandler}></FilteredScheduleTabs> : <></>}
         <div role="list" className="grid grid-cols-1 sm:grid-cols-2 mt-2">
            {visibleActivities.length ? visibleActivities.map((activity: any) => (
               <ActivityCard activity={activity}></ActivityCard>
            )) : <LoadingSpinner></LoadingSpinner>}
         </div>
      </div>
   );
}
