export const createDivElement = (title) => {
    const div = document.createElement('div');
    div.innerHTML = title;
    return div;
}

export const createStyledParagraphElement = (text) => {
    const p = document.createElement('p');
    p.innerHTML = text;
    p.style = 'background-color: red; color: black;'
    return p;
}