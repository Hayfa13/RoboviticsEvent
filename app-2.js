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

  let SignOutButton=document.getElementById("signout")
  SignOutButton.addEventListener("click",(e)=>{
    e.previousDefault()

    auth.signOut()
    alert("Signout")
    window.location= "index.html"



  })