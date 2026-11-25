
const questions = {
    easy: [
        {q:"Yer yuzidagi eng katta materik qaysi?",a:["Afrika","Yevrosiyo","Avstraliya","Antarktida"],c:1,e:"Yevrosiyo Yer yuzidagi eng katta materikdir."},
        {q:"Dunyodagi eng katta okean qaysi?",a:["Atlantika","Hind","Tinch","Shimoliy Muz"],c:2,e:"Tinch okeani dunyodagi eng katta okeandir."},
        {q:"Yerning tabiiy yo‘ldoshi nima?",a:["Mars","Oy","Quyosh","Venera"],c:1,e:"Oy Yerning yagona tabiiy yo‘ldoshidir."},
        {q:"Eng katta issiq cho‘l qaysi?",a:["Gobi","Sahroi Kabir","Qizilqum","Kalahari"],c:1,e:"Sahroi Kabir eng katta issiq cho‘ldir."},
        {q:"O‘zbekiston qaysi materikda joylashgan?",a:["Afrika","Janubiy Amerika","Yevrosiyo","Avstraliya"],c:2,e:"O‘zbekiston Yevrosiyo materigida joylashgan."},
        {q:"Yerning shakli qanday?",a:["Tekis","Kub","Geoid","Uchburchak"],c:2,e:"Yer shakli geoidga yaqin."},
        {q:"Dunyodagi eng baland tog‘ cho‘qqisi qaysi?",a:["Elbrus","Everest","Montblan","Kilimanjaro"],c:1,e:"Everest dengiz sathidan 8848,86 metr baland."},
        {q:"Kompasning magnit strelkasi qaysi tomonni ko‘rsatadi?",a:["Janub","Sharq","Shimol","G‘arb"],c:2,e:"Kompasning shimoliy uchi magnit shimol tomonga yo‘naladi."},
        {q:"Yer yuzida nechta materik ajratiladi?",a:["4","5","6","7"],c:2,e:"An'anaviy geografik tasnifda 6 ta materik ajratiladi."},
        {q:"Dunyodagi eng katta orol qaysi?",a:["Madagaskar","Grenlandiya","Borneo","Yangi Gvineya"],c:1,e:"Grenlandiya dunyodagi eng katta oroldir."},
        {q:"Nil daryosi asosan qaysi qit'ada joylashgan?",a:["Afrika","Osiyo","Yevropa","Avstraliya"],c:0,e:"Nil Afrikaning shimoli-sharqidan oqadi."},
        {q:"Xaritada ko‘k rang odatda nimani ifodalaydi?",a:["Tog‘larni","Suv havzalarini","Cho‘llarni","O‘rmonlarni"],c:1,e:"Ko‘k rang xaritalarda suv obyektlarini ifodalaydi."}
    ],

    medium: [
        {q:"Dunyodagi eng chuqur ko‘l qaysi?",a:["Kaspiy","Baykal","Tanganika","Viktoriya"],c:1,e:"Baykal ko‘lining eng chuqur joyi taxminan 1642 metr."},
        {q:"Ekvator qaysi geografik kenglikdan o'tadi?",a:["0°","23,5°","45°","90°"],c:0,e:"Ekvator 0° geografik kenglikda joylashgan."},
        {q:"Qaysi bo‘g‘oz Osiyo va Shimoliy Amerikani ajratadi?",a:["Gibraltar","Bering","Malakka","La-Mansh"],c:1,e:"Bering bo‘g‘ozi ikki materikni ajratadi."},
        {q:"Atmosferaning eng quyi qatlami qaysi?",a:["Stratosfera","Mezosfera","Troposfera","Termosfera"],c:2,e:"Troposferada asosiy ob-havo hodisalari sodir bo‘ladi."},
        {q:"O‘zbekistonning eng katta cho‘llaridan biri qaysi?",a:["Sahroi Kabir","Qizilqum","Atakama","Gobi"],c:1,e:"Qizilqum O‘zbekiston hududining katta qismini egallaydi."},
        {q:"Dunyodagi eng uzun tog‘ tizmasi qaysi?",a:["Himolay","And","Alp","Kordilyera"],c:1,e:"And tog‘lari quruqlikdagi eng uzun kontinental tog‘ tizmasidir."},
        {q:"Qaysi xarita turi relyefni tasvirlaydi?",a:["Siyosiy","Iqtisodiy","Fizik","Demografik"],c:2,e:"Fizik xaritalarda relyef va tabiiy obyektlar tasvirlanadi."},
        {q:"Dunyoning eng katta yarimoroli qaysi?",a:["Hindiston","Arabiston","Skandinaviya","Kamchatka"],c:1,e:"Arabiston yarimoroli dunyodagi eng katta yarimoroldir."},
        {q:"Tropik kengliklar taxminan necha gradusda joylashgan?",a:["0°","23,5°","45°","66,5°"],c:1,e:"Shimoliy va Janubiy tropiklar taxminan 23,5° kenglikda."},
        {q:"Qaysi daryo Amazonka havzasiga tegishli?",a:["Nil","Missisipi","Amazonka","Volga"],c:2,e:"Amazonka daryosi Janubiy Amerikada joylashgan."},
        {q:"Qaysi davlat ikki qit'ada joylashgan?",a:["Yaponiya","Turkiya","Islandiya","Madagaskar"],c:1,e:"Turkiya hududi Yevropa va Osiyoda joylashgan."},
        {q:"Xarita masshtabi 1:100 000 nimani anglatadi?",a:["1 sm = 100 m","1 sm = 1 km","1 sm = 10 km","1 sm = 100 km"],c:1,e:"Xaritadagi 1 sm joyda 100 000 sm, ya'ni 1 km ga teng."}
    ],

    hard: [
        {q:"Xaritada 1:500 000 masshtabda 4 sm masofa haqiqatda qancha?",a:["2 km","10 km","20 km","200 km"],c:1,e:"4 × 500 000 sm = 20 km? Yo‘q, 4 × 5 km = 20 km."},
        {q:"Xalqaro sana o‘zgarish chizig‘i asosan qaysi meridianga yaqin?",a:["0°","90°","180°","45°"],c:2,e:"Sana o‘zgarish chizig‘i asosan 180° meridianga yaqin."},
        {q:"Dengiz sathidan eng past quruqlik nuqtasi qayerda?",a:["O‘lik dengiz qirg‘og‘i","Baykal","Titikaka","Kaspiy sohillari"],c:0,e:"O‘lik dengiz sohili quruqlikdagi eng past nuqtalardan biridir."},
        {q:"Izogipsalar nimani birlashtiradi?",a:["Bir xil haroratni","Bir xil bosimni","Bir xil balandlikni","Bir xil yog‘inni"],c:2,e:"Izogipsalar bir xil balandlikdagi nuqtalarni birlashtiradi."},
        {q:"Geografik koordinatalar nimalardan iborat?",a:["Masofa va maydon","Kenglik va uzunlik","Balandlik va chuqurlik","Tezlik va vaqt"],c:1,e:"Geografik koordinatalar kenglik va uzunlikdan iborat."},
        {q:"Qaysi oqim Shimoliy Atlantika mintaqasining iqlimiga ta'sir ko‘rsatadi?",a:["Bengela","Golfstrim","Peru","Kaliforniya"],c:1,e:"Golfstrim va uning davomi G‘arbiy Yevropa iqlimiga ta'sir qiladi."},
        {q:"Karst relyefi asosan qaysi jinslarning erishi natijasida hosil bo‘ladi?",a:["Granit","Ohaktosh","Bazalt","Qum"],c:1,e:"Karst shakllari ko‘pincha ohaktoshning erishi natijasida hosil bo‘ladi."},
        {q:"Qaysi proyeksiya xaritalarda yo‘nalishlarni saqlashi bilan mashhur?",a:["Merkator","Gall-Peters","Robinson","Azimutal teng maydonli"],c:0,e:"Merkator proyeksiyasi burchaklarni saqlaydi."},
        {q:"Qaysi daryo ekvatorni ikki marta kesib o‘tadi?",a:["Nil","Kongo","Niger","Zambezi"],c:1,e:"Kongo daryosi ekvatorni ikki marta kesib o‘tadi."},
        {q:"Okean tubidagi eng chuqur botiq qaysi?",a:["Puerto-Riko botig‘i","Mariana botig‘i","Yava botig‘i","Tonga botig‘i"],c:1,e:"Mariana botig‘idagi Challenger chuqurligi okeanning eng chuqur ma'lum nuqtasidir."},
        {q:"Qaysi olim geografiya fanining asoschilaridan biri hisoblanadi va geografiya atamasini qo‘llagan?",a:["Aristotel","Eratosten","Ptolemey","Magellan"],c:1,e:"Eratosten geografiya atamasini ilmiy muomalaga kiritgan olimlardan biridir."},
        {q:"Dunyo xaritasida 1° geografik kenglikning uzunligi taxminan qancha?",a:["11,1 km","55,5 km","111 km","200 km"],c:2,e:"1° kenglik taxminan 111 km ga teng."}
    ],

    expert: [
        {q:"Yerning aylanish o‘qining ekliptika tekisligiga nisbatan og‘ish burchagi taxminan qancha?",a:["23,44°","45°","66,56°","90°"],c:2,e:"Yer o‘qining ekliptika tekisligiga nisbatan og‘ishi taxminan 66,56°."},
        {q:"Lambertning konusli proyeksiyasi qaysi hududlarni tasvirlashda qulay?",a:["Ekvatorial hududlar","O‘rta kengliklar","Faqat qutblar","Faqat okeanlar"],c:1,e:"Konusli proyeksiyalar o‘rta kengliklardagi hududlar uchun qulay."},
        {q:"UTM koordinatalar tizimi Yer yuzasini nechta zonaga ajratadi?",a:["30","45","60","90"],c:2,e:"UTM tizimi 6° kenglikdagi 60 ta zonadan foydalanadi."},
        {q:"Geoid tushunchasi nimani anglatadi?",a:["Yerning ideal shar shaklini","Yerning ekvatorial kesimini","Yerning gravitatsion maydoniga bog‘liq ekvipotensial sirtni","Yerning ichki yadrosini"],c:2,e:"Geoid o‘rtacha dengiz sathiga mos keluvchi gravitatsion ekvipotensial sirtdir."},
        {q:"Qaysi proyeksiya barcha meridianlarni to‘g‘ri chiziq sifatida tasvirlaydi?",a:["Merkator","Azimutal","Sinusoidal","Mollveyde"],c:0,e:"Merkator proyeksiyasida meridianlar parallel to‘g‘ri chiziqlar ko‘rinishida bo‘ladi."},
        {q:"Geodeziyada triangulyatsiya usuli nimaga asoslanadi?",a:["Faqat balandlik o‘lchashga","Uchburchaklar burchaklarini o‘lchashga","Havo haroratiga","Daryo oqimiga"],c:1,e:"Triangulyatsiyada uchburchaklar tizimi va burchak o‘lchovlaridan foydalaniladi."},
        {q:"Qaysi sun'iy yo‘ldosh navigatsiya tizimi Yevropa Ittifoqiga tegishli?",a:["GPS","GLONASS","Galileo","BeiDou"],c:2,e:"Galileo — Yevropa sun'iy yo‘ldosh navigatsiya tizimi."},
        {q:"Kartografiyada anamorfik xarita nima?",a:["Faqat relyef xaritasi","Maydonlari ma'lumot qiymatiga mos o‘zgartirilgan xarita","Faqat dengiz xaritasi","Masshtabsiz chizma"],c:1,e:"Anamorfik xaritada hudud o‘lchamlari ma'lumot qiymatiga qarab o‘zgaradi."},
        {q:"WGS 84 nimani ifodalaydi?",a:["Iqlim tasnifini","Geodezik koordinatalar datumini","Xarita ranglarini","Tog‘ jinslarini"],c:1,e:"WGS 84 global geodezik referens tizimidir."},
        {q:"Topografik xaritalarda gorizontallar orasidagi balandlik farqi nima deyiladi?",a:["Masshtab","Kesim balandligi","Azimut","Meridian"],c:1,e:"Gorizontallar kesim balandligi bilan belgilanadi."},
        {q:"Qaysi proyeksiya teng maydonli silindrik proyeksiyaga misol bo‘ladi?",a:["Gall-Peters","Merkator","Gnomonik","Perspektiv"],c:0,e:"Gall-Peters proyeksiyasi teng maydonli silindrik proyeksiyadir."},
        {q:"Kartografik generalizatsiya nima?",a:["Xaritani kattalashtirish","Obyektlarni maqsad va masshtabga mos soddalashtirish","Ranglarni o‘zgartirish","Xaritani nusxalash"],c:1,e:"Generalizatsiya xarita masshtabi va maqsadiga mos ravishda ma'lumotlarni tanlash va umumlashtirishdir."}
    ]
};

const levels = {
    easy: "BOSHLANG'ICH",
    medium: "O'RTA",
    hard: "YUQORI",
    expert: "EKSPERT"
};

let currentLevel = "easy";
let selectedQuestions = [];
let questionIndex = 0;
let score = 0;
let correct = 0;
let answered = false;

const $ = id => document.getElementById(id);

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    $(screenId).classList.add("active");
}

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function getRecord() {
    return Number(localStorage.getItem("kartografRecord")) || 0;
}

function updateRecordDisplay() {
    $("homeRecord").textContent = getRecord() + " / 10";
}

function startQuiz(level) {
    currentLevel = level;

    selectedQuestions = shuffle(questions[level]).slice(0, 10);

    questionIndex = 0;
    score = 0;
    correct = 0;
    answered = false;

    $("currentLevel").textContent = levels[level];
    $("currentScore").textContent = "0";

    showScreen("quizScreen");
    displayQuestion();
}

function displayQuestion() {
    answered = false;

    const question = selectedQuestions[questionIndex];

    $("questionNumber").textContent =
        String(questionIndex + 1).padStart(2, "0") + " / 10";

    $("questionText").textContent = question.q;
    $("feedback").textContent = "";
    $("feedback").className = "feedback";

    $("nextButton").disabled = true;

    $("nextButton").textContent =
        questionIndex === 9 ? "Natijani ko'rish →" : "Keyingi savol →";

    $("progressBar").style.width =
        ((questionIndex) / 10 * 100) + "%";

    const answers = $("answers");
    answers.innerHTML = "";

    question.a.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-button";
        button.textContent =
            String.fromCharCode(65 + index) + ". " + answer;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answers.appendChild(button);
    });
}

function checkAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    answered = true;

    const question = selectedQuestions[questionIndex];
    const buttons = document.querySelectorAll(".answer-button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === question.c) {
        score++;
        correct++;

        selectedButton.classList.add("correct");

        $("feedback").textContent =
            "✓ To'g'ri javob! " + question.e;

        $("feedback").className = "feedback success";
    } else {
        selectedButton.classList.add("wrong");
        buttons[question.c].classList.add("correct");

        $("feedback").textContent =
            "✕ Noto'g'ri javob. " + question.e;

        $("feedback").className = "feedback error";
    }

    $("currentScore").textContent = score;

    $("progressBar").style.width =
        ((questionIndex + 1) / 10 * 100) + "%";

    $("nextButton").disabled = false;
}

function nextQuestion() {
    if (!answered) return;

    questionIndex++;

    if (questionIndex < 10) {
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    showScreen("resultScreen");

    const percent = score * 10;
    const oldRecord = getRecord();
    const isNewRecord = score > oldRecord;

    if (isNewRecord) {
        localStorage.setItem("kartografRecord", score);
    }

    let title, message, icon;

    if (score === 10) {
        title = "MUKAMMAL NATIJA!";
        message = "Siz geografiya bilimdoni ekansiz!";
        icon = "🏆";
    } else if (score >= 8) {
        title = "AJOYIB NATIJA!";
        message = "Juda yaxshi! Bilimingiz yuqori darajada.";
        icon = "🥇";
    } else if (score >= 6) {
        title = "YAXSHI NATIJA!";
        message = "Yana biroz mashq qilsangiz, yanada yaxshi bo'ladi.";
        icon = "🌟";
    } else if (score >= 4) {
        title = "YOMON EMAS!";
        message = "Geografik bilimlaringizni rivojlantirishda davom eting.";
        icon = "📚";
    } else {
        title = "HARAKATNI DAVOM ETTIRING!";
        message = "Har bir sinov yangi bilim beradi!";
        icon = "🧭";
    }

    $("resultIcon").textContent = icon;
    $("resultTitle").textContent = title;
    $("resultMessage").textContent = message;

    $("finalScore").textContent = score;
    $("correctCount").textContent = correct;
    $("wrongCount").textContent = 10 - correct;
    $("percentage").textContent = percent + "%";

    $("resultProgress").style.width = percent + "%";

    $("newRecord").classList.toggle("hidden", !isNewRecord);

    updateRecordDisplay();
}

// DARJANI TANLASH
document.querySelectorAll(".level-card").forEach(button => {
    button.addEventListener("click", () => {
        startQuiz(button.dataset.level);
    });
});

// KEYINGI SAVOL
$("nextButton").addEventListener("click", nextQuestion);

// ORTGA
$("backHome").addEventListener("click", () => {
    if (confirm("Testdan chiqishni xohlaysizmi? Natijalar saqlanmaydi.")) {
        showScreen("homeScreen");
        updateRecordDisplay();
    }
});

// QAYTA TEST
$("retryButton").addEventListener("click", () => {
    startQuiz(currentLevel);
});

// BOSH SAHIFA
$("homeButton").addEventListener("click", () => {
    showScreen("homeScreen");
    updateRecordDisplay();
});

// BOSHLANG'ICH HOLAT
updateRecordDisplay();
