const report = (celsius, fahrenheit) => {
    //celsius
    document.querySelector(".MaxTempValue").innerHTML =
        celsius + "\xb0C";
    document.querySelector(".MinTempValue").innerHTML =
        fahrenheit + "\xb0F";
};

document.querySelector('#temp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const value = document.querySelector('#temp-input').value.toLowerCase();

    
    let response = fetch('http://localhost:8080/data', {
        method: 'POST', 
        encoding: 'utf-8',
        mode: 'no-cors',
        headers: { 'content-type': 'text/plain' },
        body: {temp : convertValue(value)}
    })
    .then(response => response.json())
    .then(jsonData => document.querySelector('body').innerHTML += jsonData.message)
    .catch(err => document.querySelector('body').innerHTML += err); 
});

const convertValue = (value) => {
    const num = parseInt(value);
    console.log(value);
    console.log(num);
    if (value.includes("c")) {
        report(num, Math.round(1.8 * num + 32));
        return Math.round(1.8 * num + 32);
    } else if (value.includes("f")) {
        report(Math.round((num - 32) / 1.8), num);
        return Math.round((num - 32) / 1.8);
    } else {
        alert("Invalid input. Please input the temperature followed by unit letter. Ex. 23C, 78F");
    }
}