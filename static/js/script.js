const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');

// MUSIC
function restoreMusic() {
    let t = localStorage.getItem('time');
    let p = localStorage.getItem('play');

    if (t) music.currentTime = t;
    if (p === 'true') music.play();

    updateMusicUI();
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        localStorage.setItem('play', true);
    } else {
        music.pause();
        localStorage.setItem('play', false);
    }
    updateMusicUI();
}

music.ontimeupdate = () => {
    localStorage.setItem('time', music.currentTime);
};

function updateMusicUI() {
    if (!btn) return;
    btn.innerText = music.paused ? "🔇" : "🔊";
    updateSealState();
}

// SEAL SETUP
function setupSeal() {
    const seal = document.getElementById('seal');
    const msg = document.getElementById('seal-message');

    if (!seal) return;

    seal.addEventListener('click', () => {
        seal.classList.add('seal-clicked');

        const texts = [
            "🦭 Hi Emma it's Sealy!",
            "💖 Sending love!",
            "✨ I heard you are crazy for seals!",
            "🫶 Happy anniversary to you !"
        ];

        msg.innerText = texts[Math.floor(Math.random()*texts.length)];
        msg.classList.add('show');

        setTimeout(() => msg.classList.remove('show'), 1800);

        for (let i=0;i<5;i++){
            let h=document.createElement('div');
            h.innerHTML="💖";
            h.style.position="fixed";
            h.style.right="50px";
            h.style.bottom="120px";
            document.body.appendChild(h);

            requestAnimationFrame(()=>{
                h.style.transform="translateY(-60px)";
                h.style.opacity="0";
            });

            setTimeout(()=>h.remove(),800);
        }

        setTimeout(()=>seal.classList.remove('seal-clicked'),200);
    });

    updateSealState();
}

function updateSealState() {
    const seal = document.getElementById('seal');
    const sleep = document.getElementById('seal-sleep');

    if (!seal) return;

    if (music.paused) {
        seal.classList.add('seal-sleeping');
        if (sleep) sleep.classList.add('show');
    } else {
        seal.classList.remove('seal-sleeping');
        if (sleep) sleep.classList.remove('show');
    }
}

// HEARTS
setInterval(()=>{
    let h=document.createElement('div');
    h.className="heart";
    h.innerHTML="💖";
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
},800);

// SLIDESHOW
let slides = document.querySelectorAll('.slide');
let i=0;

if(slides.length>0){
    setInterval(()=>{
        slides.forEach(s=>s.classList.remove('active'));
        i=(i+1)%slides.length;
        slides[i].classList.add('active');
    },3000);
}

// INIT
window.onload = () => {
    restoreMusic();
    setupSeal();
};