---
title: FAQ
description: Frequently Asked Questions
---

## How does this work, will it work forever?

When you receive a FormSG Response, it will call my app at herokuapp(free), then it will figure out which spreadsheet it will update, then it will add new row of data into the spreadsheet. If you have a telegram groupId set up, it will also notify the telegram group.

## What if the your app dies, will I lose responses?

No, because of storage mode, the responses will also be stored in FormSG itself

## If I lose access to the Google Sheet, what do I do?

Find the guy that made your Google Sheet, not me. Or you can edit the connection and point it to a new

## I cannot find my Private Key, Help!

I can't help you either, their ([guide](https://guide.form.gov.sg/AdvancedGuide.html#what-is-a-secret-key)) say cannot retrieve, have to reset

## I have a problem with my headers, what do?

You can press the reset header button that can help reset headers

## I have a problem with my FormSG

Ask FormSG support, not me

## Known issues

### Same header name

The package identifies the google sheet headers by their cell text. If they have the same header, the plugin will confuse and not know which one to write to.

So please don't have the same question name in formSG.

### Header modification

That feature isn't done yet. Requested by Richard, he wants to change the order of the headers but I have yet to figure a simple way to do it because manipulating array like that isn't a good idea.

## I can't get things to work properly

You can try contacting [francisyzy](https://t.me/francisyzy) if you are stilling facing difficulties.
