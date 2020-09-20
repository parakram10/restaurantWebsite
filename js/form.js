function changeform(){
    location.replace('signup.html');
    console.log("cshcwu");
}



// let name = document.getElementById("input1");
// let lname = document.getElementById("input2");
let email = document.getElementById("input3");
let password = document.getElementById("input4");


// function func(){
//     let alert123 = document.getElementById('alertmessage');

//     if(name.value == null || name.value == ""){
//         alert123.innerHTML = `<p>**Please enter user's name!</p>`;
//     }
    
//     else if(email.value == null || email.value == ""){
//         alert123.innerHTML = `<p>**Email field should not be empty!</p>`;
//     }
    
//     else if(email.value == null || email.value == ""){ 
//         alert123.innerHTML = `<p>**Please enter email!</p>`;
//     }
    
//     else if(!validateEmail(email.value)){
//         alert123.innerHTML = `<p>**Please enter a valid email address!</p>`;
//     }

//     else if(password.value == null || password.value == ""){
//         alert123.innerHTML = `<p>**Password field should not be empty!</p>`;
//     }


//     else if(!testString(password.value)){
//         alert123.innerHTML = `<p>**Please enter a valid password!</p>`;
//     }
    
//     else{
//         location.href = "index.html";
//     }

//     setTimeout(() => {
//         alert123.innerHTML = `<p><p>`
//     }, 1500);
 
// }


function func12(){
    let alert123 = document.getElementById('alertmessage');

    if(email.value == null || email.value == ""){
        alert123.innerHTML = `<p>**Email field should not be empty!</p>`;
    }

    else if(email.value == null || email.value == ""){ 
        alert123.innerHTML = `<p>**Please enter email!</p>`;
    }
    
    else if(!validateEmail(email.value)){
        alert123.innerHTML = `<p>**Please enter a valid email address!</p>`;
    }

    else if(password.value == null || password.value == ""){
        alert123.innerHTML = `<p>**Password field should not be empty!</p>`;
    }
    

    else if(!testString(password.value)){
        alert123.innerHTML = `<p>**Please enter a valid password!</p>`;
    }
    
    else{
        location.href = "index.html";
    }

    setTimeout(() => {
        alert123.innerHTML = `<p><p>`
    }, 1500);
    
}



                
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function testString(s) {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(s) && s.length > 3;
}


