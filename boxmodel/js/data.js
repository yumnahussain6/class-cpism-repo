$(document).ready(function(){
    $.ajax({
        url:"boxmodel/json/data.json",
        type:"get",
        success: function(data1){
          //   let i="";
          // $.each(data1, function(a,b){
          //   console.log(b)
          //   i+=`<li>${a+" "+b.name}</li>`;
          // })
          // $("#x").html(i);

          $.each(data1,function(indexes,objects){
            let catObj = objects.name.split(" ").join("").toLowerCase();
            let i ="";
            i+=`<div class="col">
        <div class="col-lg-3 col-md-6 mt-2" style="padding-left: 8px;">
            <div class="card">
                <img src="${objects.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <a href="product.html?category=${catObj}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>`
          })
          $("#category").html("i");
        }
    })
})