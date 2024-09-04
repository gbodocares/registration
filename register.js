/*let file = {};

const chooseFile1 = (e) => {
  file = e.target.files[0];
}*/


function registerMe(){

    

    firebase.auth().onAuthStateChanged((user) => {
        var docRef = db.collection("students").doc(user.uid);
        console.log(user.uid);
        
        //let image = file;
        //let imageName = image.name;
        console.log(typeof(imageName));
        if (user) {
            console.log('clicked')
            //let uniqueID = uuid.v4();
            //let imageUrl = `/images/${uniqueID}/${image.name}`; // image.name = name of image uploaded
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

           
        
            docRef.update({
                formData: firebase.firestore.FieldValue.arrayUnion(
                    {
                        registrationNo: registrationId,
                        fisrtname: firstName,
                        surName: surName,
                        //imageName: imageName,
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
                        //imageUrl: imageUrl,
                        created_at: today.getFullYear() + "-" + (today.getMonth() +1) + "-" + today.getDate()
                    }
                )
            })

            swal({
                title: "Registration",
                text: "Registration Successful",
                icon: "success",
                button: "See acknowledgement slip"
            }).then(function () {
                window.location.href = "slip.html"
            })
             
        } else {
          console.log('User not signed in')
        }

        /*const ref = firebase.storage().ref().child(imageName);
        ref.put(image)
        .then(function(snapshot){
        console.log(snapshot);
        console.log('Uploading Image to Storage: \n', imageUrl)
        })*/
    });
}





