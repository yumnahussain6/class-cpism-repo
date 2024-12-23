let n = prompt("Enter the number of terms you want:")

let a = 0;
let b = 1;
document.getElementById("heading").innerHTML += `Fibonacci Sequence`;
for (let i = 1; i <= n; i++) {
    document.write(a + "<br>");
    let next = a + b;
    a = b;
    b = next;
}