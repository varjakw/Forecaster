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

## Moustache Syntax

## V-Directives
