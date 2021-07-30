---
title: Change Log
description: Version Changes to the app
---

## V1.3

- Add support for [webhook retries](https://go.gov.sg/form-webhook-retries)
  - When the webapp fails to receive webhook notification the first time, FormSG will resend the response
  - Might get duplicated. The app will handle duplicates by recording responseIDs (cleared after two weeks)

## V1.2

- Add customisation for telegram notification format
- Add button to reset headers
- Add SheetID to specify which Sheet to enter into. (Optional, Different from Spreadsheet ID)
- Add analytics
- Add duplicate headers warning (Only works after formSG writes to it then can detect duplicate headers)

## V1.1

- Added telegram group notification

## V1.0

- FormSG can be linked to Google Sheets
