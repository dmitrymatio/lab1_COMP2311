document.querySelector('#temp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const value = document.querySelector('#temp-input').value;
    console.log(value);
    //TODO: Validate Values
    //TODO: Convert Values
    let response = fetch('http://localhost:3000', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        encoding: 'utf-8',
        mode: 'no-cors',
        headers: { 'content-type': 'text/plain' },
        body: value
    })
        .then(response => response.json())
        .then(jsonData => document.querySelector('body').innerHTML += jsonData.message)
        .catch(err => document.querySelector('body').innerHTML += err);
});