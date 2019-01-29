## Workout App

This web application uses HTML, CSS, and JavaScript (and a bit of jQuery for the dropdown menu) to create HTML tables where a user can store workouts and results in spreadsheet form. Information is stored in and retrieved from LocalStorage.

It is currently only styled for mobile (max-width: 480px). 

### Steps of how I think the app should work

1. Add New Day: clicking the 'Add New Day' button will create two new tables; one for the muscle group and lifts (lift name, number of sets, and number of reps); the other for the date and results (weight, sets, reps). (This is done so far)

2. Adding rows to the tables and then inputing data into the rows. (this is working)

3. Saving the data from the spreadsheets to local storage (this is working)

4. Saving the days to local storage. (the days are being saved, but am having trouble reloading the data within the tables)

5. Reloading the page and having the tables show up with the proper information within them. (this is not working). Sort of explained in above point.

6. Adding a new day and having everything work the same way, only with new tables and data. Repeat this process as needed. (obviously this is not working properly)

### Notes: 
* So far I am able to add a new day which adds two tables, the exercises table and the results table. I am also able to save the days to local storage and then retrieve them when the page reloads.

* I can add new rows to a newly added table. When the day is saved and the page is reloaded, I am able to add a new day and repeat the process to add rows to the new table. 

* I can save the table inputs to local storage. A caveat: on the third attempt to save the muscle group description and the date, only an empty string gets saved to local storage. **No idea why this is happening.**  There is no issue of empty strings being added when saving input data from the tbody of the table (this refers to the exercises, sets, reps, weight sets, reps). There is also no issue when adding more than two days to local storage. Only the muscle group and date inputs have trouble with adding empty strings. 

* When reloading the page after saving the input information as well as saving the day to local storage, there are some issues: 
  1. For the first day, there is no problem getting the muscle group description and date to display upon reloading the page. But when attempting to do this with a second day, the information does not display. The day table itself shows up, but the muscle group description and date fields are still inputs rather than just text in a box like the first day's display. I think I need to figure out some way to loop through the local storage array in order for this to display properly. It may also need a change to the html code (class names?) so that the JS isn't referencing the wrong elements.

  2. The input from the actual tbody rows just doesn't show up. I haven't looked too much into this yet though. I'm thinking I'll have to loop through each set of three values (since there are three columns) and append them to the tbody element. I did this successfully before with an earlier version of the app, but I will need to rework the code for it to work with the new/save day functions.

* I am going to try and start over with the Javascript functional aspects with the bootstrap version. Starting from scratch may help me figure out the issues.