//creates a 6 digit random number separated by a dot in the middle like 123.321
export function generateToken() {
    let len = 3;
    let str = Math.random().toString();
    return str.substring(2, 2 + len) + '-' + str.substring(2 + len, 2 + 2 * len);
}

//given a list of existing tokens, returns a new unique token
export function generateNextToken(list) {
    let token = generateToken();
    return (list.indexOf(token) !== -1) ? generateNextToken(list) : token;
}
