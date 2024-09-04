const firebaseConfig = {
    apiKey: "AIzaSyAUENQYbCNyU-xCptpbB1aRMUyTw5CVtw0",
    authDomain: "gclc-f7cbb.firebaseapp.com",
    projectId: "gclc-f7cbb",
    storageBucket: "gclc-f7cbb.appspot.com",
    messagingSenderId: "273312236534",
    appId: "1:273312236534:web:d5fb06d9ef6fe324b47dd7"
};

firebase.initializeApp(firebaseConfig);




function forgottenPassword(event) {
    event.preventDefault();
    var emailReset = document.getElementById('email').value;
    console.log(emailReset)
    firebase.auth().sendPasswordResetEmail(emailReset)
  .then(() => {
    swal({
        title: "Password Reset",
        text: "Password reset instructions sent to your email",
        icon: "success",
        button: "Back to home"
    }).then(function () {
        window.location.href = "index.html"
    })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
