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

//const header = document.querySelector('#header');
//console.dir(header);
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const btn_cool = document.querySelector('#btn_cool');
btn_cool.addEventListener('click', () => {
  alert("Hello World");
});