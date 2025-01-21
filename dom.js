function change(){
    document.getElementById("body").style.backgroundColor = "pink";document.getElementById("para").style.color = "white";
}

function image(){
    let images = document.getElementById("image");

    images.setAttribute('src', '/images/airplane2.jpg');
    images.setAttribute('alt', 'New');
}

let para = document.getElementById("para").innerHTML;

