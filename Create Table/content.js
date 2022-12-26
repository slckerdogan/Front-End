 //TAKIM VE SEZON DETAYLARI EKLEME ALANLARI İÇİN OLUŞTURULAN VE ID'lerden ALINAN DEĞİŞKENLER
 let team = document.querySelector("#team");
 let win = document.querySelector("#win");
 let lose = document.querySelector("#lose");
 let point = document.querySelector("#point");
 let point2 = document.querySelector("#point2");
 let button = document.querySelector("#add");
 let details = document.querySelector("#details");
 let button2 = document.querySelector("#added");

 button.onclick = function () { //TAKIM BİLGİLERİ GİRİNCE BUTONA BASTIK VE OLANLAR AŞAĞIDA

     let tr = document.createElement("tr"); //tablonun tr alanına ekleme yapmak için oluşturulan değişken

     let one = document.createElement("td");  //takıma ait girilen takım adının tablonun td alanına eklenmesi için oluşturulan değişken
     one = team.value; //team değerini aldık
     let two = document.createElement("td"); //takıma ait girilen takım adının tablonun td alanına eklenmesi için oluşturulan değişken
     two = win.value; //win değerini aldık
     let three = document.createElement("td"); //takıma ait girilen takım adının tablonun td alanına eklenmesi için oluşturulan değişken
     three = lose.value; //lose değerini aldık
     let four = document.createElement("td"); //takıma ait girilen takım adının tablonun td alanına eklenmesi için oluşturulan değişken
     four = point.value; //atılan sayı değerini aldık
     let five = document.createElement("td"); //takıma ait girilen takım adının tablonun td alanına eklenmesi için oluşturulan değişken
     five = point2.value; //yenilen sayı değerini aldık
     
     if (one == "" || isNaN(two) || isNaN(three) || isNaN(four) || isNaN(five) || five=="" || four == "" || two == "" || three == "") {
         alert("Error");
         team.value = "";
         win.value = "";
         lose.value = "";
         point.value = "";
         point2.value = "";
     }
     else {
         let one = document.createElement("td"); //takıma ait girilen takım adının tablonun td alanına eklenmesi için oluşturulan değişken
         one.textContent = team.value; //değişken alınıyor ve td için oluşturulan değişkene aktarılıyor
         tr.appendChild(one);  //td için oluşturulan değişken içindeki isim tr'ye ekleniyor ve tablonun ilk sütunu oluşuyor

         let two = document.createElement("td"); //takıma ait girilen galibiyet bilgisinin tablonun td alanına eklenmesi için oluşturulan değişken
         two.textContent = win.value; //değişken alınıyor ve td için oluşturulan değişkene aktarılıyor
         tr.appendChild(two); //td için oluşturulan değişken içindeki isim tr'ye ekleniyor ve tablonun ikinci sütunu oluşuyor

         let three = document.createElement("td"); //takıma ait girilen mağlubiyet bilgisinin tablonun td alanına eklenmesi için oluşturulan değişken
         three.textContent = lose.value; //değişken alınıyor ve td için oluşturulan değişkene aktarılıyor
         tr.appendChild(three); //td için oluşturulan değişken içindeki isim tr'ye ekleniyor ve tablonun üçüncü sütunu oluşuyor

         let four = document.createElement("td"); //takıma ait atılan sayı bilgisinin tablonun td alanına eklenmesi için oluşturulan değişken
         four.textContent = point.value; //değişken alınıyor ve td için oluşturulan değişkene aktarılıyor
         tr.appendChild(four); //td için oluşturulan değişken içindeki isim tr'ye ekleniyor ve tablonun dördüncü sütunu oluşuyor

         let five = document.createElement("td"); //takıma ait yenilen sayı bilgisinin tablonun td alanına eklenmesi için oluşturulan değişken
         five.textContent = point2.value; //değişken alınıyor ve td için oluşturulan değişkene aktarılıyor
         tr.appendChild(five); //td için oluşturulan değişken içindeki isim tr'ye ekleniyor ve tablonun beşinci sütunu oluşuyor

         table.appendChild(tr); //tablonun tr alanına ekleme yaptığımız tüm değişkenler tabloya aktarılıyor
         alert("Team infos are added!");
         //Ardından takımlarla ilgili aldığımız tüm değişkenler sıfırlanıyor
         team.value = "";
         win.value = "";
         lose.value = "";
         point.value = "";
         point2.value = "";
         
     }

 }

 //SEZON DETAYI EKLERKEN BUTONA BASTIĞIMIZDA BİR TANE MODAL ÇIKIYOR AŞAĞIDA ONUN KOMUTLARI VAR
 let modal = document.querySelector("#modal"); //diyalog kısmının id elemanı alınıyor

 button2.addEventListener("click", function () { //sezon detaylarını ekleme butonuna basılıyor
     let p = document.createElement("p");//sezon detaylarını almak için bir değişken yarattık ve içindeki value değerine bağlı olarak 
     //diyalog kısmını ekrana göster ya da gösterme dedik.
     p = details.value;
     if (p != "") {
         modal.showModal(); //diyalog kısmı ekrana gözüküyor
     }
     else {
         alert("Error")
     }

 });
 modal.addEventListener("close", function () { //diyalog kısmında ekrana çıkanlara bağlı olarak verilen cevapta ya sezon detayları ekleniyor ya da eklenmiyor

     if (modal.returnValue == "yes") {
         let p = document.createElement("p");
         p.textContent = details.value;
         liste.appendChild(p);
         details.value = "";
         alert("Season Infos are added!");
     }
     else {
         details.value = "";
         alert("Season Infos aren't added!");

     }

 });