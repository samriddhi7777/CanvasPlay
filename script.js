const prompts = {
    ui: [
        "Design a fintech dashboard for students.",
        "Create a meditation app UI for beginners.",
        "Design a minimal task manager app.",
        "Build a weather app with neumorphism style."
    ],
    illustration: [
        "Illustrate a cyberpunk street market at night.",
        "Draw a dragon flying over a futuristic city.",
        "Create a magical forest scene in Pixar style.",
        "Illustrate a robot learning emotions."
    ],
    branding: [
        "Design a logo for a startup called QuantumX.",
        "Create a brand identity for a sustainable clothing company.",
        "Design packaging for luxury dark chocolate.",
        "Create a logo for a space tourism company."
    ]
};

const promptText = document.getElementById("promptText");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const colorsDiv = document.getElementById("colors");
const categorySelect = document.getElementById("category");

let historyList = [];

generateBtn.addEventListener("click", generatePrompt);
copyBtn.addEventListener("click", copyPrompt);

function generatePrompt() {
    const selectedCategory = categorySelect.value;
    const categoryPrompts = prompts[selectedCategory];

    const randomIndex = Math.floor(Math.random() * categoryPrompts.length);
    const selectedPrompt = categoryPrompts[randomIndex];

    promptText.textContent = selectedPrompt;

    addToHistory(selectedPrompt);
    generatePalette();
}

function copyPrompt() {
    navigator.clipboard.writeText(promptText.textContent);
    alert("Prompt copied!");
}

function addToHistory(prompt) {
    historyList.unshift(prompt);

    if (historyList.length > 5) {
        historyList.pop();
    }

    displayHistory();
}

function displayHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "";

    historyList.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        historyDiv.appendChild(p);
    });
}

function generatePalette() {
    colorsDiv.innerHTML = "";

    let firstColor = getRandomColor();
    let secondColor = getRandomColor();

    document.body.style.background =
        `linear-gradient(135deg, ${firstColor}, ${secondColor})`;

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const box = document.createElement("div");
        box.classList.add("color-box");
        box.style.background = color;
        colorsDiv.appendChild(box);
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}