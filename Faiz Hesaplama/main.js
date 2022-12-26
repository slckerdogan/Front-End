let button = document.getElementById("two");
button.onclick = () => {
    let kredi = document.getElementById("one").value;
    let tutar, vadeSayisi, taksit;
    let liste = document.getElementById("listeVade");
    vadeSayisi = liste.options[liste.selectedIndex].value;
    if (isNaN(kredi) || kredi == "") {
        alert("Lütfen doğru değer girdiğinizden emin olun!");
        document.getElementById("one").value="";
    }
    else {
        if (vadeSayisi == 12 && kredi > 100000) {
            tutar = kredi * 1.1;
            taksit = tutar / vadeSayisi;
            document.querySelector("#sonuc").innerHTML = "Geri ödeme toplamı: " + tutar + "<br>" +
                "Aylık taksit tutarınız: " + taksit.toFixed(2);

        }
        else if (vadeSayisi == 12 && kredi <= 100000) {
            alert("100 bin liranın üzerindeki tutarlar için taksit sayısı 12 aydır!");
            document.getElementById("one").value="";
        }
        else if (vadeSayisi == 24) {
            tutar = kredi * 1.2;
            taksit = tutar / vadeSayisi;
            document.querySelector("#sonuc").innerHTML = "Geri ödeme toplamı: " + tutar + "<br>" +
                "Aylık taksit tutarınız: " + taksit.toFixed(2);
        }
    }
}