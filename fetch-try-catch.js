const container = document.querySelector('tbody')

const makeRequest = async (url, configaratio) => {
    let response = await fetch( url, configaratio)
    if(!response.ok){
        throw new Error(`Error ${response.status}`)
    }
    return response.json();

}

const getData = () => {
    makeRequest('https://fakestoreapi.com/products')
    .then(response => {
        Array.from(response).map(item => {
            console.log(item);
            let row = document.createElement('tr');
            let titleColum = document.createElement('td');
            titleColum.innerText = item.title;
            let bodyColum = document.createElement('td');
            bodyColum.innerText = item.price;
            let bodyC = document.createElement('td');
            bodyC.innerText = item.catagory;
            row.appendChild(titleColum);
            row.appendChild(bodyColum);
            row.appendChild(bodyC);
            container.appendChild(row);
        })
    })
    .catch(error => console.log(error));
}

getData();