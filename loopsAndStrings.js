// for loop
for(let i=1;i<=5;i++){
    console.log("Hello World");}
    //Calculate sum of 1 to 5 using loops.
    let count;
    let s=0;
    for(count=1;count<=5;count++){
        s=s+count;
    }
    console.log(s);

    //its something kinda like updation
    let x;
    for(x=1;x<=4;x++){}
    console.log(x); //loop ends but value of x has raised by 1.
    //infinite loops are red flags.
    
    //While loop
    let p=1;
    while(p<=8){
        console.log("p=",p);
        p++;
    }
let i=20;
do{
    console.log("i=",i);
    i++;
}
while(i<=10);
// do while loop runs atleast once as it first does then checks the condition.

//for of loop
let a="Ashis Kumar Jena";
for(let i of a){ //iterator i
    console.log("i=",i);
}
let size=0;
let b="appartment";
for(let c of b){
    console.log("c=",c);
    size++;
}
console.log("String size=",size);
// for in loop
let student={
    fullName:"Ridhika Malhan",
    age:18,
    cgpa:9.3,
    isPass:true,
};
 for(let key in student){
    console.log("key=",key,"value=",student[key]);
 }

 //print all the even numbers from 0 to 100.
 for(let e=0;e<=100;e+=2){
    console.log("All even numbers from 0-100 are",e);
 }
 // Create a number guessing game.
 let gameNum=50;
 let userNum= prompt("Guess the number:");
  while(gameNum != userNum){
    userNum= prompt("You've guessed the wrong number, guess again");
  }
  console.log("Congratulations, you've guessed it correct",userNum);

