//Write a program which tells the number of days in a month.

// Switch More Examples
let monthUserInput = prompt("What is the month ?");
let month = monthUserInput;

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log( `${monthUserInput} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 days`);
    break;
  case "february":
    console.log("februry has 28/29 days");
    break;

  default:
    console.log("It is not a week day.");
}
// now consider leap year.
let year = parseInt(prompt("Enter a year: "));
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`feburary has 29 days in ${year}.`);

} else {
  console.log(`february has 28 days in ${year}.`);

}
