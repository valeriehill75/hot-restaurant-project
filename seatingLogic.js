//HAWT Dawna
//10 booths which seat 6
//10 tables in the Resteraunt each table seats 4.

// variables [MaxTables and TOTAL Tables RESERVED]
const maxTables = 10;
let ttr = [];
//arrays for total tables available should not

//the length of the tsr should not be greater than maxTables and IF then move party name to waiting list.

//there is no max to the waiting list.

// if we combine a table to seat 8 we now have 9 tables but same amount(40) people allowed + 60 ppl booths
//allowing 100 guests

//if all seats are taken then inject "partyName" and "partySize"
// If party size is greater than 5, subtract 2 tables.

function reserveSeating() {
    //if reserving *Check if tables are available.
    //if available *reserve table for that time.
    //if unavailable then push last name to waiting list cue(wlc).
    //inside of wlc present user with *Estimated wait time and postion in line.
  //if tables reserved is less than or equal to whats available then we will allow the reservation
  if (tsr <= tsa - 4) {
    //add 1 to seats reserved
  }
}
function reservationComplete() {
  //subtract 1 from ttr(total tables reserved)
}
/* 
The user form should
Ask them *partySize *partyTime *contactPhone *contactEmail *Special notes or allergies

ONLY VARIABLES THAT MATTER ARE *partySize & *partyTime
Does the resteraunt have enough seating during the time requested? if yes then give them the reservation and subtract the partySize
from the available seating total for that time.

if no seats available at that time then do not show the option to choose. but offer 20 minutes before/after.
if 4 reservations for a certain time then we should subtract (tableSize * amountOfpartys) from the total seats available.
**Either only show available times or 
if time has already occured than it is not available.
WHEN USER SUBMITS FORM GIVE THE USER ------------------------------------------------------
*What place they are in line (without revealing the names of people around them)
1.Johnazues (fam of 4) Your wait time is the shortest!
2.spangler (group of 8) Your wait time is roughly 20min
3.lookeer (couple of 2) Your wait time is roughly 23min

*Average wait time or most likely time to wait.
*when it is their turn then they will recieve a call or email.
**Eventually add option to Cancle or Change inputs


*/
