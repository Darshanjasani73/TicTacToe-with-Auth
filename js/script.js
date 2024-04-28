function signup(){
    let name,email,password;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    
    //Form validation using RegEx.
    
    let checkEmail = /^([a-z0-9\.-]+)@([a-z0-9\-]+).([a-z]{2,20})(.[a-z]{2,8})$/
    let checkName = /^([A-Za-z\s]{2,10})+$/;
    let checkPassword = /^([0-9]{3,7})+$/;
    
    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):[];
    if(user_records.some((v)=>{
        return v.email==email;
    })){
        alert("Duplicate data");
    }
    else if(name=="" || email=="" || password=="" ){
        alert("Enter the Valid Data")
    }
    else if( !(name.match(checkName)) || !(password.match(checkPassword)) || !(email.match(checkEmail))){
         if(!(name.match(checkName))){
            alert("Enter the valid name");
         }
         else if(!(password.match(checkPassword))){
            alert("Enter the valid password (only numbers)");
         }
         else if(!(email.match(checkEmail))){
            alert("Enter the valid email-id");
         }
    }
    else
    {
       user_records.push({
        "name":name,
        "email":email,
        "password":password
       })
     localStorage.setItem("user",JSON.stringify(user_records));
     displayGames();
     }
    }
    
    function login(){
       let email,password;
       email=document.getElementById('Email').value;
       password=document.getElementById('Password').value;
    
       let user_records = new Array();
       user_records=JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):[];
       if(user_records.some((v)=>{
        return v.email==email && v.password==password;
       })){
       alert("Login Successful");
       displayGames();
       }
       else{
        alert("Login Fail");
       }
    }
    function displayGames()
    {
     document.getElementById('Signup').style.display="none";
     document.getElementById('Login').style.display="none";
     TGame1();
    }
    
    function L_hide(){
        let x = document.querySelector('#Password');
        x.type = (x.type === "password") ? "text" : "password";
    
    }
    function S_hide(){
            let x = document.querySelector('#password');
            x.type = (x.type === "password") ? "text" : "password";
    }
    
    
    