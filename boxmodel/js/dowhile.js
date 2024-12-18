let i=prompt("Enter a pincode: ");
if(i){
        // alert("Input submitted");
        do{
            i=prompt("Enter a pincode: ");
        } while(i!="a41")
    
            document.getElementById('heading').innerHTML+=`<h1>Correct Pincode.<h1>`;
}
else {
        alert("Enter a valid input.");
}

