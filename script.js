/* =========================================
   AI VIDEO STUDIO - SCRIPT.JS
   ========================================= */

// Scroll to Creator
function openCreator() {
    const creator = document.getElementById("create");
    if (creator) {
        creator.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Scroll to Prompt
function scrollToPrompt() {
    const promptSection = document.getElementById("prompt");
    if (promptSection) {
        promptSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Generate AI Prompt
function generatePrompt() {

    const descriptionElement = document.querySelector("textarea");

    if (!descriptionElement) {
        alert("Please enter your video idea.");
        return;
    }

    const description = descriptionElement.value.trim();

    if (description === "") {
        alert("पहले अपनी video idea लिखें।");
        descriptionElement.focus();
        return;
    }

    const styleElement = document.querySelector("#videoStyle");
    const ratioElement = document.querySelector("#aspectRatio");
    const durationElement = document.querySelector("#duration");

    const style = styleElement ? styleElement.value : "3D Cartoon";
    const ratio = ratioElement ? ratioElement.value : "9:16";
    const duration = durationElement ? durationElement.value : "10 Seconds";

    const prompt =
        "Create a high-quality " + style +
        " video about: " + description +
        ". Make it cinematic, detailed, smooth and professional. " +
        "Aspect ratio: " + ratio +
        ". Duration: " + duration +
        ". Add realistic lighting, smooth camera movement, " +
        "high-quality animation and engaging visual effects.";

    const promptBox =
        document.getElementById("promptText") ||
        document.getElementById("generatedPrompt");

    if (promptBox) {
        promptBox.value = prompt;
    }

    alert("✨ AI Prompt तैयार हो गया!");
}

// Copy Prompt
function copyPrompt() {

    const promptBox =
        document.getElementById("promptText") ||
        document.getElementById("generatedPrompt");

    if (!promptBox || promptBox.value.trim() === "") {
        alert("पहले AI Prompt generate करें।");
        return;
    }

    navigator.clipboard.writeText(promptBox.value)
        .then(function () {
            alert("✅ Prompt copied!");
        })
        .catch(function () {
            promptBox.select();
            document.execCommand("copy");
            alert("✅ Prompt copied!");
        });
}

// Generate Video
function generateVideo() {

    const descriptionElement = document.querySelector("textarea");

    if (!descriptionElement || descriptionElement.value.trim() === "") {
        alert("पहले अपनी video idea लिखें।");
        return;
    }

    alert(
        "🎬 Your AI video is being prepared...\n\n" +
        "यह अभी demo version है। वास्तविक AI video generation के लिए AI video API/backend जोड़ना होगा।"
    );
}

// Select Character
function useCharacter(name) {

    const descriptionElement = document.querySelector("textarea");

    if (descriptionElement) {
        descriptionElement.value =
            "Create a professional video featuring " +
            name +
            " character.";
    }

    openCreator();
}

// Create New Character
function createCharacter() {

    const name = prompt("अपने नए character का नाम लिखें:");

    if (name && name.trim() !== "") {

        alert(
            "✨ Character '" +
            name +
            "' तैयार करने के लिए चुना गया है!"
        );

        openCreator();
    }
}

// Page Loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("AI Video Studio loaded successfully.");

    // Smooth navigation
    document.querySelectorAll("a[href^='#']").forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

});
