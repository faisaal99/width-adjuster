/*******************************************************************************
MIT License

Copyright (c) 2023 Faisal A.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*******************************************************************************/

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
