let x = parseInt(prompt("Enter the first integar"));
let y = parseInt(prompt("Enter the second integar"));
let op = prompt("Enter the operator (+,-,*,/)");


if (op === '+')
{
 
    alert("The addition of x and y is: "+(x+y));
}

else if(op == '-')
    {
        alert("The substraction of x and y is: "+(x-y));
    }

else if (op == '*')
    {
            alert("The multiplication of x and y is: "+(x*y));
}

else if (op == '/')
    {
        alert("The division of x and y is: "+(x/y));
    }

else
{
    alert("Invalid Operator. Try Again");
}