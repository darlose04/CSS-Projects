## Workout App

This web application uses HTML, CSS, and JavaScript (and a bit of jQuery for the dropdown menu) to create HTML tables where a user can store workouts and results in spreadsheet form. Information is stored in and retrieved from LocalStorage.

It is currently only styled for mobile (max-width: 480px). 

### Notes: 
* Am going to use the 'Add New Day' button to add new tables containing the exercises and 
results classes. 
*	Also, when I save the table values to local storage, on reloading the page the buttons will 
disappear and will be added to the new tables when the 'Add New Day' button is clicked. This is 
because when I have the same buttons in multiple tables, I can't figure out a way for all of them to 
work for their respective table. Only the first tables buttons work. If I use querySelectorAll it 
creates a NodeList and looping through the buttons with that only makes the last set of buttons 
work. So if I remove the buttons after saving, hopefully they will work with the newly created 
tables.
*	I am also going to try and create new JS files which will refactor the code into OOP, which may help to clean it up some. 

*	Encountered an issue where the js is throwing an error with the code for the exercise and result table buttons... Since the 'Add New Day' button adds the html that the results.js and lifts.js files are dependent upon, there is an error where the js functions are being loaded without the necessary html already loaded on the page.
* To fix this, I think I will need to load the js files when I click the button. Not sure how to do that though. 
* Possibly include the script tags in the innerHTML of the addNewDay div
* Possibly export the functions from the lifts.js and results.js files and have them loaded on the app.js file with some sort of click event. (This won't work because require() does not exist on the client side)
* I figured out a way to make it work: I created two new functions in app.js, then copied all the code from lifts.js and results.js into the functions. Then I called the functions in the newDay button event listener.
* Still need to retrieve the tables from local storage though

* Plenty of problems now: Can save the tables in local storage and retrieve them, but then the saved table values aren't retrieved and displayed. 
* Also, when displaying retrieved tables, I removed the buttons so they would work on a newly added table. This worked, except when adding new rows the rows were added on the previous (original) table. I think removing the classes from the saved tables when displaying them from local storage may fix this.

* want to keep this workout project in this repository, but am going to move the other projects to a new repository. Just so the workout app is by itself with it's commit history. Don't care as much about the commit history of the other projects

* ran into another problem, which may not actually matter. But, if I add new rows after already having saved table content, the muscles group gets replaced by a blank box. I think this is because I'm re-saving the table and not input-ing a new value in the muscle group box (because the input box is removed after reloading).