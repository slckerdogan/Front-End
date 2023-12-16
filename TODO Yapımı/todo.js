var baslikAlani=document.getElementsByTagName("h2");
function openWindow() {
    newWindow = window.open("", "newWindow", "width=600,height=400");
    newWindow.document.write('Eklenen bir todo, üstüne bir kez tiklandiğinda CSS özellikleri açisindan değişime uğrar(Yeşil Metin: Todo Bitti ; Kirmizi Metin: Todo Yeniden Yapilacak) ancak todo hala ekranda kalmaya devam eder. Todo ekrandan kaldirilmak istenirse de üstüne çift tiklamak yeterlidir.');
}

var eklenenTodo, ekleButton, silButton;

eklenenTodo = document.getElementById("todoGirilen");
todoAlani = document.getElementById("todoShow");

ekleButton = document.getElementById("ekle");
silButton = document.getElementById("sil");
araButton = document.getElementById("ara");

ekleButton.addEventListener("click", addTodo);
araButton.addEventListener("click", searchTodo);
silButton.addEventListener("click", deleteTodo);

function addTodo() {

    if (eklenenTodo.value.trim() === '') {
        alert('Todo alani boş birakilamaz!');
        return;
    }

    let newTodo = document.createElement("p");
    newTodo.textContent = eklenenTodo.value;
    newTodo.classList = "aaa";
    todoAlani.appendChild(newTodo);
    eklenenTodo.value = "";

    newTodo.addEventListener("click", function () {
        if (newTodo.style.textDecoration != 'line-through') {
            newTodo.style.textDecoration = "line-through";
            newTodo.style.color="green";
        }
        else {
            newTodo.style.textDecoration = "none";
            newTodo.style.color="red";
        }

    });

    newTodo.addEventListener("dblclick", function () {
        todoAlani.removeChild(newTodo);
    });
}


function deleteTodo() {
    let todoListGroup=document.querySelectorAll(".aaa");
    if(todoListGroup.length>0){
        let cevap = confirm("Tüm todolari silmek istediğinizden emin misiniz?");
        if (cevap) {
            todoAlani.remove();
        }
    }
    
}




function searchTodo() {  //!BU ALAN İLGİLİ KONU ÖĞRENİLDİĞİNDE GELİP TAMAMLANACAK O ZAMANA KADAR KALDI BÖYLE ARTIK. VE BUNU YAPARKEN SANIRIM LOCAL STORAGE'DA İŞİN İÇİNE GİRİYOR BAKALIM...
    var arananTodo = prompt("Lütfen aramak istediğiniz todoyu giriniz!");
    console.log(arananTodo.toLowerCase());
    var todoListGroup=document.querySelectorAll(".aaa");
    console.log(todoListGroup.length);


    if(todoListGroup.length>0){
        for (var i = 0; i < todoListGroup.length; i++) {
            console.log((i + 1) + ". " + todoListGroup[i].value);
        }
        
    }
    else{
        alert('Todo alaninda todo yok ki?!?');
    }

}