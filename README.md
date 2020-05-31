<div align="center">
    <img src="./assets/logo.png" width=100 height=100/>
    <br>
    <br>

 [![](https://img.shields.io/badge/Made_with-Flask-blue?style=for-the-badge)](https://flask.palletsprojects.com/en/1.1.x/ "Flask")

  [![](https://img.shields.io/badge/Made_using-Chrome_API-green?style=for-the-badge)](https://developer.chrome.com/extensions/devguide "ChromeAPI")
</div>

# medium-for-all

Chrome extension to access private articles on medium without having to open them in incognito mode.

## How to use
- Download zip file or clone the repository
- Go to Manage Extension
- Select Load Unpacked options
- Select the directory where you have this project downloaded and you are good to go

## TODO

- [ ] Make it real time by setting up message passing between `content script` and `popup`. 
> Currently requires a manual page refresh after enabling the extension.
- [ ] Cache recent requests to scraper using `chrome.storage.sync`.
