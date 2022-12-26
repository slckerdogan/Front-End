var secim,liste;
var i;
document.addEventListener("change",Hesapla);

function toggle(){
    liste=document.getElementsByName("indirimKodu");
    for(i=0;i<liste.length;i++){
        if(liste[i].checked){
            if(liste[i].value=="aktif"){
                document.getElementById("indirim").disabled=false;
            }
            else if(liste[i].value=="pasif"){
                document.getElementById("indirim").disabled=true;
                document.getElementById("indirim").value="";
            }
        }
    }
}
function Hesapla(){
    let pizzaFiyatı,indirimKodu;
    const sabitİndirim='ABC';

    liste=document.getElementById("listePizza");
    secim=liste[liste.selectedIndex].value;
    pizzaFiyatı=Number(secim);

    liste=document.getElementsByName("ekMalzemeGrubu");
    for(i=0;i<liste.length;i++){
        if(liste[i].checked){
            pizzaFiyatı=pizzaFiyatı+2;
        }
    }

    if(document.getElementById("kodTrue").checked){
        indirimKodu=document.getElementById("indirim").value;
        if(indirimKodu==sabitİndirim){
            pizzaFiyatı=Number((pizzaFiyatı*0.8).toFixed(2));
        }
        else{
            window.alert("Lütfen geçerli bir kod giriniz!");
            pizzaFiyatı=pizzaFiyatı;
            document.getElementById("indirim").value="";
        }
    }
    document.getElementById("sonuc").innerHTML="Ödenecek Tutar " + pizzaFiyatı + " TL";
}
