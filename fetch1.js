const makeRequest = async (url) => {
    let response = await fetch(url);
    if(!response.ok){
        throw new Error(`error${error.response}`);
    }
    console.log(response.json());
}
let get_data = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((response ) => {
        console.log(response);
        Array.from(response).map(i => {
            console.log(response[i]);
        })
    })
}

get_data()