let formElement = document.querySelector('#form');



formElement.addEventListener('submit',(e)=>{
    e.preventDefault();

    let mail = document.querySelector('#mail').value;
    let password = document.querySelector('#pass').value;

    fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email : mail, password : password}), 
      }).then(res=>res.json())
      .then(data => console.log(data))
})