
/* =====================================
   1. JELAJAH LAPISAN BUMI
===================================== */

const layerData = {
    kerak: {
        title: "Kerak Bumi",
        description: "Kerak Bumi adalah lapisan paling luar dan paling tipis. Lapisan ini menjadi tempat manusia, hewan, dan tumbuhan hidup. Kerak Bumi tersusun dari batuan dan tanah."
    },
    mantel: {
        title: "Mantel Bumi",
        description: "Mantel merupakan lapisan yang berada di bawah kerak Bumi. Lapisan ini sangat tebal dan tersusun dari batuan panas. Sebagian material mantel dapat bergerak sangat lambat."
    },
    intiLuar: {
        title: "Inti Luar",
        description: "Inti luar merupakan lapisan yang tersusun dari logam besi dan nikel dalam keadaan cair. Pergerakan logam cair di lapisan ini membantu membentuk medan magnet Bumi."
    },
    intiDalam: {
        title: "Inti Dalam",
        description: "Inti dalam adalah bagian paling dalam dari Bumi. Lapisan ini sangat panas dan tersusun terutama dari besi dan nikel dalam keadaan padat karena tekanan yang sangat besar."
    }
};

function showLayer(layer) {
    const title = document.getElementById("layerTitle");
    const description = document.getElementById("layerDescription");

    if (!title || !description || !layerData[layer]) return;

    title.textContent = layerData[layer].title;
    description.textContent = layerData[layer].description;

    document.querySelectorAll(".tab-btn").forEach(button => {
        button.classList.remove("active");
    });

    const activeButton = document.querySelector(
        `.tab-btn[data-layer="${layer}"]`
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }
}

document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
        showLayer(button.dataset.layer);
    });
});


/* =====================================
   2. KARTU PINTAR / FLASHCARD
===================================== */

const flashcards = [
    {
        question: "Apa lapisan paling luar Bumi?",
        answer: "Kerak Bumi, yaitu lapisan tempat kita tinggal."
    },
    {
        question: "Apa nama lapisan paling tebal?",
        answer: "Mantel Bumi merupakan lapisan yang paling tebal."
    },
    {
        question: "Apa penyusun utama inti Bumi?",
        answer: "Besi dan nikel merupakan penyusun utama inti Bumi."
    },
    {
        question: "Apa wujud inti luar Bumi?",
        answer: "Inti luar Bumi berwujud cair."
    },
    {
        question: "Mengapa inti dalam tetap padat?",
        answer: "Karena tekanan yang sangat besar membuat materialnya tetap padat meskipun suhunya sangat tinggi."
    }
];

let flashIndex = 0;
let showingAnswer = false;

function renderFlashcard() {
    const card = document.getElementById("flashcard");
    if (!card) return;

    const item = flashcards[flashIndex];

    card.innerHTML = showingAnswer
        ? `<h3>Jawabannya</h3><p>${item.answer}</p>`
        : `<h3>${item.question}</h3><p>Ketuk kartu untuk melihat jawaban</p>`;

    const counter = document.getElementById("flashCounter");
    if (counter) {
        counter.textContent = `Kartu ${flashIndex + 1} dari ${flashcards.length}`;
    }
}

function flipCard() {
    showingAnswer = !showingAnswer;
    renderFlashcard();
}

function nextCard() {
    flashIndex = (flashIndex + 1) % flashcards.length;
    showingAnswer = false;
    renderFlashcard();
}

function previousCard() {
    flashIndex = (flashIndex - 1 + flashcards.length) % flashcards.length;
    showingAnswer = false;
    renderFlashcard();
}

renderFlashcard();


/* =====================================
   3. KUIS LAPISAN BUMI
===================================== */

const questions = [
    {
        question: "Lapisan paling luar Bumi disebut ...",
        options: ["Mantel", "Kerak Bumi", "Inti Luar", "Inti Dalam"],
        answer: 1,
        explanation: "Kerak Bumi adalah lapisan paling luar tempat kita hidup."
    },
    {
        question: "Lapisan Bumi yang paling tebal adalah ...",
        options: ["Kerak", "Inti Dalam", "Mantel", "Inti Luar"],
        answer: 2,
        explanation: "Mantel merupakan lapisan Bumi yang paling tebal."
    },
    {
        question: "Inti luar Bumi tersusun terutama dari ...",
        options: ["Air dan tanah", "Besi dan nikel cair", "Pasir dan batu", "Gas"],
        answer: 1,
        explanation: "Inti luar tersusun terutama dari besi dan nikel dalam keadaan cair."
    },
    {
        question: "Lapisan paling dalam Bumi adalah ...",
        options: ["Kerak", "Mantel", "Inti Luar", "Inti Dalam"],
        answer: 3,
        explanation: "Inti dalam berada di bagian paling pusat Bumi."
    },
    {
        question: "Tempat manusia tinggal berada di lapisan ...",
        options: ["Kerak Bumi", "Mantel", "Inti Luar", "Inti Dalam"],
        answer: 0,
        explanation: "Manusia tinggal di permukaan kerak Bumi."
    },
    {
        question: "Mantel Bumi berada di bawah lapisan ...",
        options: ["Inti Dalam", "Inti Luar", "Kerak Bumi", "Atmosfer"],
        answer: 2,
        explanation: "Mantel terletak tepat di bawah kerak Bumi."
    },
    {
        question: "Inti dalam Bumi memiliki wujud ...",
        options: ["Cair", "Padat", "Gas", "Uap"],
        answer: 1,
        explanation: "Inti dalam tetap padat karena tekanan yang sangat besar."
    },
    {
        question: "Pergerakan logam cair di inti luar membantu membentuk ...",
        options: ["Awan", "Hujan", "Medan magnet Bumi", "Gunung"],
        answer: 2,
        explanation: "Pergerakan logam cair di inti luar menghasilkan medan magnet Bumi."
    },
    {
        question: "Urutan lapisan Bumi dari luar ke dalam adalah ...",
        options: [
            "Mantel, kerak, inti dalam, inti luar",
            "Kerak, mantel, inti luar, inti dalam",
            "Inti dalam, mantel, kerak, inti luar",
            "Kerak, inti dalam, mantel, inti luar"
        ],
        answer: 1,
        explanation: "Urutannya adalah kerak, mantel, inti luar, lalu inti dalam."
    },
    {
        question: "Batuan panas yang menyusun sebagian besar mantel dapat bergerak ...",
        options: [
            "Sangat cepat",
            "Seperti air mengalir",
            "Sangat lambat",
            "Tidak pernah bergerak"
        ],
        answer: 2,
        explanation: "Material mantel dapat bergerak sangat lambat dalam waktu yang sangat panjang."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const progressBar = document.getElementById("progressBar");
    const questionNumber = document.getElementById("questionNumber");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("nextQuestion");

    if (!questionElement || !answersElement) return;

    const item = questions[currentQuestion];

    questionElement.textContent = item.question;
    questionNumber.textContent =
        `Soal ${currentQuestion + 1} dari ${questions.length}`;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    feedback.textContent = "";
    answersElement.innerHTML = "";
    answered = false;

    nextButton.disabled = true;

    item.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) return;

    answered = true;

    const item = questions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("nextQuestion");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === item.answer) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== item.answer) {
            button.classList.add("wrong");
        }
    });

    if (selectedIndex === item.answer) {
        score++;
        feedback.textContent = "Benar! " + item.explanation;
        feedback.style.color = "#31834b";
    } else {
        feedback.textContent = "Belum tepat. " + item.explanation;
        feedback.style.color = "#b34b4b";
    }

    nextButton.disabled = false;
    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Lihat Hasil"
            : "Soal Berikutnya";
}

function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const quizBox = document.getElementById("quizBox");

    quizBox.innerHTML = `
        <div style="text-align:center; padding:25px;">
            <h2>Kuis Selesai!</h2>
            <h3>Nilai Kamu</h3>
            <p style="font-size:48px; color:#7651a8; font-weight:bold;">
                ${score * 10}/100
            </p>
            <p>
                Kamu menjawab ${score} dari ${questions.length} soal dengan benar.
            </p>
            <p>
                ${
                    score >= 8
                        ? "Hebat! Kamu sudah memahami lapisan Bumi."
                        : score >= 5
                        ? "Bagus! Terus belajar agar semakin pintar."
                        : "Jangan menyerah! Yuk, pelajari lagi materi lapisan Bumi."
                }
            </p>
            <button class="small-btn" onclick="restartQuiz()">
                Ulangi Kuis
            </button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;

    const quizBox = document.getElementById("quizBox");

    quizBox.innerHTML = `
        <p id="questionNumber"></p>
        <div class="progress">
            <div class="progress-bar" id="progressBar"></div>
        </div>
        <h3 id="question"></h3>
        <div class="answers" id="answers"></div>
        <p class="feedback" id="feedback"></p>
        <div class="quiz-controls">
            <button class="small-btn" id="nextQuestion"
                onclick="nextQuestion()" disabled>
                Soal Berikutnya
            </button>
        </div>
    `;

    showQuestion();
}

if (document.getElementById("quizBox")) {
    showQuestion();
}


/* =====================================
   4. PERMAINAN MENGURUTKAN LAPISAN BUMI
===================================== */

const correctOrder = [
    "Kerak Bumi",
    "Mantel Bumi",
    "Inti Luar",
    "Inti Dalam"
];

let selectedPiece = null;
let placedPieces = [];

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function setupOrderGame() {
    const pieces = document.getElementById("pieceList");
    const slots = document.getElementById("dropList");

    if (!pieces || !slots) return;

    selectedPiece = null;
    placedPieces = [];

    pieces.innerHTML = "";
    slots.innerHTML = "";

    shuffleArray(correctOrder).forEach(name => {
        const piece = document.createElement("button");

        piece.className = "piece";
        piece.textContent = name;
        piece.draggable = true;
        piece.dataset.name = name;

        piece.addEventListener("click", () => {
            selectPiece(piece);
        });

        piece.addEventListener("dragstart", event => {
            event.dataTransfer.setData("text/plain", name);
        });

        pieces.appendChild(piece);
    });

    correctOrder.forEach((name, index) => {
        const slot = document.createElement("div");

        slot.className = "drop-slot";
        slot.textContent = `Posisi ${index + 1}`;
        slot.dataset.position = index;

        slot.addEventListener("click", () => {
            if (selectedPiece) {
                placePiece(name, selectedPiece);
            }
        });

        slot.addEventListener("dragover", event => {
            event.preventDefault();
        });

        slot.addEventListener("drop", event => {
            event.preventDefault();

            const draggedName =
                event.dataTransfer.getData("text/plain");

            placePiece(name, draggedName);
        });

        slots.appendChild(slot);
    });
}

function selectPiece(piece) {
    if (piece.disabled) return;

    document.querySelectorAll(".piece").forEach(item => {
        item.classList.remove("selected");
    });

    piece.classList.add("selected");
    selectedPiece = piece.dataset.name;
}

function placePiece(slotName, pieceName) {
    if (!pieceName) return;

    const existingIndex = placedPieces.indexOf(pieceName);

    if (existingIndex !== -1) {
        placedPieces[existingIndex] = null;
    }

    const slotIndex = correctOrder.indexOf(slotName);
    const oldPiece = placedPieces[slotIndex];

    if (oldPiece) {
        const oldButton = [...document.querySelectorAll(".piece")]
            .find(button => button.dataset.name === oldPiece);

        if (oldButton) oldButton.disabled = false;
    }

    placedPieces[slotIndex] = pieceName;

    const slots = document.querySelectorAll(".drop-slot");
    const pieces = document.querySelectorAll(".piece");

    slots.forEach((slot, index) => {
        if (placedPieces[index]) {
            slot.textContent = placedPieces[index];
            slot.classList.add("filled");
        } else {
            slot.textContent = `Posisi ${index + 1}`;
            slot.classList.remove("filled");
        }
    });

    pieces.forEach(piece => {
        piece.disabled = placedPieces.includes(piece.dataset.name);
        piece.classList.remove("selected");
    });

    selectedPiece = null;
}

function checkOrder() {
    const feedback = document.getElementById("orderFeedback");

    if (!feedback) return;

    if (placedPieces.length !== 4 || placedPieces.some(item => !item)) {
        feedback.textContent = "Lengkapi semua posisi terlebih dahulu.";
        feedback.style.color = "#b34b4b";
        return;
    }

    const isCorrect = correctOrder.every(
        (name, index) => placedPieces[index] === name
    );

    if (isCorrect) {
        feedback.textContent = "Hebat! Urutan lapisan Bumi kamu benar.";
        feedback.style.color = "#31834b";
    } else {
        feedback.textContent =
            "Belum tepat. Coba perhatikan urutan dari luar ke dalam.";
        feedback.style.color = "#b34b4b";
    }
}

function resetOrderGame() {
    setupOrderGame();

    const feedback = document.getElementById("orderFeedback");
    if (feedback) feedback.textContent = "";
}

setupOrderGame();


/* =====================================
   5. PERMAINAN MENCOCOKKAN
===================================== */

const matchingData = [
    {
        name: "Kerak Bumi",
        description: "Lapisan paling luar dan tempat makhluk hidup tinggal."
    },
    {
        name: "Mantel Bumi",
        description: "Lapisan tebal yang berada di bawah kerak Bumi."
    },
    {
        name: "Inti Luar",
        description: "Lapisan besi dan nikel yang berwujud cair."
    },
    {
        name: "Inti Dalam",
        description: "Bagian paling pusat Bumi yang berwujud padat."
    }
];

let selectedName = null;
let selectedDescription = null;
let matchedPairs = [];

function setupMatchingGame() {
    const nameContainer = document.getElementById("matchNames");
    const descriptionContainer =
        document.getElementById("matchDescriptions");

    if (!nameContainer || !descriptionContainer) return;

    selectedName = null;
    selectedDescription = null;
    matchedPairs = [];

    nameContainer.innerHTML = "";
    descriptionContainer.innerHTML = "";

    shuffleArray(matchingData).forEach(item => {
        const button = document.createElement("button");

        button.className = "match-option";
        button.textContent = item.name;
        button.dataset.name = item.name;

        button.addEventListener("click", () => {
            selectMatchName(button);
        });

        nameContainer.appendChild(button);
    });

    shuffleArray(matchingData).forEach(item => {
        const button = document.createElement("button");

        button.className = "match-option";
        button.textContent = item.description;
        button.dataset.name = item.name;

        button.addEventListener("click", () => {
            selectMatchDescription(button);
        });

        descriptionContainer.appendChild(button);
    });
}

function selectMatchName(button) {
    if (matchedPairs.includes(button.dataset.name)) return;

    document.querySelectorAll("#matchNames .match-option")
        .forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");
    selectedName = button.dataset.name;

    checkMatchingPair();
}

function selectMatchDescription(button) {
    if (matchedPairs.includes(button.dataset.name)) return;

    document.querySelectorAll("#matchDescriptions .match-option")
        .forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");
    selectedDescription = button.dataset.name;

    checkMatchingPair();
}

function checkMatchingPair() {
    if (!selectedName || !selectedDescription) return;

    const feedback = document.getElementById("matchFeedback");

    if (selectedName === selectedDescription) {
        matchedPairs.push(selectedName);

        document.querySelectorAll(".match-option").forEach(button => {
            if (button.dataset.name === selectedName) {
                button.classList.remove("selected");
                button.classList.add("matched");
                button.disabled = true;
            }
        });

        feedback.textContent = "Pasangan benar! Bagus sekali.";
        feedback.style.color = "#31834b";

        if (matchedPairs.length === matchingData.length) {
            feedback.textContent =
                "Selamat! Semua pasangan berhasil kamu cocokkan.";
        }
    } else {
        feedback.textContent = "Belum cocok. Coba cari pasangan yang tepat.";
        feedback.style.color = "#b34b4b";

        const nameButton = document.querySelector(
            `#matchNames [data-name="${selectedName}"]`
        );

        const descriptionButton = document.querySelector(
            `#matchDescriptions [data-name="${selectedDescription}"]`
        );

        if (nameButton) nameButton.classList.add("wrong");
        if (descriptionButton) descriptionButton.classList.add("wrong");

        setTimeout(() => {
            if (nameButton) nameButton.classList.remove("wrong", "selected");
            if (descriptionButton) {
                descriptionButton.classList.remove("wrong", "selected");
            }
        }, 700);
    }

    selectedName = null;
    selectedDescription = null;
}

function resetMatchingGame() {
    setupMatchingGame();

    const feedback = document.getElementById("matchFeedback");
    if (feedback) feedback.textContent = "";
}

setupMatchingGame();


/* =====================================
   6. TOMBOL KEMBALI KE ATAS
===================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =====================================
   7. TAHUN OTOMATIS DI FOOTER
===================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
