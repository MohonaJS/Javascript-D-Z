let mainFunction = async (url) => {
    let result = await fetch(url);
    if(!result.ok){
        throw new Error('Something wrong');
    }
    return result.json();
}

let getData = () => { 
    mainFunction('https://jsonplaceholder.typicode.com/posts')
    .then((respons) => {
        Array.from(respons).map(i => {
            let tablebody = document.querySelector('tbody');
            let tRow = document.createElement('tr');
            let titleTd = document.createElement('td');
            titleTd.innerText = i.userId;
            let bodyTd = document.createElement('td');
            bodyTd.innerText = i.id;
            
            let titlTd = document.createElement('td');
            titlTd.innerText = i.title;
            let bodTd = document.createElement('td');
            bodTd.innerText = i.body;


            tRow.appendChild(titleTd);
            tRow.appendChild(bodyTd);
            tRow.appendChild(titlTd);
            tRow.appendChild(bodTd);
            tablebody.appendChild(tRow);


        })
    })

}
getData()