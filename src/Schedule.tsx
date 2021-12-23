/* This example requires Tailwind CSS v2.0+ */
import ActivityCard from "./ActivityCard";

const activities = [
 {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T07:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"7:00 AM",
         "endTime":"7:45 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075743",
         "locationName":"River Grove CC",
         "locationAddress":"5800 River Grove Mississauga ON L5M 4R9"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T07:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"7:00 AM",
         "endTime":"7:45 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075547",
         "locationName":"Huron Park CC",
         "locationAddress":"830 Paisley Mississauga ON L5C 3P5"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T07:15:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"7:15 AM",
         "endTime":"8:00 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075386",
         "locationName":"Clarkson CC and Library",
         "locationAddress":"2475 Truscott Mississauga ON L5J 2B3"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T07:45:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"7:45 AM",
         "endTime":"8:30 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075549",
         "locationName":"Huron Park CC",
         "locationAddress":"830 Paisley Mississauga ON L5C 3P5"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T07:45:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"7:45 AM",
         "endTime":"8:30 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075744",
         "locationName":"River Grove CC",
         "locationAddress":"5800 River Grove Mississauga ON L5M 4R9"
      },
      {
         "title":"Adult Leisure Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:00 AM",
         "endTime":"8:45 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075412",
         "locationName":"Clarkson CC and Library",
         "locationAddress":"2475 Truscott Mississauga ON L5J 2B3"
      },
      {
         "title":"Adult Leisure Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"1 hour",
         "startTime":"8:00 AM",
         "endTime":"9:00 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075581",
         "locationName":"Huron Park CC",
         "locationAddress":"830 Paisley Mississauga ON L5C 3P5"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:00 AM",
         "endTime":"8:45 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075387",
         "locationName":"Clarkson CC and Library",
         "locationAddress":"2475 Truscott Mississauga ON L5J 2B3"
      },
      {
         "title":"Adult Leisure Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:00 AM",
         "endTime":"8:45 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075717",
         "locationName":"Meadowvale CC and Library",
         "locationAddress":"6655 Glen Erin Mississauga ON L5N 3L4"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:00 AM",
         "endTime":"8:45 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075964",
         "locationName":"Meadowvale CC and Library",
         "locationAddress":"6655 Glen Erin Mississauga ON L5N 3L4"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"1 hour and 30 minutes",
         "startTime":"8:00 AM",
         "endTime":"9:30 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075678",
         "locationName":"Cawthra Park Secondary School Pool",
         "locationAddress":"1305 Cawthra Mississauga ON L5G 4L1"
      },
      {
         "title":"Drop In Aquafitness &#8776",
         "programType":"Water Exercise",
         "date":"2021-12-19T08:30:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:30 AM",
         "endTime":"9:15 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075805",
         "locationName":"River Grove CC",
         "locationAddress":"5800 River Grove Mississauga ON L5M 4R9"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:30:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:30 AM",
         "endTime":"9:15 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075552",
         "locationName":"Huron Park CC",
         "locationAddress":"830 Paisley Mississauga ON L5C 3P5"
      },
      {
         "title":"2021 Drop In Badminton",
         "programType":"Sports",
         "date":"2021-12-19T08:30:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"2 hour",
         "startTime":"8:30 AM",
         "endTime":"10:30 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1080008",
         "locationName":"Frank McKechnie CC and Library",
         "locationAddress":"310 Bristol Mississauga ON L4Z 3V5"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:30:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:30 AM",
         "endTime":"9:15 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075745",
         "locationName":"River Grove CC",
         "locationAddress":"5800 River Grove Mississauga ON L5M 4R9"
      },
      {
         "title":"Drop In Cycle And Tone",
         "programType":"Fitness",
         "date":"2021-12-19T08:30:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"1 hour",
         "startTime":"8:30 AM",
         "endTime":"9:30 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075488",
         "locationName":"Erin Meadows CC and Library",
         "locationAddress":"2800 Erin Centre Mississauga ON L5M 6R5"
      },
      {
         "title":"Drop In Boot Camp",
         "programType":"Fitness",
         "date":"2021-12-19T08:30:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"1 hour",
         "startTime":"8:30 AM",
         "endTime":"9:30 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075496",
         "locationName":"Churchill Meadows CC",
         "locationAddress":"5320 Ninth Line Mississauga ON L5M 0R5"
      },
      {
         "title":"Drop In Cycle Workout",
         "programType":"Fitness",
         "date":"2021-12-19T08:45:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"1 hour",
         "startTime":"8:45 AM",
         "endTime":"9:45 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1074999",
         "locationName":"Mississauga Valley CC and Library",
         "locationAddress":"1275 Mississauga Valley Mississauga ON L5A 3R8"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:45:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:45 AM",
         "endTime":"9:30 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075965",
         "locationName":"Meadowvale CC and Library",
         "locationAddress":"6655 Glen Erin Mississauga ON L5N 3L4"
      },
      {
         "title":"Adult Leisure Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T08:45:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"8:45 AM",
         "endTime":"9:30 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075718",
         "locationName":"Meadowvale CC and Library",
         "locationAddress":"6655 Glen Erin Mississauga ON L5N 3L4"
      },
      {
         "title":"Drop In Yoga",
         "programType":"Fitness",
         "date":"2021-12-19T09:00:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"1 hour",
         "startTime":"9:00 AM",
         "endTime":"10:00 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075254",
         "locationName":"River Grove CC",
         "locationAddress":"5800 River Grove Mississauga ON L5M 4R9"
      },
      {
         "title":"Drop In Total Body Toning",
         "programType":"Fitness",
         "date":"2021-12-19T09:15:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"1 hour",
         "startTime":"9:15 AM",
         "endTime":"10:15 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075261",
         "locationName":"South Common CC and Library",
         "locationAddress":"2233 South Millway Mississauga ON L5L 3H7"
      },
      {
         "title":"Lane Swim &#8776",
         "programType":"Swimming",
         "date":"2021-12-19T09:15:00",
         "dateFormatted":"Sunday, December 19",
         "duration":"45 minutes",
         "startTime":"9:15 AM",
         "endTime":"10:00 AM",
         "url":"https://www1.city.mississauga.on.ca/connect2rec/Activities/ActivitiesCourseDetails.asp?cid=1075746",
         "locationName":"River Grove CC",
         "locationAddress":"5800 River Grove Mississauga ON L5M 4R9"
      },
    ]




export default function Schedule() {
  return (
    <div className="bg-white overflow-hidden">
      <div role="list" className="grid grid-cols-1 sm:grid-cols-2">
        {activities.map((activity) => (
          <ActivityCard activity={activity}></ActivityCard>
        ))}
      </div>
    </div>
  );
}
