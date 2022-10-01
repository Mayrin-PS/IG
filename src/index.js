function showhidepass() {
    var pass = document.getElementById('password')
    var showpass = document.getElementById('showbtn')
    var hidepass = document.getElementById('hidebtn')

    if(pass.type === "password") {
     hidepass.classList.remove('hidden');
     pass.type = "text";
    }
    else {
        pass.type = "password";
        hidepass.classList.add('hidden');
        showpass.classList.remove('hidden')
    }
}
var password = document.getElementById("password")
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var message = document.getElementById("message");

//Click pass textbox, show message 
password.onfocus = function(){ 
    message.classList.remove('hidden');
}

//Click input textbox, hide message 
password.onblur = function() {
    message.classList.add('hidden');
}

// When the user starts to type something inside the password field
password.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

    // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

   // Validate numbers
  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
}
