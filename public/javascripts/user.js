
function dangky(){
   let un = document.frmdk.username.value;
   let pw = document.frmdk.password.value;
   let em = document.frmdk.email.value;
   let ho = document.frmdk.ho.value;
   let ten = document.frmdk.ten.value;
    let st= document.frmdk.sothich.value;
    let t= document.frmdk.tinh.value;
   let data = {
        ho: ho,
        ten:ten,
        username: un,
        password: pw, 
        email:em,
        sothich:st,
        tinh:t
    }
    let url ="http://localhost:3000/users/";
    fetch(url, {
        method: "POST",

        body: JSON.stringify(data),

        headers: {"Content-type": "application/json; charset=UTF-8"}

    })
    .then(response => response.json()) 
    .then (function(data){
        document.frmdk.reset();
        console.log(data);
    })
    .catch(err => console.log(err));
}