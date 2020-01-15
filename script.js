document.querySelector('#temp-form').addEventListener('submit' , (e) => {
    e.preventDefault();
    const value = document.querySelector('#temp-input').value;
    console.log(value);
    //TODO: Validate Values
    //TODO: Convert Values
    let response = fetch('ServerAddresshere.com/' ,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        headers : {'content-type' : 'application/json'}
    });
});