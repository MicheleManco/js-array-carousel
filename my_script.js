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

const contItems = document.getElementById("items");
const contThumbs = document.getElementById("thumbs")

for (let i = 0; i < items.length; i++){
    contItems.innerHTML += `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="${text[i]}">
            <h2>${title[i]}</h2>
            <p>sdoegnsgkng</p>
        </div>
    </div>`;
    contThumbs.innerHTML += `
    <div class="thumb">
        <img src="${items[i]}" alt="">
    </div>`
}