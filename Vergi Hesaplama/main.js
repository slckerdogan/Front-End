//Yılların seçileceği select alanına yıllar fonksiyonu ile yıl ataması yaptık
function yillar() {
    let tarih = new Date();
    let sene = tarih.getFullYear();

    for (let i = sene; i >= 2003; i--) {
        let secenek = document.createElement("option");
        document.getElementById("aracModel").options.add(secenek);
        secenek.text = i;
        secenek.value = i;
    }

}

//butona basıldığında vergi hesabı yapacak alana geçtik!!!!
function vergiHesabı() {
    let odenecekVergi, aracTipi, motorGucu, aracYili;

    for (let i = 0; i < document.getElementById("aracTipi").length; i++) { //araç tipini aldık!!!!!
        if (document.getElementById("aracTipi").options[i].selected) {
            aracTipi = document.getElementById("aracTipi").options[i].value;
        }
    }
    for (let i = 0; i < document.getElementsByName("motorGucu").length; i++) { //araç motor gücünü aldık!!!!!
        if (document.getElementsByName("motorGucu")[i].checked) {
            motorGucu = document.getElementsByName("motorGucu")[i].value;
        }
    }
    for (let i = 0; i < document.getElementById("aracModel").length; i++) { //araç model yılını aldık!!!!!
        if (document.getElementById("aracModel").options[i].selected) {
            aracYili = document.getElementById("aracModel").options[i].value;
        }
    }

    if (aracTipi === "default" || aracModel === "default") {          //araç model yılı ve araç tipi girişini sorguladık aldık!!!!!!!
        alert("Lütfen araç tipini, araç motor gücünü ve araç model yılını doğru girdiğinizden emin olunuz!");
        document.getElementById("sonuc").innerHTML = "";
        location = location; //sayfayı kendine yönlendirme yaptık
    }


    else if (aracTipi == "motosiklet") {          //araç tipi motosiklet olarak aldık ve yıllara göre vergi düzenlemesi yaptık. Motor için seçilecek gücün anlamı yok!!
        if (aracYili > 2012 && aracYili <= 2022) {
            odenecekVergi = 200;
            document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
        }
        else if (aracYili >= 2003 && aracYili <= 2012) {
            odenecekVergi = 100;
            document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
        }
        else {
            alert("Lütfen araç yılını seçtiğinizden emin olunuz!");
            document.getElementById("sonuc").innerHTML = "";
            location = location; //sayfayı kendine yönlendirme yaptık
        }
    }


    else if (aracTipi == "otomobil") {       //araç tipi otomobil olarak aldık ve hem motor gücü hem de yıllara göre vergi düzenlemesi yaptık!!!!
        if (motorGucu == "999 cc altı") {
            if (aracYili >= 2003 && aracYili <= 2007) {
                odenecekVergi = 300;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2008 && aracYili <= 2012) {
                odenecekVergi = 400;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2013 && aracYili <= 2017) {
                odenecekVergi = 500;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2018 && aracYili <= 2022) {
                odenecekVergi = 600;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else {
                alert("Lütfen araç yılını seçtiğinizden emin olunuz!");
                document.getElementById("sonuc").innerHTML = "";
                location = location; //sayfayı kendine yönlendirme yaptık
            }
        }
        else if (motorGucu == "1000cc-1600cc arası") {
            if (aracYili >= 2003 && aracYili <= 2007) {
                odenecekVergi = 700;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2008 && aracYili <= 2012) {
                odenecekVergi = 800;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2013 && aracYili <= 2017) {
                odenecekVergi = 900;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2018 && aracYili <= 2022) {
                odenecekVergi = 1000;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else {
                alert("Lütfen araç yılını seçtiğinizden emin olunuz!");
                document.getElementById("sonuc").innerHTML = "";
                location = location; //sayfayı kendine yönlendirme yaptık
            }
        }
        else if (motorGucu == "1601 cc- 2000 cc arası") {
            if (aracYili >= 2003 && aracYili <= 2007) {
                odenecekVergi = 1100;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2008 && aracYili <= 2012) {
                odenecekVergi = 1200;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2013 && aracYili <= 2017) {
                odenecekVergi = 1300;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2018 && aracYili <= 2022) {
                odenecekVergi = 1400;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else {
                alert("Lütfen araç yılını seçtiğinizden emin olunuz!");
                document.getElementById("sonuc").innerHTML = "";
                location = location; //sayfayı kendine yönlendirme yaptık
            }
        }
        else if (motorGucu == "2001cc") {
            if (aracYili >= 2003 && aracYili <= 2007) {
                odenecekVergi = 1500;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2008 && aracYili <= 2012) {
                odenecekVergi = 1600;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2013 && aracYili <= 2017) {
                odenecekVergi = 1700;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else if (aracYili >= 2018 && aracYili <= 2022) {
                odenecekVergi = 1800;
                document.querySelector("#sonuc").innerHTML = "Toplam vergi tutarınız " + odenecekVergi + " TL";
            }
            else {
                alert("Lütfen araç yılını seçtiğinizden emin olunuz!");
                document.getElementById("sonuc").innerHTML = "";
                location = location; //sayfayı kendine yönlendirme yaptık
            }
        }
        else {
            alert("Lütfen araç motor gücünü seçtiğinizden emin olunuz!");
            document.getElementById("sonuc").innerHTML = "";
            location = location; //sayfayı kendine yönlendirme yaptık
        }
    }
}