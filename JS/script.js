console.log("Niesamowite, ile satysfakcji moze przyniesc czlowiekowi stworzenie czegos :)")

/*//Zmiana tla
let przycisk1 = document.querySelector(".tlo");
let zmiana = document.querySelector("body");

przycisk1.addEventListener("click", () => {
    zmiana.classList.toggle("kolor");
}) ;


//Zmiana tytulu
let przycisk3 = document.querySelector(".tytul")
let zmiana2 = document.querySelector("h1")

przycisk3.addEventListener("click", () => {
    zmiana2.classList.toggle("fancyTitle");
});*/

/*let container = document.querySelector(".container")
console.log(container);

if (container.classList.contains("dark")) {
    console.log("container jest ciemnny");
};*/

//Motyw
let button = document.querySelector(".button")
let mode = document.querySelector("body");

button.addEventListener("click", () => {
    if (button.innerText === "Włącz ciemny motyw") {
        button.innerText = "Wyłącz ciemny motyw";
        mode.classList.toggle("kolor");
    } else {
        button.innerText = "Włącz ciemny motyw";
        mode.classList.toggle("kolor");
    }
});

//Usuniecie zdjecia
let button1 = document.querySelector(".przycisk");
let zdjecie = document.querySelector(".mainHeader__img");

button1.addEventListener("click", () => {
    if (button1.innerText === "Ukryj zdjęcie") {
        zdjecie.style.visibility = "hidden";
        button1.innerText = "Pokaz zdjecie";
    } else {
        zdjecie.style.visibility = "visible";
        button1.innerText = "Ukryj zdjęcie"
    }
});



