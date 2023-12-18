let zamanSayaci;
let inputtanAlinanZaman;

function sureyiSay() {
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    //kullanıcı gün,saat,dakika ve saniye bilgilerini girerse parseInt ile alıyoruz ancak değer girmezse onları sıfır kabul ediyoruz...

    inputtanAlinanZaman = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

    if (inputtanAlinanZaman <= 0 || isNaN(inputtanAlinanZaman)) {
        alert('Lütfen geçerli bir süre girin.');
        document.getElementById('zamanAlani').innerText = '';
        document.getElementById('days').value = '';
        document.getElementById('hours').value = '';
        document.getElementById('minutes').value = '';
        document.getElementById('seconds').value = '';
        return;
    }

    zamanSayaci = setInterval(güncelZamaniGosterenFonksiyon, 1000);
}

function güncelZamaniGosterenFonksiyon() {
    const days = Math.floor(inputtanAlinanZaman / (24 * 60 * 60));
    const hours = Math.floor((inputtanAlinanZaman % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((inputtanAlinanZaman % (60 * 60)) / 60);
    const seconds = inputtanAlinanZaman % 60;

    document.getElementById('zamanAlani').innerText = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;

    if (inputtanAlinanZaman === 0) {
        clearInterval(zamanSayaci);
        alert('Geri sayım tamamlandı!');
    } else {
        inputtanAlinanZaman--;
    }
}

function sureyiDurdur() {
    clearInterval(zamanSayaci);
}

function sureyiResetle() {
    clearInterval(zamanSayaci);
    document.getElementById('zamanAlani').innerText = '';
    document.getElementById('days').value = '';
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}