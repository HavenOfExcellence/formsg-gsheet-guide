---
title: Create Connection
description: Create a connection from FormSG to Google Sheet
---

## Step 0: Things you need

- [FormSG Account](https://form.gov.sg/#!/signin)

  - FormSG form with storage mode
  - Secret Key of the form

- [Google Account](https://accounts.google.com/SignUp)
  - Google Sheet (Will create later in the guide)

## Step 1: Go to the website

[Website](https://formsg-gsheet.herokuapp.com/)
![](/formsg-gsheet-guide/screenshots/connection-1-go-to-website.png)

## Step 2: Login into the app

_If you do not have an account you can signup_
![](/formsg-gsheet-guide/screenshots/connection-2-login.png)
You will see the home page of the app
![](/formsg-gsheet-guide/screenshots/connection-3-home-page.png)

## Step 3: Create new connection (part 1)

Click the create new connection button in the home home page
![](/formsg-gsheet-guide/screenshots/connection-3-home-page.png)
You will see the empty form

![](/formsg-gsheet-guide/screenshots/connection-4-create-new-connection-blank.png)

## Step 4: Create Google Sheet

In the previous form, you can see the Google account you need to share your sheet access to.
![](/formsg-gsheet-guide/screenshots/connection-4-create-new-connection-blank.png)
Copy the email address
![](/formsg-gsheet-guide/screenshots/connection-5-copy-service-account-email.png)

Create Google Sheet

![](/formsg-gsheet-guide/screenshots/connection-6-create-google-sheet.png)
Share Google Sheet access with the service account email
![](/formsg-gsheet-guide/screenshots/connection-7-share-google-sheet.png)

You will need to get the ([Google Spreadsheet ID](https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id)) from the URL
You will also need the [FormSG Secret Key](https://guide.form.gov.sg/AdvancedGuide.html#what-is-a-secret-key)

_There is also the option to enter ([sheetID](https://developers.google.com/sheets/api/guides/concepts)) so that you can select which sheet you want the Form Response to fill up_
_Completely optional as it will just fill up your first sheet if you did not specify it_

## Step 5: Create connection (part 2++)

Fill up the rest of the form with the information required
You can get the ([Google Sheet ID](https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id)) from the URL
You will also need the ([FormSG Secret Key](https://guide.form.gov.sg/AdvancedGuide.html#what-is-a-secret-key))
Telegram GroupID will be explained in a different page
![](/formsg-gsheet-guide/screenshots/connection-8-fill-up-form.png)
Once you have created the connection, you can see the following page
![](/formsg-gsheet-guide/screenshots/connection-9-created-connection.png)

## Step 6: Test Connection (Google Sheet part)

At this step, click the `Test Google Sheet Connection` button
![](/formsg-gsheet-guide/screenshots/connection-9-created-connection.png)
You will see the following popup once the test passes
![](/formsg-gsheet-guide/screenshots/connection-9a-test-connection.png)
And your Google Sheet will have a new entry
![](/formsg-gsheet-guide/screenshots/connection-9b-tested-connection.png)
If you have failed to set the share access, you will see the error. If you have the wrong Google Sheet ID, you will see a different error.
![](/formsg-gsheet-guide/screenshots/connection-9c-test-error.png)

**Do not proceed without solving the previous problems**

## Step 7: Settings on the FormSG

Go to the setting tab on your FormSG Form you want to link to the Google Sheet
![](/formsg-gsheet-guide/screenshots/connection-10-formsg-setting.png)
Scroll down to the webhook section
![](/formsg-gsheet-guide/screenshots/connection-11-formsg-setting-webhook.png)
Copy the webhook URL from the (['app'](https://formsg-gsheet.herokuapp.com/))
![](/formsg-gsheet-guide/screenshots/connection-12-webhook-url.png)
Paste the webhook URL into FormSG setting _Note, you might need to deactivate your form to do this step_
![](/formsg-gsheet-guide/screenshots/connection-13-formsg-setting-webhook-url.png)
Activate your form
![](/formsg-gsheet-guide/screenshots/connection-14-formsg-activate.png)
![](/formsg-gsheet-guide/screenshots/connection-15-formsg-activated.png)
Once the form is activated, go to your form
![](/formsg-gsheet-guide/screenshots/connection-16-access-formsg.png)

You might want to enable [webhook retries](https://go.gov.sg/form-webhook-retries) if you want to ensure that all responses will be sent 100%
The app will handle the duplicate entries based on responseIDs (limitation of webhook retries is they might send duplicate entries)

## Step 8: Test Connection (FormSG Part)

And make a test to ensure the link between FormSG and Google Sheet works
![](/formsg-gsheet-guide/screenshots/connection-17-production-test.png)

## Debuging

You can try contacting [francisyzy](https://t.me/francisyzy) if you are stilling facing difficulties.
