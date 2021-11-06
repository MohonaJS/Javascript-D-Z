const container = document.querySelector('tbody')

const makeRequest  = async (url, configurat) => {
    let respons = await fetch(url, configurat)
    if(!respons.ok){
        throw new Error(`Errow ${respons.status}`)
        // console.log('error');
    }
    return respons.json();

}

const getData = () => {
    makeRequest('https://swapi.dev/api/planets/1')
    .then(respons => {
        Array.from(respons).map(item => {
            console.log(item);
            let row = document.createElement("tr");
            let titleColum = document.createElement("td");
            titleColum.innerText = item.title;
            let bodyColumn = document.createElement('td');
            bodyColumn.innerText = item.body;
            row.appendChild(titleColum);
            row.appendChild(bodyColumn);
            container.appendChild(row);
        })
    })
    .catch(error => console.log(error));
    



const getOneData = () => {
    makeRequest('https://swapi.dev/api/planets/1')
    .then(respons => {
        console.log(respons);
    })
    .catch(error => console.log(error));
}
const postData = () => {
    makeRequest('patch','https://swapi.dev/api/planets/1',{
    method: 'POST',
    body: JSON.stringify({
    title: 'sweden',
    body: 'stockholm',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then(respons => {
        console.log(respons);
    })
    .catch(error => console.log(error));
}


postData();
getOneData();
getData();
