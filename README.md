Personal Citibike Data
======================

Heroku app, built during #betanyc Citibike Hack Night, for scraping CitiBike NYC personal trip data, built on express.js. NOT FOR COMMERCIAL USE. Only for personal use.

You *cannot* use this script to collect, store, or ask for in anyway a Citibike user's password. 

Install should be as easy as:

  git clone git@github.com:yahelc/personal-citibike-data.git && cd personal-citibike-data
  heroku create <appname>
  heroku config:set CITIBIKE_USERNAME=example_username
  heroku config:set CITIBIKE_PASSWORD=example_password
  git push heroku master

