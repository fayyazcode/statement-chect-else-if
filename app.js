
//if else statement check

//Q1***************************************


// var input=prompt("enter somethung")
// if(input>="A"&&input<="Z"){
//  alert("Upper Case")
// }
// else if(input>="a"&&input<="z"){
//     alert("lower Case")
//    }
// else if(input<=0||input>=0){
//     alert("its a number")
// }
// else{
//     alert("special character")
// }


//Q2********************************************


var first=+prompt("Enter First Number")
var second=+prompt("Enter second Number")

if(first>second){
    alert(first+" Is Greater")
}
else if(second>first){
    alert(second+" is Greater")
}
else if(first===second){
    alert("Both numbers are equal")
}
else{
    alert("Invalid input")
}