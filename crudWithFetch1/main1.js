let mainFunc = async (url) => {
    let result = await fetch(url);
    if(!result.ok){
        throw new Error('something wrong');
    }
    return result.json();

}
let getData = () => {
    mainFunc('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        Array.from(response).map(index => {
            let tableBody = document.querySelector('tbody')
            let tRow = document.createElement('tr');
            let titleTd = document.createElement('td');
            titleTd.innerText = index.title;
            let bodyTd = document.createElement('td');
            bodyTd.innerText=index.body;
            let userTd = document.createElement('td');
            userTd.innerText=index.userId;
            let idTd = document.createElement('td');
            idTd.innerText=index.id;
            tRow.appendChild(titleTd);
            tRow.appendChild(bodyTd);
            tRow.appendChild(userTd);
            tRow.appendChild(idTd);
            tableBody.appendChild(tRow);

        })
    })
}
getData()