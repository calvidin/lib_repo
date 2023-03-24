module.exports = {
    isValid: isValid,
    isEmptyString: isEmptyString
}


function isValid(data) {
    if (data !== null && data !== undefined) {
        return true;
    } else {
        return false;
    }
}

function isEmptyString(data) {
    if (data === '' || data === ' ') {
        return true;
    } else {
        return false;
    }
}