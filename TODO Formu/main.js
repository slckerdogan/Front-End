var yapilacak,yapilmis;
var eklenecek,btnTamam,btnSil,btngeriEkle;

function Ekle(){ //?yapılacak aktiviteler eklendi bu fonksiyonla. yapılacak değişkeni kullanıcının girdiği veriyi temsil ederken;eklenecek değişkeni kullanıcının girdiği verinin listeye eklenmesi adına oluşturulan değişkeni ifade ediyor.
    yapilacak=document.getElementById("txtYapilacaklar").value;
    if(!yapilacak){
        window.alert("Lütfen bir yapılacak aktivite giriniz");
    }
    else{
        //?!yapmak istediğimiz şey "THINGS TO DO" alanına eklendi
        eklenecek=document.createElement("li");
        document.getElementById("yapilacaklar").appendChild(eklenecek);
        eklenecek.innerHTML=yapilacak;
        document.getElementById("txtYapilacaklar").value="";
        
        //?!yapmak istediğimiz şeyin olduğu satıra 'Tamam' butonu "THINGS TO DO" alanına eklendi
        btnTamam=document.createElement("img");
        eklenecek.appendChild(btnTamam);
        btnTamam.setAttribute("src","images/tamam.png");
        btnTamam.setAttribute("id","resimTamamla");
        btnTamam.addEventListener("click",tamamla);

        //?!yapmak istediğimiz şeyin olduğu satıra 'Sil' butonu "THINGS TO DO" alanına eklendi
        btnSil=document.createElement("img");
        eklenecek.appendChild(btnSil);
        btnSil.setAttribute("src","images/sil.png");
        btnSil.setAttribute("id","resimSil");
        btnSil.addEventListener("click",sil); //istersek direk silelim diye bunu yaptık

        //?!yapmak istediğimiz şeyin olduğu satıra 'Geri ekle' butonu disable olarak "THINGS TO DO" alanına eklendi
        btngeriEkle=document.createElement("img");
        eklenecek.appendChild(btngeriEkle);
        btngeriEkle.setAttribute("src","images/depositphotos_39315129-stock-photo-reload-two-arrows-icon.jpg");
        btngeriEkle.setAttribute("id","resimGeriEkle");
        btngeriEkle.setAttribute("click",disabled);
        btngeriEkle.addEventListener("click",geriEkle);
    }

}

function tamamla(){ //yapılacaklar kısmında olan elementi yapılanlar kısmına aktardık ve ardından tamam butonunu ortadan kaldırarak sil ve geri ekle butonlarına özellik ataması gerçekleştirdik. Böylece "DONE" kısmına atadığımız veriye butonlar aktif olarak ne yapacak onu belirledik

    eklenecek=document.createElement("li");
    document.getElementById("yapilanlar").appendChild(eklenecek);
    yapilmis=event.currentTarget.parentNode;
    yapilmis.childNodes[1].style.display="none";
    yapilmis.childNodes[2].setAttribute("onclick","sil();");
    yapilmis.childNodes[3].setAttribute("onclick","geriEkle();");
    eklenecek.innerHTML=yapilmis.innerHTML;
    sil();
}

function sil(){
    yapilmis=event.currentTarget.parentNode;
    yapilmis.remove();
    window.alert("Seleceted thing was removed successfully!")
}

//yapılanlar kısmında olan elementi yapılacaklar kısmına aktardık ve ardından tüm butonları tekrar oluşturarak bunlara özellik ataması gerçekleştirdik. Böylece "THINGS TO DO" kısmına atadığımız veriye butonlar aktif olarak ne yapacak onu belirledik
function geriEkle(){
    eklenecek=document.createElement("li");
    document.getElementById("yapilacaklar").appendChild(eklenecek);
    yapilacak=event.currentTarget.parentNode;
    yapilacak.childNodes[1].style.display="inline-block";
    yapilacak.childNodes[1].setAttribute("onclick","tamamla();");
    yapilacak.childNodes[2].setAttribute("onclick","sil();");
    yapilacak.childNodes[3].setAttribute("onclick","geriEkle();");
    eklenecek.innerHTML=yapilacak.innerHTML;
    yapilacak.innerHTML="";
    window.alert("Selected thing was added 'THINGS TO DO'again!")
}