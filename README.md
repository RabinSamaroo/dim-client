# Active Mississuga Drop-In Schedule

This app is the front-end component to a schedule for the Drop-In Programs at all the City of Mississauga comunity centers. This project was created because it was difficult to check the programs that I went to every day on the (offical schedule)[]. The goal for this project was to create an app that I could check the laneswim times at the pools I go to just by visiting the url. Built with React and Tailwind.

The app is hosted on Google Cloud Platform via Cloud Run

## To run locally

To run the app on http://localhost:7777

```
git clone https://github.com/RabinSamaroo/dim-client.git
cd dim-client
docker build -t dim-client .
docker run -p 7777:7777 dim-client
```
