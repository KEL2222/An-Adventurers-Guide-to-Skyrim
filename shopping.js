const sections = document.querySelectorAll(".shop-content");
const buttons = document.querySelectorAll(".shopBtn");

function showShop(id, button){

    sections.forEach(section => {

        section.style.display = "none";

    });

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });

    document.getElementById(id).style.display = "block";

    button.classList.add("active");

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
