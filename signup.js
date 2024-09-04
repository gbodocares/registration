function signUp(){
    //event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const today = new Date();

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
    db.collection("students").doc(userCredentials.user.uid).set({
        email: email,
        userId: userCredentials.user.uid,
        created_at: today.getFullYear() + "-" + (today.getMonth() +1) + "-" + today.getDate()
    })
        swal({
            title: "Register",
            text: "Account Creation Successful",
            icon: "success",
            button: "Proceed to registration"
        }).then(function () {
            window.location.href = "requirements.html"
        })
    }).catch(error => {
        swal({
            title: "Register",
            text: "Email is in use by another user",
            icon: "error",
            button: "Try again"
        }).then(function () {
            window.location.reload()
        })
    })
}


