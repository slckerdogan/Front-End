const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefgghijklmnopqrstuvwxyz";
const symbolSet = "0123456789!/*-+<>^~¨?%&";

const upperCaseRadio = document.getElementById("uppercase");
const lowerCaseRadio = document.getElementById("lowercase");
const symbolRadio = document.getElementById("symbol");
const passLength = document.getElementById("length");
const button = document.getElementById("buton");


//!yukarıda oluşturduğumuz sabitleri alıp içindekilerden şifreye aktarım yapmak için bir adet arrow fonksiyon oluşturduk. Bu fonksiyon, şifre oluşturmak için butona basıldığında seçilen radioboxlardaki özellikleri buraya aktararak şifreyi oluşturmaya yardımcı olacak
const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

//!seçili radioboxları generatePassword fonksiyonuna aktarıp boş bir password yaratıp içine seçili radioboxlar aracılığyla alınan değerleri aktarıp şifreyi oluşturduk
const generatePassword = (password = "") => {

    let passwordLength = Number(passLength.value);

    while (passwordLength >= 1) {
        if (upperCaseRadio.checked) {
            password += getRandomData(upperSet);
            passwordLength--;
        }

        if (lowerCaseRadio.checked) {
            password += getRandomData(lowerSet);
            passwordLength--;
        }


        if (symbolRadio.checked) {
            password += getRandomData(symbolSet);
            passwordLength--;
        }

    }
    document.getElementById("info").innerHTML = password;
}

button.addEventListener("click", function () {
    if ((isNaN(passLength.value) || (passLength.value === "") || (passLength.value < 0))) {
        window.alert("Lütfen şifre uzunluğunu uygun şekilde girdiğinizden emin olunuz");
        document.getElementById("info").innerHTML = "";
        location = location;
    }
    else {
        generatePassword();
    }

});