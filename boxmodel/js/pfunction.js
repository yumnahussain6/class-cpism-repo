let a = 0;
let b = 0;

function param(value) {
    if (value === 1) {
        a = value;
    } else if (value === 2) {
        b = value;
    }
    console.log(`Button Value Set: ${value}`);
}

function sum() {
    let add = a + b;
    document.getElementById('result').textContent = `Sum: ${add}`;
}