let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let password = "mrustamov.01";
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let d = 0;
let e = 0;
let c = 0;
function Validate(array, b, num) {
    let pass = array.split("");
    for (let j = 0; j < pass.length; j++) {
        for (let i = 0; i < b.length; i++) {
            for (let r = 0; r < num.length; r++) {
                if(pass[j] == b[i]) {
                    d+=1;
                } else if (pass[j]==num[r]) {
                    e+=1;
                } else if (pass.includes(".")) {
                    c+=1;
                }
            }
        }
    }
    if (pass.length>=8 && d > 0 && e > 0 && c > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(Validate(password, alphabet, number));