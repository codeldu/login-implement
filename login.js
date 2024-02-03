let formElement = document.querySelector('#form');

let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;

if(user){
    window.location = './admin.html'
}

console.log(user);

formElement.addEventListener('submit',(e)=>{
    e.preventDefault();

    let mail = document.querySelector('#mail').value;
    let password = document.querySelector('#pass').value;

    fetch('http://localhost:3000/users', {
      }).then(res=>res.json())
      .then(data => {
        console.log(data);
        let currentUserInfo = data.find((user)=>user.email == mail)
        if(currentUserInfo){
            if(currentUserInfo.password == password){
                localStorage.setItem('currentUser', JSON.stringify(currentUserInfo));
                window.location = './admin.html'
            }else{
                console.log('Wrong password');
            }      
        }else{
            console.log("Wrong email");
        }
      })
})