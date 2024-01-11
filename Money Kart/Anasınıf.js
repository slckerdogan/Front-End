let mesaj=
`
Migros'a hoşgeldiniz.
Money kartınız var mı?
1-)Tamam
2-)İptal


`;

const ürünler=[
    {
        urunIsmi:"süt",
        fiyat:35
    },

    {
        urunIsmi:"ekmek",
        fiyat:10
    },

    {
        urunIsmi:"su",
        fiyat:25
    },

    {
        urunIsmi:"kraker",
        fiyat:10
    },

    {
        urunIsmi:"kek",
        fiyat:5
    }

]
let sonuc=confirm(mesaj);
let odenecekTutar;

if(sonuc){
    //Money kart var
    let isim=prompt("Lütfen adınızı giriniz");
    let soyisim=prompt("Lütfen soyadınızı giriniz");
    const musteri=new Musteri(isim,soyisim,sonuc,ürünler);
    odenecekTutar=musteri.hesapla();

    alert(
        `
        Müşteri Bilgileri : ${musteri.getIsim()} ${musteri.getSoyisim()}
        Ödenecek Tutar: ${odenecekTutar}
        `
        );
}

else{
    //Money kart yok
    const musteri=new Musteri(null,null,sonuc,ürünler);
    odenecekTutar=musteri.hesapla();

    alert(
        `
        Ödenecek Tutar: ${odenecekTutar}
        `
        );
}