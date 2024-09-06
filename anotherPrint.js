
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      var uid = user.uid;
      
      var docRef = db.collection("students").doc(uid);
      // ...
      docRef.get().then((doc) => {
        if (doc.exists) {
            var userDatas = doc.data().formData;
            console.log("Document data:", userDatas);
            var displayReprint = userDatas.map((userData) => {
                return  `<div>
                <div class="row">
                <div class="col-md-12">
                <div class="invoice-wrapper">
                <div class="intro">
                <div><img src="gbodo.png" alt="logo" width="50px" height="50px"/></div>
                <br>
                <b style="font-size: 20px;">Free 3-Month Intensive Skills Acquisition Program 2024 Batch B</b><br>
                <b style="font-size: 17px;">Organised By the Gbodo Cares Grassroot Foundation</b><br>
                <span style="font-size: 17px;">9, Omilani Street, Ijeshatedo, Surulere Lagos</span><br>
                 Acknowledgement Slip 
                </div>
                <div class="payment-info">
                <div class="row">
                <div class="col-sm-6">
                <span>Registration Id:</span>
                <strong>${userData.registrationNo}</strong>
                </div>
                <div class="col-sm-6 text-right">
                <span>Registration Date</span>
                <strong>${userData.created_at}</strong>
                </div>
                </div>
                </div>
                <div class="payment-details">
                <div class="row" >
                <div class="col-sm-6">
                <span style="font-weight: bold; color:teal;">Participant Details</span>
                <strong>Full name:</strong> 
                ${userData.surName}
                ${userData.fisrtname}
                
                <p>
                    <strong>Gender:</strong> ${userData.gender}<br>
                     <strong>Mobile number:</strong> 0${userData.phone}<br>
                    <strong>Occupation:</strong> ${userData.occupation}<br>
                </p>
                <p>
                 ${userData.address} <br>
                 ${userData.community}
                 ${userData.lga}<br>
                <a href="#">
                <span class="__cf_email__" data-cfemail="98f2f7f6f6e1fcfdfefed8fff5f9f1f4b6fbf7f5">${userData.email}</span>
                </a>
                </p>
                </div>
                 <div><img src="${userData.imageUrl}" alt="free" width="150px" height="150px" style="border: 2px solid #000; border-radius: 4px;"/></div>
                </div>
                </div>
                <div class="line-items">
                <div class="headers clearfix">
                <div class="row">
                <div class="col-xs-4" style="color:teal; font-weight:bold;">Course(s)</div>
                <div class="col-xs-5 text-right" style="color:teal; font-weight:bold;">Choice(s)</div>
                </div>
                </div>
                <div class="items">
                <div class="row item">
                <div class="col-xs-4 desc" style="font-weight: bold;">
                ${userData.firstcourse}
                </div>
                <div class="col-xs-5 qty text-right" style="font-weight: bold;">
                First choice
                </div>
               
                </div>
                <div class="row item">
                <div class="col-xs-4 desc" style="font-weight: bold;">
                 ${userData.secondcourse}
                </div>
                <div class="col-xs-5 qty text-right" style="font-weight: bold;">
                Second choice
                </div>
              
                </div>
                <div class="row item">
               
                
               
                </div>
                </div>
                   
    
                    
                </div>
                <div class="footer">
                Copyright ©2024 Gbodo Cares Learning Center.
                </div>
                </div>
                </div>
            </div>`
               
            })

            document.getElementById('displayFormData').innerHTML = displayReprint;
           
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    
    } else {
      // User is signed out
      // ...
    }
  });
