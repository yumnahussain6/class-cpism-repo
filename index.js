let temp=parseFloat(prompt("Enter today's temperature: "));

if(temp>=0&&temp<10){
    document.write("It is cold today");
}

else if(temp>=10&&temp<35){
    document.write("It is moderate today");
}

else{
    document.write("It is hot today");
}
