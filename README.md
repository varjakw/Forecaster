# Forecaster WebApp
Assignment 1 for Internet Applications module. Written in Vue.

You are asked to produce an application that inputs the city that someone is planning
to go to. Your server-side should use the openweathermap API to get the weather
forecast for that city for the next 4 days. The client side should then display some
summary information including:
- Packing: if there is rain anytime over the next 4-days indicate that the user should
bring an umbrella.
- Indicate the type of whether that the user should pack for Cold (temperatures below
12C), Mild (temperatures from 12C to 24C inclusive) or Hot (temperatures above
24C).
- Give a summary table for the next 4 days showing: Temperature, Wind Speed and
Rainfall level

When you request the weather data for a city, it will return you the Longitude and
Latitude of the city. You can then use these in the AIR Pollution API to get the PM2_5 forecast for the next 5 days. If this exceeds 10, then you should advise the user to wear a mask.

## Reactive Frameworks
Dependencies update automatically.
- Variables within JavaScript are ‘linked’ to variables within the HTML
document
- Simply updating the value of a JavaScript variable will cause the
‘linked’ HTML variables to ‘React’ or automatically update

Vue automatically tracks JavaScript state changes
- efficiently updates the DOM using a virtual DOM

## Restful APIs

Representational State Transfer APIs.

- Server doesn't maintain state information for every client. Therefore it's stateless in the client-server architecture
- Servers can extend client functionality by download

## Moustache Syntax

The HTML uses {{ Syntax }}
- Moustache syntax
- which allows variable
values to be picked up
from JavaScript

## V-Directives
- Directives control HTML layout. Alter shape of DOM by adding elements.
- Vue has its own directives for things like changing the contents of text elements.

# How to Use OpenWeatherMap API (from their website)

How to make an API call

## OpenWeatherMap API call
```https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}```

## Parameters
- lat, lon
  - Geographical coordinates (latitude, longitude). If you need the geocoder to automatic convert city names and zip-codes to geo coordinates and the other way around, please use our Geocoding API.
- appid 
  - Your unique API key (you can always find it on your account page under the "API key" tab)
- exclude Optional parameter. By using this parameter you can exclude some parts of the weather data from the API response. It should be a comma-delimited list (without spaces).
  - Available values: 
    - current
    - minutely
    - hourly
    - daily
    - alerts
- units. Optional. Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more
- lang. Optional. You can use the lang parameter to get the output in your language.

You can see parameter units here:
https://openweathermap.org/api/one-call-3#parameter

## Geocoding API
Used to convert user's inputted city into the latitude and longitude values used in the OpenWeatherMap API call.

```http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}```

Take ```lat``` and ```lon``` fields from the response and use those in the forecast call.

# Note

Does not work with Firefox. Use Chrome.

# Running

``cd forecaster``
``node script.js``
Then ``http://localhost:3000`` in browser
