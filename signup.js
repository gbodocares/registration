
function hideSpinner(spinner, interval) {
    clearInterval(interval); // stop text rotation
    spinner.classList.add("fade-out"); // smooth fade

    setTimeout(() => {
        spinner.style.display = "none"; // fully hide
        spinner.classList.remove("fade-out"); // reset for next use
    }, 500); // match CSS transition time
}


function signUp() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const today = new Date();
    const spinner = document.getElementById("spinner");
    const spinnerText = document.getElementById("spinner-text");

    // Show spinner
    spinner.style.display = "flex";

    // Update text dynamically
    let steps = ["Creating Account...", "Almost there...", "Finalizing..."];
    let i = 0;
    let interval = setInterval(() => {
        spinnerText.textContent = steps[i];
        i = (i + 1) % steps.length;
    }, 2000); // update text every 2s

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            db.collection("pre-batch9-students").doc(userCredentials.user.uid).set({
                email: email,
                userId: userCredentials.user.uid,
                created_at: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
            }).then(() => {
                hideSpinner(spinner, interval); // fade out

                swal({
                    title: "Register",
                    text: "Account Creation Successful",
                    icon: "success",
                    button: "Proceed to registration"
                }).then(function () {
                    window.location.href = "requirements.html";
                });
            });
        }).catch(error => {
            hideSpinner(spinner, interval); // fade out

            swal({
                title: "Register",
                text: "Email is in use by another user",
                icon: "error",
                button: "Try again"
            }).then(function () {
                window.location.reload();
            });
        });
}





