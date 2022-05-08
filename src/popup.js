// Copyright© Faisal A.

// POPUP [ popup.js ]
// Script for the extension's popup-page.

const body = document.querySelector('body');
const btnChangeWidth = document.querySelector('.btnChangeWidth');
const inp = document.querySelector('.inp');

// [ NOT CURRENTLY USED ]
let isShortened = false;

// Add listener to the button
btnChangeWidth.addEventListener('click', async () => {
    
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    
    chrome.scripting.executeScript({ 
        target: { tabId: tab.id } ,
        args: [inp.value],
        func: changeWidthOfBody
    });
});

/**
 * Change the width of the body and center it.
 * 
 * @param {Number} toNewWidth The new width in pixels. Can be null.
 */
function changeWidthOfBody(toNewWidth) {
    let w = toNewWidth;

    // If the input had no value, assume it's 900px
    if (!toNewWidth) {
        w = 900;
    }

    let body = document.querySelector('body');

    // Set the width of the body
    body.style.width = `${w}px`;

    // Set the margin of the body so it's centered
    body.style.marginTop = 0;
    body.style.marginBottom = 0;
    body.style.marginLeft = 'auto';
    body.style.marginRight = 'auto';
}