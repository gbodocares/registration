/*let file = {};

const chooseFile1 = (e) => {
  file = e.target.files[0];
}*/


// function registerMe(){

    

//     firebase.auth().onAuthStateChanged((user) => {
//         var docRef = db.collection("pre-batch9-students").doc(user.uid);
//         console.log(user.uid);
        
//         //let image = file;
//         //let imageName = image.name;
//         console.log(typeof(imageName));
//         if (user) {
//             console.log('clicked')
//             //let uniqueID = uuid.v4();
//             //let imageUrl = `/images/${uniqueID}/${image.name}`; // image.name = name of image uploaded
//             let firstName = document.getElementById('firstName').value;
//             let surName = document.getElementById('surName').value;
//             let dob = document.getElementById('dob').value;
//             let email = document.getElementById('email').value;
//             let phone = document.getElementById('phone').value;
//             let gender = document.getElementById('gender').value;
//             let occupation = document.getElementById('occupation').value;
//             let lga = document.getElementById('lga').value;
//             let community = document.getElementById('community').value;
//             let address = document.getElementById('address').value;
//             let course1 = document.getElementById('firstcourse').value;
//             let course2 = document.getElementById('secondcourse').value;
//             let randomNum = Math.floor(Math.random() * 1000);
//             let registrationId = 'GCLC-' + randomNum;
//             const today = new Date();

//             const ref = firebase.storage().ref();
//             const file = document.getElementById('photo').files[0];
//             const kname = +new Date() + "-" + file.name;
//             const metadata = {
//                 contentType: file.type
//             };
        
//             const task = ref.child(kname).put(file, metadata);task
//             .then(snapshot => snapshot.ref.getDownloadURL())
//             .then(url => {
//                 console.log(url);
//                 // document.querySelector("#image").style.display = 'block';
//                 // document.querySelector("#image").src = url;
        
//                 docRef.update({
//                     formData: firebase.firestore.FieldValue.arrayUnion(
//                         {
//                             registrationNo: registrationId,
//                             fisrtname: firstName,
//                             surName: surName,
//                             email: email,
//                             dob: dob,
//                             phone: phone,
//                             gender: gender,
//                             occupation: occupation, 
//                             lga: lga,
//                             community: community,
//                             address: address,
//                             firstcourse: course1,
//                             secondcourse: course2,
//                             imageUrl: url,
//                             created_at: today.getFullYear() + "-" + (today.getMonth() +1) + "-" + today.getDate()
//                         }
//                     )
//                 })

               
                
//                 swal({
//                     title: "Registration",
//                     text: "Registration Successful",
//                     icon: "success",
//                     button: "See acknowledgement slip"
//                 }).then(function () {
//                     window.location.href = "slip.html"
//                 })
                
//             }).catch(console.error);
        
            
//         } else {
//           console.log('User not signed in')
//         }

      
//     });
// }


function registerMe() {
    firebase.auth().onAuthStateChanged((user) => {
        const spinner = document.getElementById("spinner");
        const submitBtn = document.getElementById("submitBtn");

        if (user) {
            // Show spinner & disable button
            spinner.classList.add("active");
            submitBtn.disabled = true;
            submitBtn.innerText = "Processing...";

            var docRef = db.collection("pre-batch9-students").doc(user.uid);

            let firstName = document.getElementById('firstName').value;
            let surName = document.getElementById('surName').value;
            let dob = document.getElementById('dob').value;
            let email = document.getElementById('email').value;
            let phone = document.getElementById('phone').value;
            let gender = document.getElementById('gender').value;
            let occupation = document.getElementById('occupation').value;
            let lga = document.getElementById('lga').value;
            let community = document.getElementById('community').value;
            let address = document.getElementById('address').value;
            let course1 = document.getElementById('firstcourse').value;
            let course2 = document.getElementById('secondcourse').value;
            let randomNum = Math.floor(Math.random() * 1000);
            let registrationId = 'GCLC-' + randomNum;
            const today = new Date();

            const ref = firebase.storage().ref();
            const file = document.getElementById('photo').files[0];
            const kname = +new Date() + "-" + file.name;
            const metadata = { contentType: file.type };

            const task = ref.child(kname).put(file, metadata);

            task
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(url => {
                    return docRef.update({
                        formData: firebase.firestore.FieldValue.arrayUnion({
                            registrationNo: registrationId,
                            fisrtname: firstName,
                            surName: surName,
                            email: email,
                            dob: dob,
                            phone: phone,
                            gender: gender,
                            occupation: occupation,
                            lga: lga,
                            community: community,
                            address: address,
                            firstcourse: course1,
                            secondcourse: course2,
                            imageUrl: url,
                            created_at:
                                today.getFullYear() +
                                "-" +
                                (today.getMonth() + 1) +
                                "-" +
                                today.getDate(),
                        }),
                    });
                })
                .then(() => {
                    // Hide spinner & enable button
                    spinner.classList.remove("active");
                    submitBtn.disabled = false;
                    submitBtn.innerText = "Register";

                    swal({
                        title: "Registration",
                        text: "Registration Successful",
                        icon: "success",
                        button: "See acknowledgement slip",
                    }).then(function () {
                        window.location.href = "slip.html";
                    });
                })
                .catch((error) => {
                    console.error(error);
                    // Hide spinner & enable button
                    spinner.classList.remove("active");
                    submitBtn.disabled = false;
                    submitBtn.innerText = "Register";

                    swal("Error", "Something went wrong. Please try again.", "error");
                });
        } else {
            console.log("User not signed in");
            // Hide spinner if user is not logged in
            spinner.classList.remove("active");
            submitBtn.disabled = false;
            submitBtn.innerText = "Register";
        }
    });
}







