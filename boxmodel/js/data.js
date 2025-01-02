$(document).ready(function(){
    $.ajax({
        url:"boxmodel/json/data.json",
        type:"get",
        success: function(data1){
            let i="";
          $.each(data1, function(a,b){
            console.log(b)
            i+=`<li>${a+" "+b.name}</li>`;
          })
          $("#x").html(i);
        }
    })
})