Personal Citibike Data
======================

Heroku app, built during #betanyc Citibike Hack Night, for scraping CitiBike NYC personal trip data, built on express.js. NOT FOR COMMERCIAL USE. Only for personal use.

You *cannot* use this script to collect, store, or ask for in anyway a Citibike user's password. The only acceptable use of this application is for personal use. 

This project is licensed under Attribution-NonCommercial 3.0. 

Install should be as easy as:

    git clone git@github.com:yahelc/personal-citibike-data.git && cd personal-citibike-data
    heroku create <appname>
    heroku config:set CITIBIKE_USERNAME=example_username
    heroku config:set CITIBIKE_PASSWORD=example_password
    git push heroku master


Sample Output
===============

    [
    {
      "trip": "43617",
      "start_station": "Fulton St & Clermont Ave",
      "start_date": "5/28/13",
      "end_station": "Broadway & E 22 St",
      "end_date": "5/28/13",
      "duration": "52m 14s",
      "distance_miles": "0"
    },
    {
      "trip": "699783",
      "start_station": "Lispenard St & Broadway",
      "start_date": "6/26/13",
      "end_station": "Washington Pl & 6 Ave",
      "end_date": "6/26/13",
      "duration": "8m 30s",
      "distance_miles": "0"
    }
    ]
