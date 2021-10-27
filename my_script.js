const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//scrivere cinque div .item con dentro un img e un div con un h2 e un p => for ()
    //il loro contenuto deve cambiare in base alla loro posizione nell'array => contenuto[i]
    //assegnare la classe active 
//creare cinque div .thumb con dentro un div contenente un img => for 
    //limg deve cambiare in base alla loro posizione array => contenuto[i]
    //assegnare la classe active 
//quando premo il pulsante next  => addeventlistener
    // mettere l'active all'elemento dopo e togliere a quello precedente
        // selezionare l'elemento che ci interessa per togliere l'active
        //selezionare l'elemento che ci interessa per metterel'active
    //se l'active è sull'ultimo elemento => if (getelementbyclassname("item").lenght< positionactive){activeposition=0}



const contItems = document.getElementById("items");
const contThumbs = document.getElementById("thumbs");
let item ="";
let thumb = "";
const next = document.getElementById("next")
const prev = document.getElementById("prev")


for (let i = 0; i < items.length; i++){
    item += `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h2>${title[i]}</h2>
            <p>${text[i]}</p>
        </div>
    </div>`;
    thumb += `
    <div class="thumb">
        <img src="${items[i]}" alt="">
    </div>`
}
contItems.innerHTML = item;
contThumbs.innerHTML += thumb;

document.getElementsByClassName("item")[0].classList.add("active")
document.getElementsByClassName("thumb")[0].classList.add("active")


let positionActive = 0;

document.getElementById("next").addEventListener('click',
    function(){
        ++positionActive;
        document.getElementsByClassName("item")[positionActive -1].classList.remove("active")
        document.getElementsByClassName("item")[positionActive].classList.add("active")
        document.getElementsByClassName("thumb")[positionActive -1].classList.remove("active")
        document.getElementsByClassName("thumb")[positionActive].classList.add("active")
    }
);

