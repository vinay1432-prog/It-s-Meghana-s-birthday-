const beginBtn = document.getElementById("beginBtn");
const bgMusic = document.getElementById("bgMusic");

const welcomeScreen = document.getElementById("welcomeScreen");
const storyScreen = document.getElementById("storyScreen");
const nameScreen = document.getElementById("nameScreen");
const galleryScreen = document.getElementById("galleryScreen");
const letterScreen = document.getElementById("letterScreen");
const finalScreen = document.getElementById("finalScreen");

const storyText = document.getElementById("storyText");

const galleryImage = document.getElementById("galleryImage");
const galleryQuote = document.getElementById("galleryQuote");
const revealWord = document.getElementById("revealWord");
const tapHint = document.getElementById("tapHint");

const letterText = document.getElementById("letterText");

const particles = document.getElementById("particles");

const introMessages = [
    "Among 365 days...",
    "Most pass quietly...",
    "But one day shines differently...",
    "15 June ✨",
    "Because someone extraordinary entered the world...",
    "Meghana SN ❤️"
];

const photos = [
    {
        image:"images/photo1.jpeg",
        quote:"A smile that makes people comfortable.",
        reveal:"Kindness ❤️"
    },
    {
        image:"images/photo2.jpeg",
        quote:"Someone who brings warmth wherever she goes.",
        reveal:"Strength ✨"
    },
    {
        image:"images/photo3.jpeg",
        quote:"And that's what makes her unforgettable...",
        reveal:"MEGHANA SN ❤️"
    }
];

let currentPhoto = 0;

function showScreen(screen){

    document.querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));

    screen.classList.add("active");
}

beginBtn.addEventListener("click", () => {

    bgMusic.volume = 0;
    bgMusic.play();

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.01;

        if(volume >= 0.15){
            clearInterval(fade);
        }

        bgMusic.volume = volume;

    },200);

    startStory();
});

function startStory(){

    showScreen(storyScreen);

    let index = 0;

    function nextMessage(){

        storyText.innerHTML = introMessages[index];

        index++;

        if(index < introMessages.length){

            setTimeout(nextMessage,3000);

        }else{

            setTimeout(() => {

                showScreen(nameScreen);

            },3000);
        }
    }

    nextMessage();
}

nameScreen.addEventListener("click", () => {

    currentPhoto = 0;

    showGallery();
});

function showGallery(){

    showScreen(galleryScreen);

    galleryImage.src = photos[currentPhoto].image;
    galleryQuote.innerHTML = photos[currentPhoto].quote;

    revealWord.style.display = "none";
    tapHint.classList.remove("showHint");

    setTimeout(() => {

        tapHint.classList.add("showHint");

    },3000);
}

galleryScreen.addEventListener("click", (e) => {

    createSparkle(e.clientX, e.clientY);
    revealWord.style.display = "block";
    revealWord.innerHTML = photos[currentPhoto].reveal;

    setTimeout(() => {

        currentPhoto++;

        if(currentPhoto < photos.length){

            showGallery();

        }else{

            showLetter();

        }

    },1500);
});

function showLetter(){

    showScreen(letterScreen);

    const message = `Dear Meghana,

May this year bring you happiness,
beautiful memories,
new opportunities,
and endless reasons to smile.

May every dream move one step closer to reality.

May every challenge make you stronger.

Never stop being the wonderful person you are.

Happy Birthday ❤️`;

    let i = 0;

    function typeWriter(){

        if(i < message.length){

            letterText.innerHTML += message.charAt(i);

            i++;

            setTimeout(typeWriter,35);

        }else{

            setTimeout(showFinal,3000);
        }
    }

    typeWriter();
}

function showFinal(){

    showScreen(finalScreen);

    launchConfetti();

    setInterval(() => {

        confetti({
            particleCount:80,
            spread:120,
            origin:{
                x:Math.random(),
                y:Math.random()*0.5
            }
        });

    },1500);
}

function launchConfetti(){

    confetti({
        particleCount:250,
        spread:180
    });
}

setInterval(() => {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.top = window.innerHeight + "px";

    particle.style.width =
    particle.style.height =
    (Math.random()*4+2) + "px";

    particles.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    },8000);

},300);

function createSparkle(x,y){

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    },800);
}

setInterval(() => {

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        Math.random() * 200 + "px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    },1500);

},7000);