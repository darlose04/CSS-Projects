## Workout App

This web application uses HTML, CSS, and JavaScript (and a bit of jQuery for the dropdown menu) to create HTML tables where a user can store workouts and results in spreadsheet form. Information is stored in and retrieved from LocalStorage.

It is currently only styled for mobile (max-width: 480px). 

Notes: 
	Am going to use the 'Add New Day' button to add new tables containing the exercises and 
results classes. 
	Also, when I save the table values to local storage, on reloading the page the buttons will 
disappear and will be added to the new tables when the 'Add New Day' button is clicked. This is 
because when I have the same buttons in multiple tables, I can't figure out a way for all of them to 
work for their respective table. Only the first tables buttons work. If I use querySelectorAll it 
creates a NodeList and looping through the buttons with that only makes the last set of buttons 
work. So if I remove the buttons after saving, hopefully they will work with the newly created 
tables.
	I am also going to try and create new JS files which will refactor the code into OOP, which may help to clean it up some. 