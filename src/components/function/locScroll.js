function locScroll(click) {
    let Body = document.body;

    if (click) {
        Body.classList.add('lock');

    } else {
        Body.classList.remove("lock");
    }
}

export {locScroll};