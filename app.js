const firebaseConfig = {
    apiKey: "AIzaSyDqtm7YRTDrpIVSFxHmgR0Js4AU-pB71R4",
    authDomain: "authentication-80145.firebaseapp.com",
    projectId: "authentication-80145",
    storageBucket: "authentication-80145.appspot.com",
    messagingSenderId: "345465498778",
    appId: "1:345465498778:web:b0d1a4254bbf2c2d7b8323",
    measurementId: "G-32LSXCCX8C"
  };

  //initialise firebase
  firebase.initializeApp(firebaseConfig)


  const aunth = firebase.auth()

  //signup function

let signUpButton = document.getElementById("signup")
signUpButton.addEventListener("click",(e) =>{
//prevent default behaviour 

e.preventDefault()

var email = document.getElementById("inputemail")
var password = document.getElementById("inputpassword")

 auth.createUserWithEmailAndPassword(email.value,password.value)
 .then((userCredentials)=>{
    location.reload()
    var user = userCredentials.user
    console.log(user.email) 
}).catch((error)=>{
var errorMessage = error.Message
alert(errorMessage)
})

//console.log(email.value,password.value)
})



  //signin function

  let signInButton = document.getElementById("signin")
  signInButton.addEventListener("click",(e) =>{
  //prevent default behaviour 
  
  e.preventDefault()
  
  var email = document.getElementById("inputemail")
  var password = document.getElementById("inputpassword")
  
   auth.signInWithEmailAndPassword(email.value,password.value)
   .then((userCredentials)=>{
      var user = userCredentials.user
      alert(user.email)
      window.location("dash.html")
      console.log(user.email) 
    }).catch((error)=>{
    var errorMessage = error.Message
  alert(errorMessage)
    })
  })

  auth.onAuthStateChanged(function(user){
    if(user){
        var email=user.email
        
        var users =document.getElementById("user")
        var text = document.createTextNode(email)

        users.appendChild(text)

    }
  })
  

