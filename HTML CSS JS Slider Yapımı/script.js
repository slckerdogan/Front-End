const slides=document.querySelectorAll(".slide");
const next=document.getElementById("next");
const prev=document.getElementById("prev");

const autogecis=true; //otomatik geçişi sağlamak için sabitimiz
const intervalTime=5000; //otomatik geçişi sağlamak için zaman gösterici sabitimiz
var pageInterval; //otomatik geçişi sağlarken bununla intervalTime olayını sıfırlayarak geçişi daha iyi bir hale geçiriyoruz

const nextPage = function go (){
    const nextSlide=document.querySelector(".active");
    nextSlide.classList.remove("active");

    if(autogecis){
        clearInterval(pageInterval);
        pageInterval=setInterval(nextPage,intervalTime);
    }

    if(nextSlide.nextElementSibling){
        nextSlide.nextElementSibling.classList.add("active");
    }

    else{
        slides[0].classList.add("active");
    }
}

const prevPage = function back (){
    const prevSlide=document.querySelector(".active");
    prevSlide.classList.remove("active");

    if(autogecis){
        clearInterval(pageInterval);
        pageInterval=setInterval(nextPage,intervalTime);
    }
    
    if(prevSlide.previousElementSibling){
        prevSlide.previousElementSibling.classList.add("active");
    }

    else{
        slides[(slides.length)-1].classList.add("active");
    }
}

next.addEventListener("click",nextPage);
prev.addEventListener("click",prevPage);

