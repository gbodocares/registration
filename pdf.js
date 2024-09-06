window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();

// function downloadPDF(invoiceNo){

//     var elementHTML = document.querySelector("#displayFormData");
//     docPDF.html(elementHTML, {
//         callback: function(docPDF) {
//             docPDF.save(invoiceNo+'.pdf');
//         },
//         x: 15,
//         y: 15,
//         width: 105,
//         windowWidth: 650
//     });
// }

 function downloadPdf() {
    
    const element = document.getElementById('displayFormData'); // Get the HTML element to be converted to PDF
    html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data
    const pdf = docPDF; // Initialize jsPDF
    const imgProps = pdf.getImageProperties(imgData);
    console.log(imgProps);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Add image to PDF
    pdf.save('converted-document.pdf'); // Save PDF
    });
}