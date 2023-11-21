const registerHandler= async (e)=>{
    e.preventDefault()

    const username= document.getElementById("register-username").value
    const email= document.getElementById("register-email").value
    const password= document.getElementById("register-password").value

console.log(username, email, password)
 const response = await fetch ('/api/users', {
    method: "POST",
    body: JSON.stringify({
       username:username, 
       email:email, 
       password:password
    }),
    headers:{'Content-Type': 'application/json'}
 });

 if(response.ok){
    document.location.replace('/')
 }else{
    alert('Failed to Login')
 }


}



document. querySelector("#register-btn").addEventListener("click",registerHandler)