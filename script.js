/* =========================================
   ФОТОГРАФИИ
========================================= */

const chatPhotos = [
    "chat/chat1.jpg",
    "chat/chat2.jpg",
    "chat/chat3.jpg",
    "chat/chat4.jpg",
    "chat/chat5.jpg",
    "chat/chat6.jpg",
    "chat/chat7.jpg",
    "chat/chat8.jpg",
    "chat/chat9.jpg",
    "chat/chat10.jpg",
    "chat/chat11.jpg",
    "chat/chat12.jpg",
    "chat/chat13.jpg",
    "chat/chat14.jpg",
    "chat/chat15.jpg",
    "chat/chat16.jpg",
    "chat/chat17.jpg",
    "chat/chat18.jpg",
    "chat/chat19.jpg"
];


const gamesPhotos = [
    "games/games1.jpg",
    "games/games2.jpg",
    "games/games3.jpg",
    "games/games4.jpg",
    "games/games5.jpg"
];


const memesPhotos = [
    "memes/memes1.jpg",
    "memes/memes2.jpg",
    "memes/memes3.jpg",
    "memes/memes4.jpg",
    "memes/memes5.jpg",
    "memes/memes6.jpg",
    "memes/memes7.jpg",
    "memes/memes8.jpg",
    "memes/memes9.jpg",
    "memes/memes10.jpg",
    "memes/memes11.jpg",
    "memes/memes12.jpg",
    "memes/memes13.jpg",
    "memes/memes14.jpg",
    "memes/memes15.jpg"
];



/* =========================================
   ГАЛЕРЕИ
========================================= */

const galleries = {

    chat: {
        photos: chatPhotos,
        current: 0,
        image: document.getElementById("chatImage"),
        counter: document.getElementById("chatCounter"),
        dots: document.getElementById("chatDots")
    },

    games: {
        photos: gamesPhotos,
        current: 0,
        image: document.getElementById("gamesImage"),
        counter: document.getElementById("gamesCounter"),
        dots: document.getElementById("gamesDots")
    },

    memes: {
        photos: memesPhotos,
        current: 0,
        image: document.getElementById("memesImage"),
        counter: document.getElementById("memesCounter"),
        dots: document.getElementById("memesDots")
    }

};



/* =========================================
   КНОПКА ОТКРЫТИЯ
========================================= */

const startButton =
    document.getElementById("startButton");

const mainContent =
    document.getElementById("mainContent");

const music =
    document.getElementById("music");


startButton.addEventListener("click", () => {

    mainContent.classList.add("visible");

    music.volume = 0.45;

    music.play().catch(() => {
        console.log("Музыка не запустилась.");
    });

    setTimeout(() => {

        mainContent.scrollIntoView({
            behavior: "smooth"
        });

    }, 200);

});



/* =========================================
   СОЗДАНИЕ ТОЧЕК
========================================= */

function createDots(type) {

    const gallery = galleries[type];

    gallery.dots.innerHTML = "";

    gallery.photos.forEach((photo, index) => {

        const dot =
            document.createElement("div");

        dot.classList.add("dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {

            gallery.current = index;

            updateGallery(type);

        });

        gallery.dots.appendChild(dot);

    });

}



/* =========================================
   ОБНОВЛЕНИЕ
========================================= */

function updateGallery(type) {

    const gallery = galleries[type];

    gallery.image.style.opacity = "0";

    setTimeout(() => {

        gallery.image.src =
            gallery.photos[gallery.current];

        gallery.image.style.opacity = "1";

    }, 150);


    gallery.counter.textContent =
        `${String(gallery.current + 1).padStart(2, "0")} / ${String(gallery.photos.length).padStart(2, "0")}`;


    const dots =
        gallery.dots.querySelectorAll(".dot");


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === gallery.current
        );

    });

}



/* =========================================
   ВПЕРЁД
========================================= */

function nextPhoto(type) {

    const gallery = galleries[type];

    gallery.current++;

    if (
        gallery.current >=
        gallery.photos.length
    ) {
        gallery.current = 0;
    }

    updateGallery(type);

}



/* =========================================
   НАЗАД
========================================= */

function previousPhoto(type) {

    const gallery = galleries[type];

    gallery.current--;

    if (gallery.current < 0) {

        gallery.current =
            gallery.photos.length - 1;

    }

    updateGallery(type);

}



/* =========================================
   ЗАПУСК ГАЛЕРЕЙ
========================================= */

createDots("chat");
createDots("games");
createDots("memes");

updateGallery("chat");
updateGallery("games");
updateGallery("memes");



/* =========================================
   АВТОПЕРЕКЛЮЧЕНИЕ
========================================= */

setInterval(() => {

    if (
        mainContent.classList.contains("visible")
    ) {
        nextPhoto("chat");
    }

}, 5000);


setInterval(() => {

    if (
        mainContent.classList.contains("visible")
    ) {
        nextPhoto("games");
    }

}, 5500);


setInterval(() => {

    if (
        mainContent.classList.contains("visible")
    ) {
        nextPhoto("memes");
    }

}, 6000);



/* =========================================
   ПЛАВАЮЩИЕ СИМВОЛЫ
========================================= */

const particlesContainer =
    document.getElementById("particles");


function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");


    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "·"
    ];


    particle.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (7 + Math.random() * 8) + "s";


    particle.style.fontSize =
        (8 + Math.random() * 14) + "px";


    particlesContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 16000);

}


setInterval(
    createParticle,
    700
);