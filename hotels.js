const images = [

    "Images/WinkingSkeever.png",
    "Images/BanneredMare.png",
    "Images/BeeAndBarb.png",
    "Images/TheSleepingGiantInn.png",
    "Images/NightgateInn.png"

];

let current = 0;

const img = document.getElementById("hotelCarousel");

document.getElementById("next").onclick = () => {

    current++;

    if(current >= images.length){

        current = 0;

    }

    img.src = images[current];

};

document.getElementById("prev").onclick = () => {

    current--;

    if(current < 0){

        current = images.length - 1;

    }

    img.src = images[current];

};

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
