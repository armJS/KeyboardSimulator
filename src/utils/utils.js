export function randomCharArray (length) {
    let arr = [];
    const possible = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < length; i++) {
        arr.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    }
    return arr;
}