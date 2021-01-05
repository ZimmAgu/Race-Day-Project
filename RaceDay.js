
//  Assigns race numbers randomly
let raceNumber = Math.floor(Math.random() * 1000);








/*
    Variable that indicates whether a runner 
    was registered early or not
*/
let registered_Early = true;










/*  
    Variable that indicates 
    the age of the runner
*/
age_of_Runner = 20;









/* 
    Checks whether the runner is:
    an  adult 
    and registered early

    Adds 1000 to their raceNumber if it is true
*/
if (age_of_Runner > 18 && registered_Early == true) {
    raceNumber += 1000;
}









// Tells the racer their race number
console.log(`Your race number is ${raceNumber}`);

//  Space to seperate race number from race time
console.log(``)









/*
    Checks age and registration 
    to determine race time

    For runners over 18 that registered early
    the race begins at 9:30 am

    For runners over 18 that registered late
    saying the race begins at 11:00 am

    For runners under the age of 18
    the race begins at 12:30 pm

    For runners exactly the age of 18

    they need to see the help desk

*/
if (age_of_Runner > 18 && registered_Early == true) {

    console.log(`Runner number ${raceNumber} will race at 9:30 a.m.`);

} else if (age_of_Runner > 18 && registered_Early == false) {

    console.log(`Runner number ${raceNumber} will race at 11:00 a.m.`);

} else if (age_of_Runner < 18) {

    console.log(`Runner number ${raceNumber} will race at 12:30 p.m.`);

} else if (age_of_Runner == 18) {

    console.log(`See the registration desk`);

}

    

