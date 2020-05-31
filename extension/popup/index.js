console.log('popup go');

// GLOBALS
let enable = document.querySelector('#enable');
let disable = document.querySelector('#disable')

// Check storage if its disabled or enabled
chrome.storage.sync.get(['medium-for-all'], res => {
    let value = res['medium-for-all'];
    
    // Testing for an empty object
    if (value === undefined) value = 'disabled';

    console.log('VALUE:', value);

    // Initializing enable/disable
    if (value === 'enabled') document.querySelector('#disable').style.display = 'block';
    else document.querySelector('#enable').style.display = 'block';
});

enable.addEventListener('click', () => {
    // Store data via Chrome Storage API
    chrome.storage.sync.set({ 'medium-for-all': 'enabled' }, () => {
        console.log('medium-for-all value set to enabled');
        // Hide/unhide the buttons
        enable.style.display = 'none';
        disable.style.display = 'block';
    });
})

disable.addEventListener('click', () => {
    // Store data via Chrome Storage API
    chrome.storage.sync.set({ 'medium-for-all': 'disabled' }, () => {
        console.log('medium-for-all value set to disabled');
        // Hide/unhide the buttons
        disable.style.display = 'none';
        enable.style.display = 'block';
    });
})
