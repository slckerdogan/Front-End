const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");
let buttonlist = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "+", 0, ".", "-", "=", "C", "**", "%","del"];

let values = []; //!işlem yapmak için girilen rakam ve butonların tutulduğu arka plandaki dizi değişkenidir

let operationValues; //!işlem yapmak için girilen rakam ve butonların tutulduğu dizinin string hali olup display alanında gösterilir

for (let i = 0; i < buttonlist.length; i++) {
    let button = document.createElement("button")
    button.textContent = buttonlist[i];
    buttons.appendChild(button);
}

let calcbuttons = document.querySelectorAll(".buttons button"); //!oluşturduğumuz butonlara eriştik

//!for-each ile butonların her birine tıklama sonucu bir event atadık ve bu event sayesinde tıklanan butonlardaki ifadelerin ekrana yazdırılmasını sağladık
calcbuttons.forEach(item => {
    item.addEventListener("click", (e) => {
        calculateArray(e.target.textContent);
    });
});

//!hesaplama işlemlerinin yapıldığı alan ve hesap sonucu calculation adlı değişkene atandı
let calculation = (value) => {
    if (value === "C") {
        values = [];
        display.textContent = 0;
        return
    }

    if (value != "=") {
        values.push(value);
        console.log(values);
        operationValues = values.join(""); //!diziyi string yaptık matematiksel işlemler yapılabilsin diye
        console.log(operationValues);
        console.log(typeof operationValues);
        display.textContent = operationValues;

    }

    if (value === "del") {
        operationValues = values.pop();
        operationValues = values.join("");
        display.textContent = operationValues
        return
    }

    else {
        let result = eval(operationValues);
        display.textContent = result.toFixed(2);
        values = []; //!arka alandaki dizinin içini boşalttı
    }
}