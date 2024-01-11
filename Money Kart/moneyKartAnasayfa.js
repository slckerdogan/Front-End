class moneyKartAnasayfa {
    indirimMiktari = 20;
    constructor(isim, soyisim, kartBilgisi, ürünler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartBilgisi = kartBilgisi;
        this.ürünler = ürünler;
    }


    hesapla() { //!sepetimizi buraya göndererek ürünleri döndürdük ve indirimi işin içine katarak ödenecek tutarı bulduk.
        let ödenecekTutar = 0;
        if (this.ürünKontrolü(this.ürünler)) {

            if (this.kartBilgisi) {
                //Money kartı vardır
                this.ürünler.forEach((ürün) => {
                    ödenecekTutar += (ürün.fiyat * (100 - this.indirimMiktari) / 100);
                });
            }
            else {
                //Money kartı yoktur
                this.ürünler.forEach((ürün) => {
                    ödenecekTutar += ürün.fiyat;
                });

            }
        }
        else {
            alert("Lütfen ürün aldığınızdan emin olunuz!");
        }

        return ödenecekTutar;
    }

    ürünKontrolü(ürünler) { //!sepetimizde ürün var mı diye kontrol ettik.
        if (ürünler != null && ürünler.length > 0) {
            return true;
        }
        return false;
    }

    getIsim() {
        return this.isim;
    }

    getSoyisim() {
        return this.soyisim;
    }
}
