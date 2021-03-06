# Office Opener
Modern browsers, such as Chrome, Firefox or the new Edge do not allow local contents to be linked from a site served over HTTP(S). This is a security feature, which though hinders some applications, like linking to local office files from a corporate intranet. This extension enables you to open Office files locally from a link. See below for more info

**This only works with new versions of Microsoft Office!**

Confirmed to work on:
- Microsoft 365 MSO (16.0.13530.20490) 64-bit
- Microsoft 365 MSO (16.0.13127.21210) 64-bit

Does not work on:
- Microsoft Office 2016 (16.0.5110.1000) 64-bit

If it works / doesn't work for you, feel free to leave an issue report, and I will add the information to the documentation.

## What does it do

This Webextension enables you to open local Office Files directly from web/intranet pages. This was a functionality present in Internet Explorer and old Edge, but has since been removed from all major browsers.

How to use:
- set a link on your web/intranet page to the file in the format `file:///C:/path/to/the/file`. Note the forward slashes
- install the extension. It will turn all file-links which point to an Office file into [Office-URL compatible links](https://docs.microsoft.com/en-us/office/client-developer/office-uri-schemes)
- click on the link. You should be prompted to select an application with which you want to open the file, choose the appropriate application.
