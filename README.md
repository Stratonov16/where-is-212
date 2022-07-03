
# Where-is-212
https://where-is-212.glitch.me/ <br> <br>
Application that tracks Bus 212 location using google maps geolocation api and directions api to calculated estimated time of arrival. Made using Js, node, express, axios and similar libraries as a part of Postman hackathon <br><br>
On the front-end,

- Edit `public/index.html` to change the content of the webpage
- `public/client.js` is the javacript that runs when you load the webpage
- `public/style.css` is the styles for `public/index.html`
- Drag in `assets`, like images or music, to add them to your project

On the back-end,

- your app starts at `server.js`
- add frameworks and packages in `package.json`

## Project description:


### Problem:

As many of us know that our campus BITS Pilani Hyderabad Campus is very far away from the city. For students and staff, the only economical and viable way to travel from and to the city and campus is Bus number 212 which runs almost every hour to and fro to the campus.
The problem is that the bus timings are not accurate and sometimes a person traveling has to wait for maybe an hour at the gate if the last bus went was a few minutes back and wait for the next bus.
To resolve the issue there is a need for a system that can accurately tell what is the expected time of arrival of the next bus so that person can plan their journey accordingly. 

### Idea:

Our team came up with the idea of showing the real-time location of Bus 212 so that users can see where exactly is the bus at that time and how much time it will take to reach Campus or Secunderabad Junction depending on whether it is arriving or departing.


### Implementation:

The challenge that we had was how to accurately get the location of bus, without spending of some tracker device on bus.
What we came up is to get the location of bus, we will ask users who are already traveling in the bus to share their location. We will use Google Maps geolocation API to get the coordinates of all these users and by calculating mean coordinates we will get the coordinates of the bus. Using google directions API we can the estimated time of distance and time it will take to reach campus.
Estimated time of arrival will be = Current Time + Estimated time to reach.

### Practicality:

The goal of our team was to solve a real-world problem that can make the life of people easier. From our above project, we would impact at least 4000 students and staff on our campus. As the number of users will increase, more number of users will share their location, we will get more accurate coordinates of bus. The incentive for users to share their location is that next time if they want to travel, they can see when the bus is coming and therefore it will be helpful for them as well.
Postman:
We used postman to test our API: 


### Future Plans:

We only showed the demo of our app, with a working API key but there are some things that are yet needed to be taken care of. For calculating the coordinates of the bus we are using the average coordinates method, which may not be accurate if some of the users are sharing a very distant location. Our plan was to use a more accurate method like Density-based Clustering but it was a little difficult to implement during this time period. Also, we are thinking to use Matrix API such that for each intermediate stop we will put some time duration which bus takes in the boarding of passengers. This was also a little time-consuming to implement at this stage so we thought to implement it in the future.
Currently, we are limited only to our campus Bus 212, We can expand our application for other buses in Hyderabad or Telangana. 
### Tech Stack used 

Html, CSS, JS.
Node, Express.
Google maps API(Direction, Javascript)
Glitch to manage codebase and host.

