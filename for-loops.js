for (var i = 5; i <= 120; i += 10) {
	console.log(i);
}


for (var i = 4096; i > 1; i /= 2) {
	console.log(i)
}
//---------------------------------------------------------------
// Array iteration

// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

// Example output:

// President #1 was George Washington

// President #2 was John Adams

// President #3 was Thomas Jefferson
//---------------------------------------------------------------

var presidents = [
"George Washington", 
"John Adams",
"Thomas Jefferson",
"James Madison",
"James Monroe",
"John Quincy Adams",
"Andrew Jackson", 
"Martin Van Buren",
"William Henry Harrison",
"John Tyler",
"James Knox Polk",
"Zachary Taylor",
"Millard Fillmore",
"Franklin Pierce",
"James Buchanan",
"Abraham Lincoln",
"Andrew Johnson",
"Ulysses S. Grant",
"Rutherford Birchard Hayes",
"James Abram Garfield",
"Chester Alan Arthur",
"Grover Cleveland",
"Benjamin Harrison",
"Grover Cleveland",
"William McKinley",
"Theodore Roosevelt",
"William Howard Taft",
"Woodrow Wilson",
"Warren Gamaliel Harding",
"Calvin Coolidge",
"Herbert Clark Hoover",
"Franklin Delano Roosevelt",
"Harry S. Truman",
"Dwight David Eisenhower",
"John Fitzgerald Kennedy",
"Lyndon Baines Johnson",
"Richard Milhous Nixon",
"Gerald Rudolph Ford",
"James Earl Carter, Jr.",
"Ronald Wilson Reagan",
"George Herbert Walker Bush",
"William Jefferson Clinton",
"George Walker Bush",
"Barack Hussein Obama",
"Donald Trump"
]



for (var i = 0; i < presidents.length; i++) {
	console.log("President # " + (i + 1) + " was " + presidents[i]);
}


// Object iteration

// You can use another kind of for loop to iterate over objects. 
// Iterate over the object below and use console.log() to output the names of the keys in the object.



var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
	console.log(prop);
}




