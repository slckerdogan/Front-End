//!REMOVECHART HARİÇ HEPSİ KUSURSUZ ÇALIŞTI AMA O ÇALIŞMAYINCA SİSTEM KOMPLE HATA VERİYOR O KÖTÜ VE ÇÖZMEMİZ LAZIM
//!YARARLANDIĞIM PROJE LİNKİ => https://codepen.io/eminbasbayan/pen/RwZweJm
//!AMAÇ BU SORUNU ÇÖZEMESEK BİLE PROEYİ İSTEĞİMİZ DOĞRULTUSUNDA GELİŞTİRMEK OLSUN VE GİTHUBA ATALIM ÇÜNKÜ ÇOK SORUNLUYDU VE ÇÖZMEK ADINA BAYA EMEK VERDİK!!!!

const card = document.getElementsByClassName("card");
const btnAdd = document.getElementsByClassName("btn-info");
const btnCart = document.querySelector(".btn-cart");
const cartList = document.querySelector(".shopping-cart-list");

class Shopping { //almak istediğimiz ürünlerin gösterildiği alana ilgili ürünün bilgilerini taşımak için Shopping classını oluşturduk
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI { //Shopping classındaki bilgileri alışveriş sepeti butonunun orada tutmak için bu sınıfı oluşturduk. Bu sayede Shopping sınıfındaki tutulan ürün bilgilerini kullanıcıya gösterdik "addToCart(shopping)" ile!!!!
    addToCart(shopping) {
        const listItem = document.createElement("div");
        listItem.classList = "list-item";
        listItem.innerHTML =
            `
        <div class="row align-items-center text-white-50">
            <div class="col-md-3">
                <img src="${shopping.image}" alt="product" class="img-fluid">
            </div>
            <div class="col-md-5">
                <div class="title">${shopping.title}</div>
            </div>
            <div class="col-md-2">
                <div class="price">${shopping.price}</div>
            </div>
            <div class="col-md-2">
                <button class="btn btn-delete bg-white rounded-pill">
                    <i class="fas fa-trash-alt text-danger"></i>
                </button>
            </div>
        </div>
        `
        cartList.appendChild(listItem);
    };

    removeCart(){  //"addToCart(shopping)" ile tutulan bilgilerin olduğu alanı temizliyoruz
        let btnRemove=document.getElementsByClassName("btn-delete"); //alışveriş sepeti butonun altndaki alanda bulunan tüm ürünlerin butonlarına ulaştık
        let self=this;  //silmek istediğimiz ürünün butonuna ulaştık ve ardından ilgili ürünü kaldırdık
        for(let i=0;i<btnRemove.length;i++){
            btnRemove[i].addEventListener("click",function(){
                this.parentElement.parentElement.parentElement.remove();
                self.cartCount();
            });
        }
    }

    //ALIŞVERİŞ SEPETİNDEKİ ÜRÜN MİKKTARINI YAZIYOR
    cartCount() {
        let cartListItem = cartList.getElementsByClassName("list-item");
        let itemCount = document.getElementById("item-count");
        itemCount.innerHTML = cartListItem.length-1;
    }

    //ALIŞVERİŞ SEPETİ BUTONUNU AÇMA KAPAMA ALANI
    cartToggle() {
        btnCart.addEventListener("click", function () {
            cartList.classList.toggle("d-none");
        })
    }
}


for (let i = 0; i < card.length; i++) {  //ürün kartlarının içinde dönerek, bu kartlarda bulunan "Add to Cart" butonlarına işlev ekledik. Bu işlev sayesinde ürünün adı,fiyatı ve resmini Shopping classına aktaracağız. Ardından ise bunları alışveriş sepeti butonunun orada göstermek için, yine oradan silmek için ve alışveriş sepetindeki ürün miktarını göstermek için UI adlı sınıfta bulunan fonksiyonlara aktaracağız. 
    btnAdd[i].addEventListener("click", function (e) {
        let title = card[i].getElementsByClassName("card-title")[0].textContent;
        let price = card[i].getElementsByClassName("price")[0].textContent;
        let image = card[i].getElementsByClassName("card-img-top")[0].src;

        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent = "Added";

        let shopping = new Shopping(image, title, price);
        let ui = new UI;

        ui.addToCart(shopping);
        ui.removeCart();
        ui.cartCount();

        


        e.preventDefault();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let ui = new UI();

    ui.cartToggle();
})