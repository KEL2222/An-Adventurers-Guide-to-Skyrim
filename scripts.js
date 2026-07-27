// ==============================
// Carousel
// ==============================

const carousel = document.querySelector(".carousel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const scrollAmount = 440;

// Only run carousel code if the elements exist
if (carousel && next && prev) {

    next.addEventListener("click", () => {

        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    });

    prev.addEventListener("click", () => {

        carousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    });

}


// ==============================
// Ambient Background Music
// ==============================

const SkyrimAudio = document.getElementById("SkyrimAudio");

// Only run audio code if the audio exists
if (SkyrimAudio) {

    // Set volume (0.0 - 1.0)
    SkyrimAudio.volume = 0.15;

    function startSkyrimAudio() {

        SkyrimAudio.play().catch(error => {
            console.log("Unable to play audio:", error);
        });

        // Only start once
        document.removeEventListener("click", startSkyrimAudio);
        document.removeEventListener("keydown", startSkyrimAudio);
        document.removeEventListener("touchstart", startSkyrimAudio);

    }

    // Wait for first user interaction
    document.addEventListener("click", startSkyrimAudio);
    document.addEventListener("keydown", startSkyrimAudio);
    document.addEventListener("touchstart", startSkyrimAudio);

}
