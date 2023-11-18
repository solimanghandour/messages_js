function SendEmail(){
    Email.send({
        SecureToken : "5b936c0b-e353-4609-bb06-23151e23c1de",
        To : 'solimanghandour21@gmail.com',
        From : "solimanghandour21@gmail.com",
        Subject : "test email",
        Body : "name"+ document.getElementById("name").value
        +"<br> Email"+document.getElementById("email").value
        +"<br> phone"+document.getElementById("phone").value
        +"<br> message"+document.getElementById("message").value
    }).then(
      message => alert("message sent succesfully")
    );
}