let urunTipi,urunSecimi,Urunadedi,Uruntaksidi;
let araToplam,kargoTutar,toplamTutar;
var i;
var liste,secenek;
var ErkekUrunListesi=["TOM FORD NOIR",1500,"CHANEL BLEU DE CHANEL",1450,"PACO RABANNE 1 MILLION",1400,
"DIOR SAUVAGE",1350,"CREED AVENTUS",1300,"GIORGIO ARMANI Acqua Di Gio",1250,
"VERSAGE EROS",1200,"HUGO BOSS HUGO DARK BLUE",1150,"CAROLINE HERRARA 212",1100,"GUCCI GUILTY OUD",1050];
var KadınUrunListesi=["Burberry - Burberry Classic",1500,"Christian Dior - Hypnotic Poison",1450,"Paco Rabanne - Lady Million",1400,
                "Chanel - Chance",1350,"Chanel - N°5",1300,"Guerlain - Mon Guerlain",1250,
                "Lancôme - La Vie est Belle",1200,"Viktor & Rolf - Flowerbomb",1150,"Chloé - Signature",1100,"Carolina Herrera - Good Girl",1050];


function UrunAdediSayisi(){
    for(i=1;i<101;i++){
        secenek=document.createElement("option");
        liste=document.getElementById("UrunAdedi");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}

function UrunTaksidiSayisi(){
    for(i=0;i<13;i=i+3){
        secenek=document.createElement("option");
        liste=document.getElementById("UrunTaksit");
        liste.options.add(secenek);
        secenek.text=i;
        secenek.value=i;
    }
}
function urunlerigoster(){ //erkek veya kadın ürünü görmek istediğimizi belirtip ona göre seçim yaptırıp ekrana o kategorilerin ürünlerini gösterdik

    document.querySelectorAll("#UrunListesi option").forEach(option =>option.remove()); //Ürün listesinde yarattığımız option elementinin içindeki elemanları temizledik her seçim öncesi

    liste=document.getElementsByName("Uruntipi")   //kolaylık olsun diye UrunTipi özelliğini alıp bir değişkene aktardık
    for(i=0;i<liste.length;i++){
        if(liste[i].checked){
            urunTipi=liste[i].value;
        }
    }
    if(urunTipi=="E"){
        for(i=0;i<ErkekUrunListesi.length;i=i+2){
            secenek=document.createElement("option");  //ürün listesini ekranda yazdırmak için bir element yarattık ve onu değişkene eşitledik
            liste=document.getElementById("UrunListesi");  //kolaylık olsun diye UrunListesi özelliğini alıp bir değişkene aktardık
            liste.options.add(secenek);  //liste değişkenine ürün listesini ekrana yazdırmak için oluşturduğumuz secenek değişkenini atadık
            secenek.text=ErkekUrunListesi[i]; //secenek değişkeni Erkek ürünlerinin listesindeki tüm elementleri dolaşarak oradaki elemanları aldı ve text olarak ürün listesine atadı. Kullanıcı Erkek ürünlerini görmek istediğinde ekrana böylece gösterilmesi sağlanıyor
            secenek.value=ErkekUrunListesi[i+1]; //value kısmında ürün fiyatlarını tuttuk ekrana yazdırmadık. valueda olan her fiyat kendinden önce gelen text'in fiyatını temsil ediyor
        }
    }
    else if(urunTipi=="K"){
        for(i=0;i<KadınUrunListesi.length;i=i+2){
            secenek=document.createElement("option"); //ürün listesini ekranda yazdırmak için bir element yarattık ve onu değişkene eşitledik
            liste=document.getElementById("UrunListesi"); //kolaylık olsun diye UrunListesi özelliğini alıp bir değişkene aktardık
            liste.options.add(secenek); //liste değişkenine ürün listesini ekrana yazdırmak için oluşturduğumuz secenek değişkenini atadık
            secenek.text=KadınUrunListesi[i]; //secenek değişkeni Kadın ürünlerinin listesindeki tüm elementleri dolaşarak oradaki elemanları aldı ve text olarak ürün listesine atadı. Kullanıcı Kadın ürünlerini görmek istediğinde ekrana böylece gösterilmesi sağlanıyor
            secenek.value=KadınUrunListesi[i+1]; //value kısmında ürün fiyatlarını tuttuk ekrana yazdırmadık. valueda olan her fiyat kendinden önce gelen text'in fiyatını temsil ediyor
        }
    }
}

function tutarHesapla(){
    liste=document.getElementById("UrunListesi");
    urunSecimi=liste[liste.selectedIndex].value;

    liste=document.getElementById("UrunAdedi");
    Urunadedi=liste[liste.selectedIndex].value;

    liste=document.getElementById("UrunTaksit");
    Uruntaksidi=liste[liste.selectedIndex].value;

    if(Uruntaksidi==0){
        araToplam=urunSecimi*Urunadedi;
    }
    else if(Uruntaksidi==3){
        araToplam=urunSecimi*Urunadedi*1.1;
    }
    else if(Uruntaksidi==6){
        araToplam=urunSecimi*Urunadedi*1.2;
    }
    else if(Uruntaksidi==9){
        araToplam=urunSecimi*Urunadedi*1.3;
    }
    else{
        araToplam=urunSecimi*Urunadedi*1.4;
    }
    document.getElementById("AraTutar").value=Number(araToplam.toFixed(2));

    if(araToplam>1299){
        kargoTutar=0;
        toplamTutar=araToplam+kargoTutar;
        
    }
    else{
        kargoTutar=99.99;
        toplamTutar=araToplam+kargoTutar;
        
    }
    document.getElementById("KargoTutar").value=kargoTutar;
    document.getElementById("BirimFiyat").value=urunSecimi;
    document.querySelector("#result").innerHTML = "Toplam Tutar Miktarı: " + toplamTutar + " TL";
}
function Ode(){
    if(isNaN(toplamTutar)){
        window.alert('HATA!!!');
        window.location.reload();
    }
    else{
        let text = "Ödeme Alanına İlerliyorsunuz!";
        if (confirm(text) == true) {
            window.alert('Ödeme İşlemi Başarılı!');
            window.location.reload();
        } 
        else {
            window.alert('Ödeme İşlemi Başarısız!');;
        }
    }
}