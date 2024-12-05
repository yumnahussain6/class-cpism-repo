let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let c = document.getElementById("demo");
if(a && b){
if(isNaN(a) && isNaN(b))
    {
 alert("Enter a valid number");
}
else{
    if(a>b)
    {
        alert("The value of intial number is greater than the final number. Try again.");
    }
    else{
        while(a<=b){
            c.innerHTML+=`<p>iteration count: ${a}</p>`;
            a++;
        }
    }}

}
    else{
        alert("Enter both the numbers");
    }
