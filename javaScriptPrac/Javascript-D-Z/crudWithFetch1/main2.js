let makeRequest = async (url) => {
    let result = await fetch(url);
    if(!result.ok){
        throw new Error('something wrong');
    }
    return result.json();
}

let getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((result = () => {
        Array.from(result).map(index => {
            let tBody = document.querySelector('tbody')
            let tRow = document.createElement('tr')
            let titleTd = document.createElement('td');
            titleTd.innerText = i.title;
            let titleTd = document.createElement('td');
            titleTd.innerText = i.title;
            let titleTd = document.createElement('td');
            titleTd.innerText = i.title;
            let titleTd = document.createElement('td');
            titleTd.innerText = i.title;
        })
    }))
}
getData();