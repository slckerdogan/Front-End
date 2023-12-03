const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
    const widthRatio=Math.floor(window.innerWidth / 300);
    let counter = 0;
    const imageItem = movieList[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        if (imageItem - (4 + counter) + (4 - widthRatio) >= 0) {

            counter++;
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
        }
        else {
            movieList[i].style.transform = "translateX(0)";
            counter=0;
        }
    });
});

/*dark mode*/
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select");
//*document.querySelectorAll("selectors") => birden fazla selector alma formülü

ball.addEventListener("click",function(){
    items.forEach((item)=>item.classList.toggle("active")); //toggle : Bir sınıfa geçiş yapar. Böylece ilgili classlara, active classını ekleyerek dark moda geçişi olaylarını sağladık
});