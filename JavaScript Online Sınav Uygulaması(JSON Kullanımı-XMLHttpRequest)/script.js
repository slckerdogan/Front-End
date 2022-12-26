//!Quizde soracağımız soruları data.json ile tuttuk. Sorular dizi şeklinde olup 6 elemanlı objeler şeklinde oldu.//

//!sunucuyla bağlantıyı sağladık ve bu bağlantıyla beraber soruları ekranda göstermeyi başardık//
let sunucudanDonen;
const baglanti = new XMLHttpRequest();
baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        sunucudanDonen=JSON.parse(baglanti.responseText);
        soruGetir();
    }
    return sunucudanDonen;
};

//!bağlantı değişkeninle data.json dosyasını açarak buraya bağlanmak istediğimizi belirttik
baglanti.open("GET", "data.json", true);
baglanti.send();

const goruntulemeAlani=document.getElementById("sinav"); //ana bloğumuzu çektik
const soruCevabi=document.querySelectorAll(".secenek"); //tüm seçeneklerin radio butonlarını çektik
const soruKismi=document.getElementById("soru"); //soru alanının olduğu yeri çektik

const aciklamaA=document.getElementById("aciklamaA"); //soru şıkkının olacağı label metin alanını çektik
const aciklamaB=document.getElementById("aciklamaB"); //soru şıkkının olacağı label metin alanını çektik
const aciklamaC=document.getElementById("aciklamaC"); //soru şıkkının olacağı label metin alanını çektik
const aciklamaD=document.getElementById("aciklamaD"); //soru şıkkının olacağı label metin alanını çektik

const gonderBtn=document.getElementById("gonder"); //cevabı seçip doğruluğunu test edeceğimiz gönder butonunu çektik

let puan=0;
let sira=0;

//?her sorudan sonra seçimleri sıfırla dedik//
function secimiTemizle(){
    soruCevabi.forEach(secenek => secenek.checked=false);
}

//?sunucuyla bağlantıyı sağlamanın ardından: data.json dosyasındaki sorular dizisinde bulunan şıkları ve sorunun kendisini, soru şıklarının olacağı label alanlarına ve soru metninin olacağı metin alanına çektik//
function soruGetir(){
    secimiTemizle();

    let siradakiSoru=sunucudanDonen.sorular[sira];

    soruKismi.innerHTML=siradakiSoru.soru;
    aciklamaA.innerText=siradakiSoru.A;
    aciklamaB.innerText=siradakiSoru.B;
    aciklamaC.innerText=siradakiSoru.C;
    aciklamaD.innerText=siradakiSoru.D;
}
//?seçlen cevabı tuttuk//
function secimiAl(){
    let secim;
    soruCevabi.forEach(secenek =>{
            if(secenek.checked){
                secim = secenek.id;
            }
        })
    return secim;
}

gonderBtn.addEventListener('click', () =>{
    const secilenCevap=secimiAl();

    if(secilenCevap){
        if(secilenCevap === sunucudanDonen.sorular[sira].dogruCevap){
            puan++;
            sira++;
        }
        else{
            window.alert("Üzgünüz Yanliş Cevap!\n Doğru Cevap: "+ `${sunucudanDonen.sorular[sira].dogruCevap}`);
            sira++;
        }
        

        if(sira < sunucudanDonen.sorular.length){
            soruGetir();
        }
        else{
            goruntulemeAlani.innerHTML=`
            <h2>Mevcut sorular içerisinden ${puan} / ${sunucudanDonen.sorular.length} oraninda başarili oldunuz</h2>
            <button onclick="location.reload()">Yeniden Başla</button>
            `
        }   
    }
})

function showTime() {

    let t=new Date();

    let hour=t.getHours();
    if (hour<10){
        hour="0"+ hour;
    }

    let minute=t.getMinutes();
    if (minute<10){
        minute="0"+ minute;
    }

    let second=t.getSeconds();
    if (second<10){
        second="0"+ second;
    }

    let day=t.getDay();
    if (day==1){
        day="Monday";
    }
    else if (day==2){
        day="Tuesday";
    }
    else if (day==3){
        day="Wednesday";
    }
    else if (day==4){
        day="Thursday";
    }
    else if (day==5){
        day="Friday";
    }
    else if (day==6){
        day="Saturday";
    }
    if (day==0){
        day="Sunday";
    }

    let time=document.querySelector("#myClock");
    time.innerHTML=hour + ":" + minute + ":" + second + " " + day;
    setTimeout(showTime, 1000);
}
showTime();