console.clear();
/* Array.from(data).map( item => {
    let row = document.createElement('tr');
    let titleColumn = document.createElement('td');
    titleColumn.innerText = item.title;
    let titleBody = document.createElement('td');
    titleBody.innerText = item.body;
    row.appendChild(titleColumn);
    row.appendChild(titleBody);
    container.appendChild(row);
 
}) 

let container = document.querySelector('tbody');
*/

const makeRequest = (method, url) => {
    let data = [];
    let xml = new XMLHttpRequest();
    xml.open('GET','https://jsonplaceholder.typicode.com/posts');
   xml.onload = () => {
     data = xml.response;
    
   }

   xml.onerror = () => {
       console.log('we don\' get any data');
   }
    xml.send();
    return data;
}

const getdata = () => {
    let items = makeRequest('get', 'https://jsonplaceholder.typicode.com/posts');
    console.log(items);
}


getdata();
