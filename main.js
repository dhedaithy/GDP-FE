const handleSubmit = () => {
    let name = document.getElementById("fname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let findus = document.getElementById("findus");

    const xhr = new XMLHttpRequest();
    
    xhr.open("POST","http://localhost:4000/submit",true);

    xhr.setRequestHeader("Content-Type","application/json");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response)
        }

    }

    const data = JSON.stringify({
        name: name.value, 
        email: email.value,
        phone: phone.value,
        findus: findus.value, 
    })

    xhr.send(data); 
}