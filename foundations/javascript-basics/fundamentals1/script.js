console.log("Hello World!");

function capitalize (str) {
    let lower = str.toLowerCase();

    let tab = lower.split("");
    tab[0] = tab[0].toUpperCase();

    let res = tab.join("");

    return res;
};

function lastLetter (str) {
    let tab = str.split("");
    return tab[str.length - 1];
};

let s1 = "sAluT mOn Gars";
console.log(s1);
s1 = capitalize(s1);
console.log(s1);
console.log(s1.length);
console.log(lastLetter(s1))