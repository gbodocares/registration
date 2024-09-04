
const loginBtn = document.getElementById("loginBtn").onclick = ((e) => {
    e.preventDefault()

    const email = document.getElementById("emailOther").value
    const password = document.getElementById("passwordOther").value

   
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            sessionStorage.setItem("uid", userCredentials.user.uid)
            window.location.href = "reprint.html"
        }).catch((error) => {
            swal({
                title: "Login",
                text: 'invalid Login Details',
                icon: "error",
                button: "Try again"
            }).then(function () {
                window.location.reload();
            })
    })

});