const encounters = [

    {
        title: "Solitude Arch",
        image: "Images/SolitudeArch.png",
        rarity: "Common Encounter",
        rarityClass: "common",
        description: "The natural stone arch supporting Solitude is one of Skyrim's most famous landmarks. Formed over thousands of years by erosion and weathering, it has become one of the province's most recognisable sights."
    },

    {
        title: "Blue Mountain Flowers",
        image: "Images/BlueFlower.png",
        rarity: "Common Encounter",
        rarityClass: "common",
        description: "Blue Mountain Flowers grow throughout Skyrim and are highly sought after by alchemists. They are commonly used in healing potions."
    },

    {
        title: "Wolf Pack",
        image: "Images/WolfPack.png",
        rarity: "Common Encounter",
        rarityClass: "common",
        description: "Wolves roam much of Skyrim's wilderness. They hunt in packs and will often attack travellers who venture too close."
    },

    {
        title: "Whiterun Tundra",
        image: "Images/WhiterunTundra.png",
        rarity: "Common Encounter",
        rarityClass: "common",
        description: "The plains surrounding Whiterun are home to mammoths, giants and countless herds of wildlife grazing beneath the open skies."
    },

    {
        title: "Snowberries",
        image: "Images/Snowberries.png",
        rarity: "Uncommon Encounter",
        rarityClass: "uncommon",
        description: "Snowberries thrive throughout Skyrim's colder regions and are an essential ingredient for many resistance potions."
    },

    {
        title: "Spriggan",
        image: "Images/Spriggan.png",
        rarity: "Uncommon Encounter",
        rarityClass: "uncommon",
        description: "Spriggans are mysterious guardians of nature that protect Skyrim's forests from those who seek to exploit them."
    },

    {
        title: "Eastmarch Hot Springs",
        image: "Images/HotSprings.png",
        rarity: "Uncommon Encounter",
        rarityClass: "uncommon",
        description: "Volcanic activity beneath Eastmarch creates beautiful geothermal hot springs surrounded by unique plant life."
    },

    {
        title: "Sabre Cat",
        image: "Images/SabreCat.png",
        rarity: "Rare Encounter",
        rarityClass: "rare",
        description: "Sabre Cats are among Skyrim's deadliest predators. Their speed and strength make them a serious threat to unprepared travellers."
    },

    {
        title: "Giant Camp",
        image: "Images/GiantCamp.png",
        rarity: "Rare Encounter",
        rarityClass: "rare",
        description: "Giants peacefully herd mammoths across the tundra. Although generally calm, they fiercely defend their camps."
    },

    {
        title: "Aurora Borealis",
        image: "Images/AururaBorealis.png",
        rarity: "Rare Encounter",
        rarityClass: "rare",
        description: "As darkness falls, colourful lights dance across Skyrim's northern skies, creating one of the province's most breathtaking spectacles."
    },

    {
        title: "Wispmother",
        image: "Images/Wispmother.png",
        rarity: "Rare Encounter",
        rarityClass: "rare",
        description: "Wispmothers are ghostly spirits found in Skyrim's icy mountains. They command frost magic and are rarely encountered."
    },

    {
        title: "Dragon Sighting",
        image: "Images/Dragons.png",
        rarity: "Legendary Encounter",
        rarityClass: "legendary",
        description: "A dragon circles overhead. These ancient creatures were once believed extinct before returning during the Fourth Era."
    },

    {
        title: "Throat of the World",
        image: "Images/ThroatOfTheWorld.png",
        rarity: "Legendary Encounter",
        rarityClass: "legendary",
        description: "The highest mountain in Tamriel towers above Skyrim. Only the most determined travellers reach its summit."
    },

    {
        title: "Nirnroot",
        image: "Images/Nirnroot.png",
        rarity: "Legendary Encounter",
        rarityClass: "legendary",
        description: "Recognisable by its glowing appearance and distinctive humming sound, Nirnroot is one of Tamriel's rarest plants."
    },

    {
        title: "Ancient Standing Stones",
        image: "Images/StandingStone.png",
        rarity: "Legendary Encounter",
        rarityClass: "legendary",
        description: "Scattered throughout Skyrim are mysterious Standing Stones that grant blessings to those who discover them."
    }

];

const button = document.getElementById("exploreButton");

button.addEventListener("click", randomEncounter);

function randomEncounter() {

    const encounter = encounters[Math.floor(Math.random() * encounters.length)];

    document.getElementById("encounterImage").src = encounter.image;

    document.getElementById("encounterTitle").textContent = encounter.title;

    document.getElementById("encounterDescription").textContent = encounter.description;

    const rarity = document.getElementById("encounterRarity");

    rarity.textContent = encounter.rarity;

    rarity.className = "rarity " + encounter.rarityClass;

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
