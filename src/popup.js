const body = document.querySelector('body');
const btnChangeWidth = document.querySelector('.btnChangeWidth');
const inp = document.querySelector('.inp');

let isShortened = false;

// Change the width of the website when the button is clicked
btnChangeWidth.addEventListener('click', async () => {
    
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    
    chrome.scripting.executeScript({ 
        target: { tabId: tab.id } ,
        args: [inp.value],
        func: modifyWebpage
    });
});

function modifyWebpage(newWidth) {
    let w = newWidth;

    if (!newWidth) {
        w = 900;
    }

    let body = document.querySelector('body');
    body.style.width = `${w}px`;
    body.style.marginTop = 0;
    body.style.marginBottom = 0;
    body.style.marginLeft = 'auto';
    body.style.marginRight = 'auto';
}