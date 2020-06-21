//The aim was to write a program that will register runners for the race and give them instructions on race day.

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 18;

if (runnersAge > 18 && registeredEarly === true) {
  raceNumber = raceNumber + 1000; 
};

if (runnersAge > 18 && registeredEarly === true)
{
  console.log(`Early adult with number ${raceNumber} run at 9:30 am`);
}
else if (runnersAge > 18 && registeredEarly === false) {
 console.log(`Late adult with number ${raceNumber} run at 11:00 am`);
}
else if (runnersAge < 18) {
  console.log(`Youth registrant with number ${raceNumber} run at 12:30 pm`);
}
else
{
  console.log(`Registrant who is exactly 18 years old should see the registration desk`);
};
