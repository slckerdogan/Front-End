const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()) //elimizdeki arrayyi karıştırmak için kullanılabilecek özel bir metottur

let resultDisplay = document.getElementById('result');
const gridArea = document.getElementById('grid');
let chosenCard = [];
let chosenCardID = [];
const score=[];


function createGrid() { 
    /* oyunumuzun olacağı alanı oluşturduk. Bunun için ilk başta oyundaki resimleri gizli oluşturabilmek adına image elementleri oluşturarak bunlara blank resmini ekledik. Akabinde aynı elementlere tıklama olduğunda oyundaki resimler görünebilsin diye data-id özelliğine ek olarak elemente tıklandığında aktif olacak fonksiyonu addEventListener ile ekledik */

    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridArea.appendChild(card);
    }
}

createGrid();


function flipCard() { 
    /* tıkladığımız elementin id'sine ulaşarak, ismini ve id'sini idlere ve isimlere özel dizilerde depolayıp blank olan alanı id ve name ikilisine ait olan resme çevireceğiz. Böylece resim ekrana gelmiş olacak. Ardından seçilen resim sayısı 2 adet olunca bunların benzerliğini kıyas etmek adına bir adet if döngüsü sayesinde checkMatch fonksiyonu oluşturduk */

    const cardID = this.getAttribute("data-id");
    chosenCard.push(cardArray[cardID].name);
    chosenCardID.push(cardID);
    this.setAttribute("src", cardArray[cardID].img);
    if(chosenCard.length===2){
        setTimeout(checkMatch,500);
    }

}

function checkMatch(){ 
    /* eşleştirme amaçlı flipCard fonksiyonuyla aldığımız resimleri zaten dizilerle tutmuştuk. IDlerin olduğu dizinin birinci ve ikinci elemanını alarak bunlara birer değişken atadık. Ardından resimlerin adları aynıysa id'lere işlem yaptırmak iin if-else döngüsü açtık. If ile, resimler aynıysa iki resmin yerini beyaz bir resmin almasıyla beraber flipCard fonksiyonunun ikisindende kaldırılmasını sağladık. Akabinde aynı olan resimler bir adet score adlı başka bir diziye atıldı ve bu dizi tüm resimlerin olduğu dizinin yarı uzunluğuna ulaştığında mesaj verildi. Else ile resimler farklılarsa tekrardan blank resminin gelmesini sağladık. */
    const cards=document.querySelectorAll("#grid img");
    
    const chosenCardOneID= chosenCardID[0];
    const chosenCardTwoID= chosenCardID[1];

    if(chosenCard[0] == chosenCard[1]){
        cards[chosenCardOneID].setAttribute("src","images/white.png");
        cards[chosenCardTwoID].setAttribute("src","images/white.png");
        cards[chosenCardOneID].removeEventListener('click', flipCard)
        cards[chosenCardTwoID].removeEventListener('click', flipCard)
        score.push(chosenCard);
        console.log(score);
    }

    else{
        cards[chosenCardOneID].setAttribute("src","images/blank.png");
        cards[chosenCardTwoID].setAttribute("src","images/blank.png");
    }

    resultDisplay.textContent = score.length;
    chosenCard = [];
    chosenCardID = [];

    if(score.length==cardArray.length/2){
        resultDisplay.innerHTML ="Tebrikler kazandınız!"
    }

}

