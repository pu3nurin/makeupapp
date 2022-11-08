function buttonClicked(){

    var branding = document.getElementById("branding").value
    var category = document.getElementById("category").value
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${branding}&product_type=${category}`)
        .then(response => response.json())
        .then(data => {
            var info = data
            console.log(info) 
            console.log("Brand: ",data[0].brand)
            console.log("Category: ",data[0].product_type)
            console.log("Name: ",data[0].name)
            console.log("Price: $",data[0].price)
            console.log("Tag list: ",data[0].tag_list[0],",",data[0].tag_list[1])
            console.log("Product link: ",data[0].product_link)

            document.getElementById("muu1").append((data[0].brand))
            document.getElementById("muu2").append((data[0].product_type))
            document.getElementById("muu3").append((data[0].name))
            document.getElementById("muu4").append((data[0].price))
            document.getElementById("muu5").append((data[0].tag_list[0],",",data[0].tag_list[1]))
            document.getElementById("muu6").append((data[0].product_link))
        });
}