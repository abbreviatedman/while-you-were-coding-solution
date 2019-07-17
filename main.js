console.log('Challenge #1');

// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.

let counter = 1;
while (counter <= 20) {
  if (counter % 3 === 0) {
    console.log(counter);
  }

  counter = counter + 1;
}


console.log('Challenge #2');

// Same problem as #1, but no `if`s, `mods`, or `but`s (and no, that last one is
// not a thing). If you did it right, you should run the loop 6 times with 1
// console log per loop. That's called... a clue!

counter = 3;
while(counter <= 20) {
  console.log(counter);

  counter = counter + 3;
}


console.log('Challenge #3');

// Console out the numbers from 1-20. BACKWARDS.

// (And, optionally, in heels.)

// (That's a reference that only Olds make, and only if they're SUPER CULTURED.)

// (No extra credit will be given for wearing heels during this challenge.)

counter = 20;
while (counter >= 1) {
  console.log(counter);
  counter = counter - 1;
}


console.log('Challenge #4');

// For the string 'Boy howdy am I good at this!', console out the letters
// individually.

let str = 'Boy howdy am I good at this!';
let i = 0;

while (i < str.length) {
  console.log(str[i]);
  i = i + 1;
}


console.log('Challenge #5');

// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.

str = 'And getting better every day.';
i = 1;

while (i < str.length) {
  console.log(str[i]);
  i = i + 3;
}


console.log('Challenge #6');

// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.

str = 'Am I the best?';
i = 0;

while (i < str.length) {
  console.log(str[i].toUpperCase());
  i = i + 1;
}


console.log('Challenge #7');

// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.

str = 'Whoa, I am the best!';
i = 0;
let spaces = 0;

while (i < str.length) {
  const current = str[i];
  if (current === ' ') {
    spaces = spaces + 1;
  }

  if (spaces === 2) {
    console.log(current.toUpperCase());
  } else {
    console.log(current);
  }

  i = i + 1;
}


console.log('Challenge #8');


// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.

str = 'I am become death, destroyer of worlds.';
i = str.length - 1;

while (i >= 0) {
  console.log(str[i]);
  i = i - 1;
}

console.log('Challenge #9');

const names = 'Colin|Mesuara|Drew|In Seop|Emma|Ben|J|Ryan|Olgy|Mike|Chris|John';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!

i = 0;
while (i < names.length) {
  if (names[i] === '|') {
    console.log('Here today is:');
  } else {
    console.log(names[i])
  }

  i = i + 1;
}