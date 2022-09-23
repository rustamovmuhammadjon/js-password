let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let password = "2h3g52h34";
function Validate(array, b) {
    let pass = array.split("");
    let d = 0;
    let e = 0;
    for (let j = 0; j < pass.length; j++) {
        for (let i = 0; i < b.length; i++) {
            if(pass[j] == b[i]) {
                d+=1;
            } else if (Number(pass[j])) {
                e+=1;
            }
        }
    }
    if (pass.length>=8 && d > 0 && e > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(Validate(password, alphabet));