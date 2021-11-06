let mainFunction = async (url) => {
    let output = await fetch(url)
    if(!output.ok){
        throw new Error(`Error : ${output.status}`)

    }
    return output.json();
}
let getData = () => {
    mainFunction('https://fakestoreapi.com/products')
    .then((response) => {
        Array.from(response).map(item => {
            let t_body = document.querySelector('tbody');
            let tRow = document.createElement('tr');

            let title_row = document.createElement('td');
            title_row.innerText = item.title;
            
            let idRow = document.createElement('td');
            idRow.innerText = item.id;

            let price_row = document.createElement('td');
            price_row.innerText = item.price;

            let userId_row = document.createElement('td');
            userId_row.innerText = item.userId;

            tRow.appendChild(idRow);
            tRow.appendChild(title_row);
            tRow.appendChild(price_row);
            tRow.appendChild(userId_row);

            t_body.appendChild(tRow);

        })
        .catch((err) => {
    console.log(err);
})
    })
}
getData()