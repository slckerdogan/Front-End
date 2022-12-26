class Kitap {
    constructor(kitapAdi, kitapYazari, kitapISBN) { //!kitap için kullanıcıdan alacağımız parametreleri constructor ile eşleştirmesini yaptık. Böylece kullanıcının girdiği özellikleri yapılandırmış olduk. bunu yaparken this özelliğinden faydalandık
        this.kitapAdi = kitapAdi;
        this.kitapYazari = kitapYazari;
        this.kitapISBN = kitapISBN;
    }
}

class Arayuz { //!arayüzde yapacağımız işlemlerin fonksiyonlarını tanımladık
    kitapEkle(kitap) { //!ekleyeceğimiz kitaplara ait fonksiyon. İçinde bulunan kitap değeri aşağıda bulunan kitap nesnesi aracılığıyla aldığımız özelliklerden geliyor. Bu yüzden fonksiyonu parametreli olarak tanımladık

        const tablo = document.getElementById("kitapListesi") //!kitapları ekleyeceğimiz tabloyu çağırdık

        const satir = document.createElement("tr"); //!tablo için satır oluşturacağız dedik

        satir.innerHTML = `
        <td>${kitap.kitapAdi}</td>
        <td>${kitap.kitapYazari}</td>
        <td>${kitap.kitapISBN}</td>
        <td><a href="#" class="delete">X</a></td>
        `;  //!satirda olacak elementleri td bloklari ile oluşturduk

        tablo.appendChild(satir); //!oluşan satiri tabloya ekledik
    }

    mesajGoster(mesaj,className) { //!ekleyeceğimiz kitapların eklendi / silindi özelliğini gösteren fonksiyon

        const messageBox=document.createElement("div"); //!mesajın gözükeceği div kısmını oluşturduk bir değişken ile

        messageBox.className=`alert ${className}`;   //!div kısmında hem kitap eklendi hem de kitap silindi gözükeceğinden div etiketini oluşturduğumuz değişkene sen sınıf isminle gel ona göre işlem yapacağız dedik

        messageBox.appendChild(document.createTextNode(mesaj)); //!mesajı oluşturcağız ama yeri belli değil o yüzden bir text node yaratalım dedik

        const container= document.querySelector("#container"); //! ana divimizin id'sini aldık 

        const form=document.querySelector("#formKitap");  //!form etiketinin olduğu id'yi aldık

        container.insertBefore(messageBox,form); //!form ve ana div etiketlerinin id'leri almamızın sebebi mesajı nereye koyacağımızı belirlemekti ve böyle yaparak form kısmından önce koyacağız seni dedik

        setTimeout(function(){  //!koyduğumuz mesaj 7/24 durmasına gerek yok 3 saniye çalış sonra kendini kaldır dedik

            document.querySelector(".alert").remove()
        },3000);

    }


    kitapSayisi() { //!ekledeğimiz kitapların sayısını gösteren fonksiyon

        const tablo=document.getElementById("kitapListesi"); //!tablodaki tam listeyi aldık
        var kayitSayisi=document.getElementsByTagName("tr").length-1; //!listenin uzunluğunu değişkene aktardık
        document.getElementById("toplamKitap").innerHTML="Kütüphanemizdeki toplam kitap sayisi: " + kayitSayisi; //!uzunluğu aktardığımız değişkeni toplamKitap id'li h5 etiketi içine yazdırdık

    }

    kitapSilme(target) { //!eklediğimiz kitapları silmeye ait fonksiyon ve bunu a etiketiyle yapacağımız için target verdik

        if(target.className==="delete"){ //!delete yazmamızın sebebi a etiketinin sınıfının "delete" olması
            target.parentNode.parentNode.remove(); //!birinci parent node a etiketinin sütunu olup ikincisi ise a etiketinin bulunduğu tüm satır ve biz satır silmek istediğimiz için bunu yaptık
        }

    }

    formTemizle() { //!ekleyeceğimiz kitapları yazdığımız form elemanlarının içindekileri silme fonksiyonu
        document.getElementById("kitapAdi").value = "";
        document.getElementById("kitapYazari").value = "";
        document.getElementById("kitapISBN").value = "";

    }
}

//!formun kendisini çekip submit olunca ne yapacağımızı söyledik
document.getElementById("formKitap").addEventListener("submit", function (e) {

    const kitapAdi = document.getElementById("kitapAdi").value; //!aldığımız kitap adını sabit bir değişkene atadık
    const kitapYazari = document.getElementById("kitapYazari").value; //!aldığımız kitap yazarını sabit bir değişkene atadık
    const kitapISBN = document.getElementById("kitapISBN").value; //!aldığımız kitap ISBN özelliğini sabit bir değişkene atadık


    const kitap = new Kitap(kitapAdi, kitapYazari, kitapISBN) //!kitap adında oluşturduğumuz sabit bir değişkene submit'e bastığımızda değerleri atamak için kitap nesnesini oluşturduk ve içine girdiğimiz değerleri atadık

    const islem = new Arayuz(); //!kitabı eklemek için Arayuz sınıfından bir nesne türettik.

    if (kitapAdi === "" || kitapYazari === "" || kitapISBN === "") {
        window.alert("Lütfen ilgili alanlari doldurunuz!");
    }
    else {
        islem.kitapEkle(kitap); //!türetilen islem nesnesiyle kitapEkle fonksiyonunu çağırdık ve içine ekleyeceğimiz özelliği de fonsiyona parametreli olarak tanımladık

        islem.formTemizle(); //!form elemanlarının içini boşalttık

        islem.kitapSayisi(); //!eklenen tüm kitaplarımızın sayisini anlık olarak gösterdik

        islem.mesajGoster("Kitap başariyla eklendi!","success");
    }

    e.preventDefault();//!fonskiyona ek özellikler ekleyeceğimiz için default özelliğini kaldırdık
});



document.getElementById("kitapListesi").addEventListener("click", function (e) {

    const silinen=new Arayuz(); //!kitap silmek için Arayuz sınıfından bir nesne türettik
    
    silinen.kitapSilme(e.target); //!atadığımız değişkene hedef verdik

    silinen.kitapSayisi(); //!silinen kitap / kitaplar sonrası kalan kitap sayısını öğrenmek için değişken aracılığıyla kitapSayisi fonksiyonunu çağırdık

    silinen.mesajGoster("Kitap başariyla silindi","remove");

    e.preventDefault();//!fonskiyona ek özellikler ekleyeceğimiz için default özelliğini kaldırdık
});