function handledesc(product){
    const title=product.title.toUpperCase();
    const description=product.description.toLowerCase();
    const category=product.category;
    const tag = product.tags;
    const brand=product.brand;
    return `
    <h2 class="title">${title}</h2>
    <p class="description">${description}</p>
    <p class="category"> category :${category}</p>
    <p class="tags"> tags :${tag}</p>
    <p>brand:${brand}</p>

    `
}
function handleNumber(product){
    const price =product.price;
    const discount = product.discountPercentage;
    const rating=product.rating;
    const stock=product.stock;
    const weight=product.weight;
    return`
    <p>Prix:${price}</p>
    <p>discount Percentage:${discount}</p>
    <p> Rating :${rating}</p>
    <p>Stock :${stock}</p>
    <p>Weight :${weight}</p>
    `
}
function handlestatus(product){
 const warranty=product.warrantyInformation;
 const shipping = product.shippingInformation;
 const availble=product.availabilityStatus;
 return `
 <p> warranty Information :${warranty}</p>
 <p>shipping Information :${shipping}</p>
 <p>availability Status :${availble}</p>
 `
}
function displayproduct(product){
    let mycontainer = document.getElementById("container");
    const mycontent =`
    ${handledesc(product)}
    ${handleNumber(product)}
    ${handlestatus(product)}
    `
    mycontainer.innerHTML=mycontent;
}
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(product=>{
  displayproduct(product);
})