export function getTextHeight(text, fontSize = 14) {
    let width = 0;
    let html = document.createElement("span");
    html.innerText = text;
    html.className = 'getTextHeight';
    html.style.fontSize = fontSize +'px';
    document.querySelector('body').appendChild(html);
    width = document.querySelector('.getTextHeight').offsetWidth;
    document.querySelector('.getTextHeight').remove();
    return width
}