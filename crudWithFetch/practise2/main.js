let mainFunction = async (url) => {
    let output = await fetch(url);
    if(!output.ok){
        throw new Error(`not working`);
    }
    return output.json();
}

let getData = () => {
    mainFunction('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
        Array.from(result).map(item => {
            let ul = document.createElement('ul');
            
            let li = document.createElement('li');

            let tableTitle = document.createElement('li');
            tableTitle.innerText = item.title;

            let tBodyTd = document.createElement('li');
            tBodyTd.innerText = item.body;
            ul.appendChild(tableTitle);
            ul.appendChild(tBodyTd);

            ul.appendChild(tableTitle);
            ul.appendChild(tBodyTd);

            document.body.appendChild(ul);

        })
    })
}
getData();