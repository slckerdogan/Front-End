//!Giriş ve çıkış için kullanacağımız HTML nesnelerini değişkenlerle alalım

const sonuc = document.getElementById("sonuc"); //deyim-atasözü yazılıyor ekrana böylece
const aramaKutusu = document.getElementById("aramaKutusu"); //arama kutusuna yazılan veriyi çekiyor
const aramaListesi = document.getElementById("aramaListesi");  //sen birşey ararken ekrana ipucu gösteriyor


//!JSON verilerini sayfada tutma

const anahtarKelimeler = []; //!kullanıcı arama kısmına ifade girdiğinde kullanıcıya yansıtılacak ipuçlarının olduğu dizi
const atasozleri = []; //!kullanıcı arama kısmına ifade girdiğinde ekrana yansıtılacak sonuçların olduğu dizi




verileriYukle();

async function verileriYukle() {  //!verileri çektik
    const sunucuYaniti = fetch('https://sozluk.gov.tr/atasozu');
    let veriler = await (await sunucuYaniti).json();

    veriler.forEach(eleman => {
        //!siteden çektiğimiz veriler ikili olarak tutuluyordu. birincinin ifadesi anahtar; ikincisinin ifadesi sozum olduğundan bunların ikisini yukarıda oluşturduğumuz dizilere aktardık
        anahtarKelimeler.push(eleman.anahtar);
        atasozleri.push(eleman.sozum);
    });

    const birlesmisKelimeler = [...new Set(anahtarKelimeler)]; //!anahtar kelimelerin aynı sayıda fazlaca olanlarını azaltmış olduk birleştirerek

    birlesmisKelimeler.sort(() => Math.random() - 0.5); //!birleştirdiğimiz bu kelimeleri karıştırarak önerilerde farklı kelimelerin olmasını sağladık

    let sayac = 0;
    birlesmisKelimeler.forEach(kelime => {
        if (sayac < 5) { //!öneri sayısı maximum 5 olsun dedik
            const yeniOneri = document.createElement("option");
            aramaListesi.appendChild(yeniOneri); //!biz arama yapacakken karşımıza çıkacak önerileri option ile HTML kısmındaki dataliste aktardık
            yeniOneri.value = kelime; //!dataliste aktarılan kelimeleri görmek için,  yeniOneri.value aktarımını sağladık
        }
        sayac++; //!öneri sayısı maximum 5 olsun dediğimiz için sayacı arttırdık. if döngüsü her seferinde 5 kere döncek ve karışan öneriler ekrana yansıtılacak
    });
}

aramaKutusu.addEventListener("input", (e) => //!arama kısmına yazılan kelimeyi e harfi temsil ediyor. Biz yazdıkça o e harfiyle eşleşenler toplanıyor
    sonuclariFiltrele(e.target.value));

function sonuclariFiltrele(arananKelime) { 
    sonuc.innerHTML = ""; //!deyim-atasözü aramaya başlayacakken ekranı sıfırlıyo
    const aramaKriteri = new RegExp(arananKelime, "gi"); //!aramayı ve eşleştirmeyi RegExp ile yapıyoruz ve büyük-küçük harf duyarlılığı istemiyoruz. Uygunluk sağlayanlar yani eşleşen aramalar arananKelime ifadesi yardımıyla aramaKriteri sabitine aktarılıyor ve sonuçlar filtrelenmiş oluyor bu fonksiyon ile
    let eslesenler = atasozleri.filter(soz => aramaKriteri.test(soz)); //!eslesen tüm aramaları olusturduğumuz eslesenler ifadesine attık

    if(arananKelime.length<2){ //!aranan kelime 2 harften az ise öneri getirme dedik
        eslesenler=[];
    }
    eslesenler.forEach(eslesen =>{ //!eslesen önerilerdeki her bir eslesen elemanı eslesenSonuç adlı ul yapımıza li ögesi olarak attık ve ekrana yazdırmak için eslesen ögeyi, eslesenSonuc.innerHTML ile aktarımını sağladık
        const eslesenSonuc = document.createElement("li");
        sonuc.appendChild(eslesenSonuc);
        eslesenSonuc.innerHTML=eslesen;
    });
}
