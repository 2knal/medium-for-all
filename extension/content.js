console.log('content go');

chrome.storage.sync.get(['medium-for-all'], (res) => {
    console.log('Value:', res['medium-for-all']);
    const value = res['medium-for-all'];
    if (value === 'enabled') URLHandler()
});

async function requestHandler(url) {
    console.log('requesting scraper', url);
    const data = await fetch(`https://medium-for-all.herokuapp.com/fetch?url=${url}`);
    const json = await data.json();
    return json;
}

function isPrivate() {
    return document.querySelector('.star-15px_svg__svgIcon-use') != null;
}

async function URLHandler() {
    const URL = window.location.href;
    const websites = [
        'medium.com',
        'towardsdatascience.com',
        'codeburst.io',
        'itnext.io',
        'blog.bitsrc.io',
        'levelup.gitconnected.com ',
        'uxdesign.cc',
        'blog.usejournal.com',
        'uxplanet.org',
        'blog.prototypr.io',
    ]
    try {
        let flag = false;
        for (let i=0; i<websites.length; i++) {
            if (URL.includes(websites[i])) {
                flag = true;
                break;
            }
        }
        const link = document.querySelector("link[rel='search']");
        if ((link != null && link.title.toLowerCase() === 'medium') || flag) {
            const data = await requestHandler(URL);
            // Implies an article page
            if (data.success && !data.data.body.includes('None')) {
                // Check if its a private article or not
                if (isPrivate()) {
                    console.log('We are in boys!');
                    const { head, body } = data.data;
                    document.querySelector('html').innerHTML = `
                        ${head}
                        ${body}
                    `;
                }
            }
        } // else console.log('Not a medium website!');
    } catch (err) {
        console.error('Error:', err);
    }
}
