const container = document.querySelector('tbody')

/* Array.from(data).map(item => {
    console.log(item);
    let row = document.createElement("tr");
    let titleColum = document.createElement("td");
    titleColum.innerText = item.title;
    let bodyColumn = document.createElement('td');
    bodyColumn.innerText = item.body;
    row.appendChild(titleColum);
    row.appendChild(bodyColumn);
    container.appendChild(row);
}) */
    const makeRequest = (method, url, data) => {
        let xml = new XMLHttpRequest();
        xml.open(method, url);
        xml.setRequestHeader('Content-type', 'application/json');
        xml.onload = () => {
            let data = xml.response;
            console.log(JSON.parse(data));
        }

        xml.send(JSON.stringify(data));

    }

const getdata = () => {
    makeRequest('get', 'https://jsonplaceholder.typicode.com/posts/1');

    }
const postData = () => {
    makeRequest('post', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: '32457162',
        userId: 1,
    })

    }
    
// getdata();
// postData();
const putData = () => {
    makeRequest('put', 'https://jsonplaceholder.typicode.com/posts/2', {
        id:2,    
        title: 'fooTOOkOO',
        body: '32t535',
        userId: 1,
    })

    }
    // putData();
       
const updateData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/3', {
        id:2,    
        title: 'kikikfooTOOkOO',
        body: '32t535',
        userId: 1,
    })

    }
    updateData();
// getdata();



const deleteData = () => {
    makeRequest('delete', 'https://jsonplaceholder.typicode.com/posts/2', {
        
    })

    }
deleteData();