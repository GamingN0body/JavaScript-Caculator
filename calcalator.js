function math() { //to see the code put "math()" in the console
    let n1 = prompt("Input number"); //will have a popup sayin input
    let sign = prompt("Input sign");
    let n2 = prompt("Input number");

    if (n1 === 0 || isNaN(n1)){ //if input 1 is not a # then it will convert to the alert
        alert("Error 11111: Rereash page due to wrong input.");
    }

    if (n2 === 0 || isNaN(n2)){ //if input 2 is not a # then it will convert to the alert
        alert("Error 11111: Rereash page due to wrong input.");
    }

    n1 = parseFloat(n1); //will make it so that the + portain will confunction instead of it adding the 2 # like 1+1 =11 it will instead allow it to function as expected 1+1=2

    n2 = parseFloat(n2); 
    if (sign === "+") { 
        sum = n1 + n2;
    }

    else if (sign === "-") {
        sum = n1 - n2;
    }

    else if (sign === "/") {
        sum = n1 / n2;
    }

    else if (sign.toLowerCase() === "x" || "*") { //.toLowerCase will make any letter convert to be lower case
        sum = n1 * n2;
    }
    document.open; // this allows the answer to be seen on the screen
    document.write(sum);
    document.close;
}