import '../scss/main.scss';

/* place your code below */


const textArea = document.querySelector('.textarea--js');
const load = document.querySelector('.load--js');
const save = document.querySelector('.save--js');

const currentValue = localStorage.getItem('entry');
if (currentValue) {
    document.querySelector('.info--js').innerHTML = '*';
}

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry', textArea.value);
    if (textArea.value){
        document.querySelector(".info--js").innerHTML = "*";
    } else {
        document.querySelector(".info--js").innerHTML = "";
    }
});
load.addEventListener('click', (e) => {
    e.preventDefault();
    textArea.value = localStorage.getItem('entry');
})