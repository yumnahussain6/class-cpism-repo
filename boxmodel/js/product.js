let aurl = window.location.href;
let getUrl = newUrl(aurl);
let CatName = getUrl.searchParams.get("category");
console.log(CatName)
$(document).ready(function() {
    let i = "";
    $.ajax({
        url: "boxmodel/json/project.json",
        type: "get",
        success: function(proData) {
            $.each(proData, function(keys, arrays) {
                let catObj = keys.split("").join("").toLowerCase();
                if (catObj == CatName) {
                    $.each(arrays, function(indexes, objects) {
                        i += `<div class="col-lg-3 col-md-6 mt-2" style="padding-left: 8px;">
                    <div class="card">
                        <img src="${objects.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${objects.name}</h5>
                            <a href="product.html?category=${catObj}" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`
                    });
                    $("#product").html(i)
                } else {

                }
            })
        }
    })
})