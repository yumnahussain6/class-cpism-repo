let b1;
let b2;
let a;
function param(a){
    console.log(a)
}
function sum(b1,b2){
    let n1 = parseInt(document.querySelector("#b1").value);
    let n2 = parseInt(document.querySelector("#b2").value);
    n1 = b1;
    n2 = b2;
    let c = n1+n2;
    document.querySelector("#print").innerHTML=c;
}