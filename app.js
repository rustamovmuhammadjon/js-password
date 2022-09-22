let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let password = "1233a534"
function Validate(array, b) {
    let pass = array.split("");
    for (let j = 0; j < pass.length; j++) {
        for (let i = 0; i < b.length; i++) {
            if (pass.length>=8 && pass.includes(b[i])) {
                return true;
            } else {
                return false;
            }
        }
    }
}
console.log(Validate(password, alphabet));