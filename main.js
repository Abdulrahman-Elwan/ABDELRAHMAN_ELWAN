function show() {
    let textDis = document.getElementById("textDis")
    textDis.style.display = "block"
}
function hid() {
    let textDis = document.getElementById("textDis")
    textDis.style.display = "none"
}
function show2() {
    let textDis2 = document.getElementById("textDis2")
    textDis2.style.display = "block"
}
function hid2() {
    let textDis2 = document.getElementById("textDis2")
    textDis2.style.display = "none"
}
function show3() {
    let textDis3 = document.getElementById("textDis3")
    textDis3.style.display = "block"
}
function hid3() {
    let textDis3 = document.getElementById("textDis3")
    textDis3.style.display = "none"
}



// Google Sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbw-CdYhw1gCd8FvKwQhrMi5ZxzZNC22ojOmpsiO5F0YxnRuRq2kv7hmfnI8BtILBcWo/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your form is submitted successfully.");
                window.location.reload(); // إعادة تحميل الصفحة بعد نجاح الإرسال
            } else {
                return response.text().then(text => { throw new Error(text) });
            }
        })
        .catch(error => console.error('Error!', error.message));
});



// const sheetName = 'Sheet1';
// const scriptProp = PropertiesService.getScriptProperties();

// function initialSetup() {
//   const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
//   scriptProp.setProperty('KEY', activeSpreadsheet.getId());
// }

// function doPost(e) {
//   const lock = LockService.getScriptLock();
//   lock.tryLock(10000);

//   try {
//     const doc = SpreadsheetApp.openById(scriptProp.getProperty('KEY'));
//     const sheet = doc.getSheetByName(sheetName);

//     const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
//     const nextRow = sheet.getLastRow() + 1;

//     const newRow = headers.map(function(header) {
//       return header === 'Date' ? new Date() : e.parameter[header];
//     });

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

//     return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON);
//   } catch (error) {
//     return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.message }))
//       .setMimeType(ContentService.MimeType.JSON);
//   } finally {
//     lock.releaseLock();
//   }
// }



function sendToWhatsapp(){
    let mailNews = document.getElementById('mail-Newsletter').value;
    var url = "htt"
}

