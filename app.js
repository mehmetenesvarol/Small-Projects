wordArr = [
    [
        word = "egg",
        main = "yumurta",
        stt = true
    ],
    [
        word = "apple",
        main = "elma",
        stt = true
    ],
    [
        word = "run",
        main = "kosmak",
        stt = true
    ]
]





// add word button (daily)
const dailyWordInput = document.getElementById("add-daily-input-word")
const dailyMainInput = document.getElementById("add-daily-input-main")
const addDailyWord = document.getElementById("add-daily-btn")
addDailyWord.addEventListener("click", (() => {
    let word = trim(toLowerCase(dailyWordInput.value))
    let main = trim(toLowerCase(dailyMainInput.value))
    let control = storageControl(word, main)
    if (control === true) {
        storageAdd(word, main, false)
        addDailyWord.style.border = "5px solid green";
        dailyWordInput.textContent = ""
        dailyMainInput.textContent = ""
    } else {
        addDailyWord.style.border = "5px solid red";
    }
}))

// storage control
function storageControl(word, main) {
    let storage = JSON.parse(localStorage.getItem("wordArr"))
    storage.forEach(element => {
        if (element[0] === word || element.main[1] === main) {
            return false;
        } else {
            return true;
        };
    });
}


// add item local storage array
function storageAdd(word, main, boolean) {
    let storage = JSON.parse(localStorage.getItem("wordArr"))
    localStorage.clear()
    let newWord = [word, main, boolean]
    storage.push(newWord)
    localStorage.setItem("wordArr",JSON.stringify(storage))
}

