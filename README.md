# GoogleSheetBasedEmailReminders
Add this script to your Google Sheet to send notification reminders to your group for free.
You can probably do this by clicking the Tools menu and selecting Script Editor.
Paste in this code replacing the function stub the Google sheet provided for you.
You also need to create a trigger in your google sheet.  To do this, select the Edit menu from the script menu and select
Current Project Triggers.  You may need to give your project a name and save it at this point.
Add a trigger.  At the time of this writing in May 2019, you would need to set these values for your trigger:
"Choose which function to run" - probably sendEmails
"Choose which deployment to run" - probably Head
"Select event source" - Time-driven
"Select type of time based trigger" - Day Timer - for once per day
"Select Time of Day" - During what time frame do you want the trigger to run. (GMT Time)
That is it - save that trigger

When you add records to your spreadsheet, I'd make the top row (row 1) just show headers:
Column A: Email Address - this is a single email address or comma separated list of email addresses to send to
Column B: Reminder Begin Date - this is the date at which the reminder will start going out daily
Column C: Subject - This is the subject of the email
Column D: Email Body - This is the body of the email.  Also the code adds some extra stuff to the body of the email.
