fetch('https://fakestoreapi.com/products')
    .then((data) => {
    console.log(data)
})
.then((completeData)=> {
    console.log(completeData[2].title)
    let data1 = ""
    completeData.map((item) => {
        console.log(item);
  /*       data1 = ´<div class="card">
    <h1 class="title">${item.title}</h1>
        <img src=${item.image} alt="img" class="image">
        <p>${item.description}</p>
        <p class="category">${item.category}</p>
        <p class="price">${item.price}</p>
    </div>´;
    })
    document.getElementById('cards').innerHTML = data1 */
})
.catch((err) => {
    console.log(err);
});