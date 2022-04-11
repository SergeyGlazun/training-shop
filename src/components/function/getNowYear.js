function getYear() {
    let today = new Date();
    let year = today.getFullYear();
    return today.getMonth() + year.toString();
}

export {
    getYear
};