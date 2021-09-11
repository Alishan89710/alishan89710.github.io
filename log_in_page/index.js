var blackMode = document.documentElement.style;
var mode = true;


function changedMode() {
    if (mode) {
        darkMode();
    }
    else { lightMode(); }
}
function lightMode() {
    blackMode.setProperty("--background1", "rgba(230,230,230,)")
    blackMode.setProperty("--shadow1", "rgba(139, 133, 133, 0.5)")
    blackMode.setProperty("--shadow2", "rgba(255,255,255,0.85)")
    blackMode.setProperty("--color", "black")

}


function darkMode() {

    blackMode.setProperty("--background1", "rgba(9 25 33)")
    blackMode.setProperty("--shadow1", "rgba(0 0 0 / 45%)")
    blackMode.setProperty("--shadow2", "rgba(255 255 255 / 12%)")
    blackMode.setProperty("--color", "rgba(255 255 255 / 59%)")

}


function onSignUp() {
    let first_n = document.querySelector('#first_n').value;   
    let first_L = document.querySelector('#first_L').value;
    let f_name = document.querySelector('#f_name').value;
    let C_address = document.querySelector('#C_address').value;
    let C_email = document.querySelector('#C_email').value;
    let C_password = document.querySelector('#C_password').value;
//    let  message = document.getElementById('message')
    
//  console.log(first_n + " "+ first_L+" " + f_name + " " +C_address + " " + C_email + " " + C_password)
     if (first_n && first_L && f_name && C_address && C_email && C_password  ) {
y        console.log('user')
        var users = JSON.parse(localStorage.getItem('users')) || [];
        //get index
        var UserIdx = users.findIndex(function (val){
           return val.C_email === user.C_email.toLowerCase().value;
       });
        
       if (UserIdx === -1) {
            users.push(user);
            
            localStorage.setItem('users', JSON.stringify(users));
            
            location.href = "log_in.html"
        }
        else {
           let call = alert ("use in another account")
            call = user.C_email + call;
        }
    }
    else {
        alert("Please enter all the fields");
    }
    setTimeout(() => {
        //message.innerHTML = "";
        // singUp()
    }, 2000);

}
//console.log(user)
function log_in() {
    let email = document.getElementById('Username')
    let password = document.getElementById('password')

    users = {
        email: email.value,
        password: password.value,
    }
    console.log(users)
    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.findIndex(function (val) {
        return val.email.toLowerCase() === users.email.toLowerCase() && val.password === users.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        alert  ("Invalid credentials");
    }
    // clear state
    // setTimeout(() => {
    //     message.innerHTML = "";
    // }, 2000);

  };

  function onLogout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    setTimeout(() => {
        location.href = "log_in.html";
    }, 2000);
}
  function getCurrentUser() {
    let name = document.getElementById("first_n");
    let L_name = document.getElementById("L_name");
    let Fname = document.getElementById("fname");
    let address = document.getElementById("C_address");
    let email = document.getElementById("C_email")
    
    var user = JSON.parse(localStorage.getItem('user'));
    name.innerHTML = "Name: " + user.name + L_name;
    Fname.innerHTML = "Father Name: "+ user.fname;
    email.innerHTML = "Email address" +  user.email;
    address.innerHTML = "Address: "+ user.address;
};

function postArea() {
    var postArea = document.getElementById('post');
    var postText = document.getElementById('postText');
    var postInput = document.getElementById('postInput');
    var postTitle = document.getElementById('postTitle');
    if(postArea.value == "" ) {
        alert('type something in post');
    }
    else{
    postTitle.innerHTML = postInput.value;
    postText.innerHTML = postArea.value;
    var postCard = document.getElementById('postCard');
    postCard.style.display = "flex";
    postInput.value = "";
    postArea.value = "";
    }
};

