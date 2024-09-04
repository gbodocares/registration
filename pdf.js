window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();

function downloadPDF(invoiceNo){

    var elementHTML = document.querySelector("#displayFormData");
    docPDF.html(elementHTML, {
        callback: function(docPDF) {
            docPDF.save(invoiceNo+'.pdf');
        },
        x: 15,
        y: 15,
        width: 105,
        windowWidth: 650
    });
}