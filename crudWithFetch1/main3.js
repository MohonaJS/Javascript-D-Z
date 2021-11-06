let mainFunction = async (url) => {
    let result = await fetch(url);
    if(!result.ok){
        throw new Error(`Error : ${result.status}`)
    }
    return result.json();

}
let getData = () => {
    mainFunction('https://fakestoreapi.com/products')
    .then((res) =>{
       Array.from(res).map(item => {
           let tableBody = document.querySelector('tbody');
           let tRow = document.createElement('tr');

           let tTitleTd = document.createElement('td');
           tTitleTd.innerText = item.title;

           let tIdTd = document.createElement('td');
          tIdTd.innerText = item.id;

           let tPriceTd = document.createElement('td');
           tPriceTd.innerText = item.price;

           let tDescriptionTd = document.createElement('td');
           tDescriptionTd.innerText = item.description;

           tRow.appendChild(tTitleTd);
           tRow.appendChild(tIdTd);
           tRow.appendChild(tPriceTd);
           tRow.appendChild(tDescriptionTd);
           tableBody.appendChild(tRow);
           
       })
    })
    .catch((err) =>{
        console.log(err);
    })
}
getData()