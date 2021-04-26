function sendEmails() {
  //Set up some variables
  var startRow = 2; // First row of data to process
  var numRows = 100; // Number of rows to process
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDate();
  var emailSubjectPrefix = 'Reminder: ';
  var urlToGoogleSheet = 'https://docs.google.com/spreadsheets/????????????????????????????????????????????edit#gid=0';

  var sheet = SpreadsheetApp.getActiveSheet();
  // Fetch the range of cells A2:D100
  var dataRange = sheet.getRange(startRow, 1, numRows, 4);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i]; //Get the whole row
    var emailAddress = row[0]; // First column of row
    if (emailAddress != "") //If there is an email address, do something
    {
      var eventDate = new Date(row[1]); //second column of row
      var yearOfEvent = eventDate.getFullYear();
      var monthOfEvent = eventDate.getMonth() + 1;
      var dayOfEvent = eventDate.getDate();
      if (currentYear >= yearOfEvent && (currentMonth > monthOfEvent || (currentMonth == monthOfEvent && currentDay >= dayOfEvent)))
      {
        var subject = emailSubjectPrefix + row[2];  //third column of row
        var message = row[3]; // fourth column of row
        message = "\r\n\r\n" + message + "\r\n\r\n";
        //Add a link to the spreadsheet in the email so people can easily go disable the reminder
        message = message + "\r\nSent on " + currentDate + "\r\nDisable the notification by changing the date on it here: " + urlToGoogleSheet;
        message = message + "\r\nReminder Start Date: " + eventDate
        MailApp.sendEmail(emailAddress, subject, message);
      }
    }
  }
}
