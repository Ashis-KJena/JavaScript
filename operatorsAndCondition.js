//Arehmatic Operators
let a=5;
let b=2;
console.log("a=",a, "& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b); // ** is used for exponent

// Unary Operator
a++;
console.log("a++ =",a);
a--
console.log("a-- =",a); // previously a was 6 by a++ so, a-- comes 5.
console.log("Difference between post and pre increment/decrement.")
let x=2;
console.log("x=",x);
console.log("++x says it will increment first then print in same line as ++x=",++x);
console.log("--x says it will decrement first then print in same line as --x=",--x);
let y=3;
console.log("y=",y);
console.log("y++ says it will print the old value of y first then increment in next line y++=",y++); 
console.log("new value of y is",y);
console.log("y-- says it will print the old value of y first then decrement in next line y--=",y--);
console.log("new value of y is",y);
//Assignment Operator
let m=5;
m += 4; // it means m = m+4;
console.log("m=",m);
// +=, -=,=,*=,/=,%=,**= all are assignment operator

//Comparison Operator

let d=5;
let e=6;
let f="5";
console.log("d==e",d==e);// it checks if lhs=rhs on basis of values only;
console.log("d!=e",d!=e);
console.log("d==f",d==f); //d is a number and f is a string;
console.log("d===f",d===f); // it checks value as well as data type.
console.log("d!==f",d!==f);

//Logical Operator -> gives true or false as outputs

//&&(AND) ||(OR) !(NOT) (Same as studied in C-programming)
let p=4;
let q=5;
let cond1 = p<q;
let cond2 = p===4;
console.log("Cond1 && Cond2 = ",cond1 && cond2);
let cond3 = p>q;
console.log("cond2 || cond2 =",cond2 || cond3);
console.log("cond1 && cond3 =",cond1 && cond3);
console.log("!(4===5)",!(p===q));

//Conditional Statement
//skipping 'if' it ain't that nececsary as studied in C.
let mode= "dark";
let colour;
if (mode==="dark"){
    colour="black";
} else {
    colour="light";
}
console.log(colour);

//classic vote eligibility example
let age=23;
if(age>18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible");
}
// else-if
let units=250;
if(units<100)
    console.log("Low consumption");
else if(units>=100 && units<=200)
    console.log("Medium consumption");
else if(units>=201 && units<=300)
    console.log("High consumption")
else if(units>300)
console.log("Excess Consumption");

// grade system using else if
let marks=75;
if(marks>=90 && marks<100)
    console.log("A");
else if(marks<=89 && marks>=80)
    console.log("B");
else if(marks<=79 && marks>=70)
    console.log("C");
else if(marks<=69 && marks>=60)
    console.log("D");
else
    console.log("Fail");

//Ternary Opearator
let rAge = 25;
let resultAge = age>=18?"adult":"not adult";
console.log(resultAge);

//Quest 1.
let num= prompt("Enter a number");
if(num%5===0){
    console.log(num,"Multiple of 5");
}
else{
    console.log(num,"Not a multiple of 5");}
    // Quest 2.
    let score=prompt("Enter your score");
    if(score>=80 && score<=100)
        console.log("A");
    else if(score>=70 && score<=89)
        console.log("B");
    else if(score>=50 && score<=69)
        console.log("C");
    else if(score>=0 && score<=49)
        console.log("Fail");