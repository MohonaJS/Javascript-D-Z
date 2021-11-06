let main_function = async (url) => {
    let response = await fetch(url);
    if(!response.ok){
        throw new Error('Something went wrong');

    }
    return response.json();

}

let get_data = () =>{
    main_function('https://jsonplaceholder.typicode.com/posts')
    .then((response ) => {
        console.log(response);
        Array.from(response).map(i => {
           let tbody = document.querySelector('tbody');
           let tableRow = document.createElement('tr');
           let tableTd = document.createElement('td');
           tableTd.innerText = i.title;
           let tablebody = document.createElement('td');
           tablebody.innerText = i.body;
           tableRow.appendChild(tableTd);
           tableRow.appendChild(tablebody);
           tbody.appendChild(tableRow); 

        })
    })
}

get_data()