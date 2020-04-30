1.How long did you spend on the coding assignment? What would you add to your solution if you had more time? 

I spent about 8 hours coding and 2-3 QAing/writing additional tests, fixing bugs, etc.

If I had time, I woud:
- add more info about the restaurant: picture, hours, link to reserve
- add country to the list of selected cities (in-field)
- refactor/polish my filtering algorithm
- do a onceover and polish code where I can

2.What was the most useful feature that was added to the latest version of your chosen language? 
Please include a snippet of code that shows how you've used it.

```
    restaurantList.filter((restaurant) => {
        // return tablerows here
    })
```

This code has two of the many new and useful features of ES6: arrow functions and Array.filter()
which is one of several useful array helper methods created to use efficient ways to iterate through
and manipulate data. 

3.How would you track down a performance issue in production? Have you ever had to do this?
- check the server logs
- check server dashboard activity to see if anything is awry
- review latest code pushed/deployment pipeline logs
- revert to previous working version, pull latest master, and try to troubleshoot locally

4.How would you improve the API that you just used?
- add more properties to the objects (operation hours, google maps link)
- add a JavaScript client library
- add a sidebar menu

5.Please describe yourself using JSON

```
{
    first_name: "Yael",
    last_name: "Sprikut",
    height: "5'2",
    age: null,
    personality_traits: {[
        "silly",
        "curious",
        "sometimes funny"
    ]},
    hobbies: ['Coding', 'Hanging out with friends', 'Reddit'],
    favourite_food: "SUSHI"
}
```