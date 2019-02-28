const boxIDs = require("./Inputs/boxIDs.js")

var commonLetters;

// MAINLOOP
// MAINLOOP
firstLoop:
  for (var i = 0; i < boxIDs.length; i++) {
    const boxOneID = boxIDs[i];
    secondLoop:
      for (var j = i + 1; j < boxIDs.length; j++) {
        const boxTwoID = boxIDs[j];
        commonLetters = matchButOne(boxOneID, boxTwoID);
        if (commonLetters) {
          break firstLoop;

        }
        else continue secondLoop;
      }
  }

// compares two strings and returns a string of common letters between the two correct box IDs, BUT only if the two strings only have 1 non commopn pair of letters.
function matchButOne(boxOneID, boxTwoID) {
  let diffs = 0;
  let diffIndex = 0;
  for (var i = 0; (i < boxOneID.length) && (diffs < 2); i++;) { //For Each letter compare. STOP at end or if 2 differences have been found
    if (boxOneID[i] !== boxTwoID[i]) {
      diffs++;
      diffIndex = i; //record where the difference happened
    }
  }
  var result = boxOneID.split('');
  result.splice(diffIndex, 1);
  boxOneID = result.join('');
  return diffs === 1 ? boxOneID : null;
}

// RESUILT
// RESUILT
console.log(commonLetters);
/*
 Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)
*/
