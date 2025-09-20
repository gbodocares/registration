
// const loginBtn = document.getElementById("loginBtn").onclick = ((e) => {
//     e.preventDefault()

//     const email = document.getElementById("emailOther").value
//     const password = document.getElementById("passwordOther").value

   
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredentials) => {
//             sessionStorage.setItem("uid", userCredentials.user.uid)
//             window.location.href = "reprint.html"
//         }).catch((error) => {
//             swal({
//                 title: "Login",
//                 text: 'invalid Login Details',
//                 icon: "error",
//                 button: "Try again"
//             }).then(function () {
//                 window.location.reload();
//             })
//     })

// });

// Reusable function to hide spinner with fade-out
function hideSpinner1(spinner1, interval1) {
    clearInterval(interval1); // stop text rotation
    spinner1.classList.add("fade-out");

    setTimeout(() => {
        spinner1.style.display = "none";
        spinner1.classList.remove("fade-out");
    }, 500); // match CSS transition
}

const loginBtn = document.getElementById("loginBtn").onclick = ((e) => {
    e.preventDefault();

    const email = document.getElementById("emailOther").value;
    const password = document.getElementById("passwordOther").value;

    const spinner1 = document.getElementById("spinner1");
    const spinnerText1 = document.getElementById("spinner-text1");

    // Show spinner
    spinner1.style.display = "flex";

    // Rotate text messages dynamically
    let steps = ["Signing you in...", "Checking credentials...", "Almost done..."];
    let i = 0;
    let interval1 = setInterval(() => {
        spinnerText1.textContent = steps[i];
        i = (i + 1) % steps.length;
    }, 1000);

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            hideSpinner1(spinner1, interval1); // ✅ fade out spinner

            sessionStorage.setItem("uid", userCredentials.user.uid);
            window.location.href = "reprint.html";
        }).catch((error) => {
            hideSpinner1(spinner1, interval1); // ✅ fade out spinner

            swal({
                title: "Login",
                text: 'Invalid Login Details',
                icon: "error",
                button: "Try again"
            }).then(function () {
                window.location.reload();
            });
        });
});
