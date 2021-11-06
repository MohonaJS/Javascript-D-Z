
const makeRequest = (method, url, data) => {
    let xml = new XMLHttpRequest();
    xml.open(method, url);
    xml.setRequestHeader('Content-type','aplication/json');
    xml.onload = () => {
        let data = xml.response;
        console.log(JSON.parse(data));
    }

    xml.send(JSON.stringify(data));

}

const getData = () => {
    makeRequest('get', 'https://jsonplaceholder.typicode.com/posts/1');

}

const postData = () => {
    makeRequest('post', 'https://jsonplaceholder.typicode.com/posts/1', {
        title:'foo',
        body:'321234',
        userId:1,
    })
}

const putData = () => {
    makeRequest('put', 'https://jsonplaceholder.typicode.com/posts/1', {
        id:2,
        title:'mohona',
        body:'12345',
        userId:1
    })
}

const updateData = () => {
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        id:2,
        title:'aveen sineen khan',
        body:'32123',
        userId:3,
    })

}

const deleteData = () => {
    makeRequest('delete', 'https://jsonplaceholder.typicode.com/posts/4');
}


getData();
postData();
putData();
updateData();
deleteData();