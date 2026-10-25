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

