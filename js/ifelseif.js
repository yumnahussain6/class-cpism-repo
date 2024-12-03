let x = parseInt(prompt("Enter the first integar"));
let y = parseInt(prompt("Enter the second integar"));
let op = prompt("Enter the operator (+,-,*,/)");


if (op === '+')
{
 
    alert("The addition of x and y is: "+(x+y));
}

else if(op == '-')
    
        if (y>x){
            alert("The value of operand 2 is greater than operand 1. Try again");
                                                 
    }

        else{
            alert("The substraction of x and y is: "+(x-y));  
    
    }

else if (op == '*')
    {
            alert("The multiplication of x and y is: "+(x*y));
}


else if(op == '/')
    {
        if(y==0){
            alert("The value of operand 2 is 0. Try again");
      
    }

 else{
    alert("The division of x and y is: "+(x/y));
}
    }
else
{
    alert("Invalid Operator. Try Again");
}