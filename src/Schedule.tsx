import ActivityCard from "./ActivityCard";

export default function Schedule({ activities }: any) {

   return (
      <div className="bg-white overflow-hidden">
         <div role="list" className="grid grid-cols-1 sm:grid-cols-2">
            {activities.map((activity: any) => (
               <ActivityCard activity={activity}></ActivityCard>
            ))}
         </div>
      </div>
   );
}
