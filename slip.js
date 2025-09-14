firebase.auth().onAuthStateChanged((user) => {
    console.log(user.uid);
    if (user) {
        var docRef = db.collection("students").doc(user.uid);
        
        docRef.get().then((doc) => {
         
            if (doc.exists) {
                var formData = doc.data().formData;
                console.log("Document data:", formData);
                // Create a reference to the file we want to download
                
                var displayformData = formData.map((userData) => {
                    //var starsRef = firebase.storage().ref().child(userData.imageName);

                    // Get the download URL
                    /*starsRef.getDownloadURL()
                    .then((url) => {
                    document.getElementById('passportPhoto').src = url;
                    })
                    .catch((error) => {
                        console.log(error)
                    });*/
                    
                    return `<div key=${userData.id}>
                        <div class="row">
                        <div class="col-md-12">
                        <div class="invoice-wrapper">
                        <div class="intro" style="display: flex; column-gap: 10px;">
                            <div><img src="gbodo.png" alt="logo" width="50px" height="50px"/></div>
                            <p style="font-size: 20px;">Free 3-Month Intensive Skills Acquisition Program
                          Organised By the Gbodo Cares Grassroot Foundation</p><br>
                          
                        </div>
                          <span style="font-size: 17px;">9, Omilani Street, Ijeshatedo, Surulere Lagos</span><br>
                            Acknowledgement Slip 
                        <div class="payment-info" style="margin-top: -10px;">
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
                        <div class="payment-details" style="margin-top: -5px;">
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
                         ${userData.community},
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
                        <div class="col-xs-4" style="color:teal; font-weight:bold;">Preferred Course</div>
                        
                        </div>
                        </div>
                        <div class="items" style="margin-top: -10px;">
                        <div class="row item">
                        <div class="col-xs-4 desc" style="font-weight: bold; color: teal;">
                        1. ${userData.firstcourse}
                        </div>
                        <div class="col-xs-5 qty text-right" style="font-weight: bold;">
                        First choice
                        </div>
                       
                        </div>
                        

                        <div>

                        <div class="items" style="margin-top: -10px;">
                        <div class="row item">
                        <div class="col-xs-4 desc" style="font-weight: bold; color: teal;">
                        2. ${userData.secondcourse}
                        </div>
                        <div class="col-xs-5 qty text-right" style="font-weight: bold;">
                        Second choice
                        </div>
                       
                        </div>
                        

                        <div>
                        <b><p>Instructions</p></b>
                        <ol>
                            <li><b>Please ensure you check your preferred course and attend your first choice screening date.</b></li>
                            <li><b>Please come with your acknowledgement slip to the screening venue.</b></li>
                        </ol>
                        <b><h5>Screening Dates</h5></b>
                    <table style="width:100%; ">
                        <tr style=" border: 1px solid #000;">
                            <th style=" border: 1px solid #000; padding-left: 10px;">Courses</th>
                            <th style=" border: 1px solid #000; padding-left: 10px;">Date</th>
                            <th style=" border: 1px solid #000; padding-left: 10px;">Time</th>
                        </tr>

                        <tr style=" border: 1px solid #000;">
                            <td style=" border: 1px solid #000;">
                                <ol style=" margin-left:-10px; font-weight: bold;">
                                    <li>Video Editing</li>
                                    <li>Videography/Photography</li>
                                </ol>
                            </td>
                            <td style=" border: 1px solid #000; padding-left: 10px;">Thur 25th, Sept 2025</td>
                            <td style=" border: 1px solid #000; padding-left: 10px;">10:00am - 4:00pm</td>
                        </tr>


                        <tr style=" border: 1px solid #000;">
                            <td style=" border: 1px solid #000;">
                                <ol style=" margin-left:-10px; font-weight: bold;">
                                    <li>Make-up</li>
                                    <li>Tailoring</li>
                                    <li>Nails Decoration/Acrylic Nails</li>
                                </ol>
                            </td>
                            <td style=" border: 1px solid #000; padding-left: 10px;">Thur 25th, Sept 2025</td>
                            <td style=" border: 1px solid #000; padding-left: 10px;">10:00am - 4:00pm</td>
                        </tr>

                        <tr style=" border: 1px solid #000;">
                            <td style=" border: 1px solid #000;">
                                <ol style=" margin-left:-10px; font-weight: bold;">
                                    <li>Intro to Web Design</li>
                                    <li>Intro to UI/UX Design</li>
                                    <li>Intro to Backend Development</li>
                                </ol>
                            </td>
                            <td style=" border: 1px solid #000; padding-left: 10px;">Fri 26th, Sept 2025</td>
                            <td style=" border: 1px solid #000; padding-left: 10px;">10:00am - 4:00pm</td>
                        </tr>
                    </table>
                </div>
                        </div>
                           
                        <div class="print">
                            <button type="button" onclick="handlePrint()">Print</button>
                        </div>
                            
                        </div>
                        <div class="footer">
                        Copyright ©2024 Gbodo Cares Learning Center.
                        </div>
                        </div>
                        </div>

                        
                    </div>

                    `
                    
                }).join(' ');

                
                document.getElementById('displayFormData').innerHTML = displayformData;
                
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

