const loginHandler= async (e)=>{
    e.preventDefault()

    const email= document.getElementById("email-input").value
    const password= document.getElementById("password-input").value

console.log(email, password)
 const response = await fetch ('/api/users/login', {
    method: "POST",
    body: JSON.stringify({
        email, password
    }),
    headers:{'Content-Type': 'application/json'}
 });

 if(response.ok){
    document.location.replace('/')
 }else{
    alert('Failed to Login')
 }


}



document. querySelector("#login-btn").addEventListener("click",loginHandler)