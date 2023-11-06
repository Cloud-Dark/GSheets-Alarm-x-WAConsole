function checkTableAndHitAPI() {

  //authentikasi
  var appkey = "";//obtained from the apps menu waconsole.apipedia.id
  var authkey = "";//obtained from the apps menu waconsole.apipedia.id

  //mode standart
  var sheetid = ""; //Please attach ID sheets
  var sheetname = ""; //Name the worksheet here

  //mode developer
  var chunk = 60000; //set a maximum tolerance time limit, for example the time difference between now and the time on the sheets is 1 minute.
  var webhooklink = "https://webhook.site/cbbf2f12-fc1c-4d14-83c4-4f3da0542403";//give a webhook link if you want to see what data is sent / debug mode

  // Get the spreadsheet by ID
  var spreadsheet = SpreadsheetApp.openById(sheetid);
  // Get the sheet by name
  var sheet = spreadsheet.getSheetByName(sheetname);
  // Get the data range
  var range = sheet.getDataRange();
  // Get the values as a 2D array
  var values = range.getValues();
  // Loop through the rows, skipping the header
  for (var i = 1; i < values.length; i++) {
    // Get the id, text, and datetime from the row
    var id = values[i][0];
    var text = values[i][1];
    var datetime = values[i][2];
    var receiver = values[i][3];
    // Convert the datetime to a Date object
    var date = new Date(datetime);
    // Get the current date and time
    var now = new Date();
    // Compare the date and time with a tolerance of 1 minute
    if (Math.abs(date.getTime() - now.getTime()) <= chunk) {
      Logger.log(sendtext(receiver,text,authkey,appkey));
      // If there is a match, hit the API with the id and text as query parameters
      var url = webhooklink+"?text=" + text + "&id=" + id;
      var response = UrlFetchApp.fetch(url);
      // Log the response for debugging
      Logger.log(response.getContentText());
    }
  }
}
