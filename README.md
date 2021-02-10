# Prize-Picker
Name Picker for Raffle

[Click Here](https://www.curthouse.com/Prize-Picker) for a live demo.
#
#### This app was created for my wife.  She has a business where she will often give away items to her customers.  She was conducting her raffles by writing down each persons name on a small piece of paper.  Each person could have multiple entries so she was writing out a lot of names most times.
#### I decided to create an app that allowed her to enter a customers name and number of entries and it would put each name in an array for each number of entries.  If Mary had 5 entries, Mary would be put into the array 5 times.  Also, she wanted each person to visibly see how many entries they had so I aded a small area that shows the name and number of entries each time a name is added.
#### Once all of the names are added to the array, she can click "Select Winner!" and it will randomly select an index from within the array and present it on the other side of the present card at the bottom.  She can then simply hover over the present to reveal the winning name in a dramatic fashion!

## Challenges
#### This was early on in my learning and was very challenging.
- Showing the names in the name area so that they would like up and not flow over the space provided.
- Add each name into the array based upon the number of entries.
- Creating the random number generator and having it pull the name from the array based on the index of that number and then attaching it to the card to show.

## What I learned
- Learned how arrays work and how to create multiple entries based on one input value.
- Creating a random number generator that falls between the number of entries so a larger value is not generated thus returning an error.
- Pulling that value out of the array after the RNG selects a number and attaching it to the spinning card.
#### Considering this was early in my journey of learning JavaScript, I learned a lot about array manipulation and pulling values out of that array.  This is a simple application but was extremely fulfilling for me because I was able to learn and understand arrays more clearly.

## Updates Planned
- [ ] Randomizing the location of each name within the array prior to the RNG picking a name
- [ ] Adding a clear button to clear the form without having to refresh the page
