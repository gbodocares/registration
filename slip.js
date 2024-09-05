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
                        <div><img src="free.png" alt="free" width="150px" height="150px"/></div>
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
                            <div class="total " style="display:flex; flex-direction: column;">
                                <p class="">
                                    <strong>Please note:</strong><br>
                                    1. Selections will be on first come first serve basis.<br>
                                    2. There are limited number of slots for each course, your final course will depend on the two (2) choices you made.<br>
                                    3. There will be screening for all courses, hence you must bring your acknowledgement slip to the address above for screening.<br>
                                    4. <b style="color: red;">Registration closes on Tuesday, 10th, September 2024 11:59pm</b>.<br/>
                                    5. <b style="color: teal;">Screening starts Wednesday 11th, September 2024 to Friday, 13th September 2024. 10:00am - 4:00pm daily</b>
                                    <br>
                                    <br>
                                    <b>Screening Schedule</b>
                                </p>
                                

                                <div>
                                    <table style="width:100%;">
                                        <tr style=" border: 1px solid #000;">
                                            <th>Courses</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                        </tr>

                                        <tr style=" border: 1px solid #000;">
                                            <td>
                                                <ul>
                                                    <li>Make-up</li>
                                                    <li>Tailoring</li>
                                                    <li>Nails Decoration</li>
                                                </ul>
                                            </td>
                                            <td >Mon 16th, Sep 2024</td>
                                            <td >10:00am - 4:00pm</td>
                                        </tr>

                                        <tr style=" border: 1px solid #000;">
                                            <td>
                                                <ul>
                                                    <li>Videography</li>
                                                    <li>Video Editing</li>
                                                </ul>
                                            </td>
                                            <td>Tue 17th, Sep 2024</td>
                                            <td>10:00am - 4:00pm</td>
                                        </tr>

                                        <tr style=" border: 1px solid #000;">
                                            <td>
                                                <ul>
                                                    <li>Web Design</li>
                                                    <li>Backend Development</li>
                                                    <li>UI/UX Design</li>
                                                </ul>
                                            </td>
                                            <td>Wed 18th, Sep 2024</td>
                                            <td>10:00am - 4:00pm</td>
                                        </tr>
                                    </table>
                                </div>
                                <br>
                                <div class="print">
                                    <a href="#" onclick="handlePrint()">
                                    <i class="fa fa-print"></i>
                                    Print Slip
                                    </a>

                                    <button type="button" onclick="downloadPDF()">Download PDF</button>
                                </div>
                            </div>

                            
                        </div>
                        <div class="footer">
                        Copyright ©2024 Gbodo Cares Learning Center.
                        </div>
                        </div>
                        </div>
                    </div>`
                    
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

