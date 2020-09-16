function changeform(){
    location.replace('signup.html');
    console.log("cshcwu");
}


let a1 = document.getElementById("c2");
let a2 = document.getElementById("c3");
let a3 = document.getElementById("c4");
let a4 = document.getElementById("c5");
let l1 = document.getElementById("link11");
let l2 = document.getElementById("link12");
let l3 = document.getElementById("link13");
let l4 = document.getElementById("link14");

function fun423(){
    a2.style.display = "block";
    fun1();
    l2.classList.add("active12");
}

function fun1(){
    a1.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    l1.classList.remove("active12");
    l3.classList.remove("active12");
    l4.classList.remove("active12");
}


function fun424(){
    a1.style.display = "block";
    l1.classList.add("active12");
    fun2();
}

function fun2(){
    a2.style.display = "none";
    a3.style.display = "none";
    a4.style.display = "none";
    l2.classList.remove("active12");
    l3.classList.remove("active12");
    l4.classList.remove("active12");
}


function fun425(){
    a3.style.display = "block";
    fun3();
    l3.classList.add("active12");
}

function fun3(){
    a2.style.display = "none";
    a1.style.display = "none";
    a4.style.display = "none";
    l1.classList.remove("active12");
    l2.classList.remove("active12");
    l4.classList.remove("active12");
}


function fun426(){
    a4.style.display = "block";
    fun4();
    l4.classList.add("active12");
}

function fun4(){
    a2.style.display = "none";
    a1.style.display = "none";
    a3.style.display = "none";
    l1.classList.remove("active12");
    l3.classList.remove("active12");
    l2.classList.remove("active12");
}




let feedName = document.getElementById('feedName');
let feedEmail = document.getElementById('feedEmail');
let feedfeed = document.getElementById('feedfeed');
let feedbackButton = document.getElementById('feedbackButton');


feedbackButton.addEventListener('click',function(e){
    e.preventDefault();

    if(feedName.value == null || feedName.value == ""){
        alert(`**Please enter user's name!`);
    }

    else if(feedEmail.value == null || feedEmail.value == ""){
        alert(`**Email field should not be empty!`);
    }
    
    else if(!validateEmail(feedEmail.value)){
        alert(`**Please enter a valid email address!`);
    }

    else if(feedfeed.value == null || feedfeed.value == ""){
        alert(`*Please give your FeedBack!`);
    }

    else{
        let k = `Thanks for you feedback, ${feedName.value} :)`;
        alert(k);
    }

})


let subsName = document.getElementById('subsemail');
let subsbutton = document.getElementById('subsbutton');

subsbutton.addEventListener('click',function(e){
    if(subsName.value == null || subsName.value == ""){
        alert(`**Email field should not be empty!`);
    }
    
    else if(!validateEmail(subsName.value)){
        alert(`**Please enter a valid email address!`);
    }
    
    else{
        let k = `Thanks for you subscription. :)`;
        alert(k);
    }
    e.preventDefault();
})

                    

let mybutton = document.getElementById("fixedbutton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
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

