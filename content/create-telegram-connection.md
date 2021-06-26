---
title: Create Telegram Connection
description: Create a connection to link FormSG to a Telegram Group
---

## Step 0: Things you need

- Telegram Account
  - [Telegram Group](https://telegram.org/tour/groups): Preferably a group with message history ([supergroup](https://telegram.org/blog/supergroups)) so new members can see whats going on? but it will work with normal group
- An existing Connection (from the previous guide)
  - If you do not have an existing connection, you can create one following the previous guide, just that you need to come back to this guide to complete the Telegram section

## Step 1: Go to the website

[Website](https://formsg-gsheet.herokuapp.com/)
![](/formsg-gsheet-guide/screenshots/connection-1-go-to-website.png)

## Step 2: Login into the app

_If you do not have an account you can signup_
![](/formsg-gsheet-guide/screenshots/connection-2-login.png)
You will see the home page of the app
![](/formsg-gsheet-guide/screenshots/connection-3-home-page.png)

## Step 3: Edit connection

_If you do not have an existing connection, you can create one. Guide at a different page_

![](/formsg-gsheet-guide/screenshots/telegram-1-edit-connection.png)

## Step 4: Add Telegram Group ID

You will need to get the ([Telegram Group ID](https://stackoverflow.com/a/46247058)) by adding ([@RawDataBot](https://t.me/raw_data_bot)) _(It came to my attention that it is no longer functional)_ or adding ([@getidsbot](https://t.me/getidsbot)) or check the ([Stackoverflow for new solutions](https://stackoverflow.com/a/46247058)). Don't forget to kick the bot out once you retrieve the Group ID

You will also need to add the bot: ([@FormSG_Telegram_Notify_bot](https://t.me/FormSG_Telegram_Notify_bot)) into the group

![](/formsg-gsheet-guide/screenshots/telegram-2-add-telegram-group.png)

## Step 5: Test Connection (Telegram Bot part)

Click the `Test Telegram Connection` button
![](/formsg-gsheet-guide/screenshots/telegram-3-test-connection.png)
You will see a pop up and you can check your Telegram Group to see if there is a connection
![](/formsg-gsheet-guide/screenshots/telegram-4-tested-connection.png)

## Step 5.1: Choose your notification format (optional)

By default the telegram notification output will be a table style.

Sample:

```
┌───────────────────────────────────────────────┬───────────────────────────────┐
│ timestamp                                     │ 062621 0250                   │
│ Have you been enjoying the test hook?         │ No                            │
│ If No, Why Not?                               │ asd                           │
│ Dropdown                                      │ Select TWO                    │
│ Table (How will a table work tho, Text Field) │ asd,YES,asd,YES               │
│ Date                                          │ 13 Jun 2021                   │
│ Rating                                        │ 5                             │
│ Checkbox one option                           │ I hAve del=eared that i m ppt │
│ Checkbox THREE                                │ TWO                           │
└───────────────────────────────────────────────┴───────────────────────────────┘
```

This formatting will look weird if your phone screen is too small or responses are too long.

If you don't like this formatting, you can change it to a non table format by adjusting it in the drop down menu.

You can preview both formats with the button to test the format using sample data.

## Step 6: Test Connection (FormSG Part)

Go to your Form and test the connection to see if it works

## Debuging

You can try contacting [francisyzy](https://t.me/francisyzy) if you are stilling facing difficulties.
