// wordArr = [
//     [
//         word = "egg",
//         main = "yumurta",
//         stt = true
//     ],
//     [
//         word = "apple",
//         main = "elma",
//         stt = true
//     ],
//     [
//         word = "run",
//         main = "kosmak",
//         stt = true
//     ]
// ]
// add word button (daily)
const dailyWordInput = document.getElementById("add-daily-input-word");
const dailyMainInput = document.getElementById("add-daily-input-main");
const addDailyWord = document.getElementById("add-daily-btn");
addDailyWord.addEventListener("click", (() => {
    let word = trim(toLowerCase(dailyWordInput.value));
    let main = trim(toLowerCase(dailyMainInput.value));
    let control = storageControl(word, main);
    if (control === true && word !== "" && word !== null && main !== "" && main !== null) {
        addToStorage(word, main, false);
        refleshList();
        addDailyWord.style.border = "5px solid green";
        dailyWordInput.textContent = "";
        dailyMainInput.textContent = "";
    } else {
        addDailyWord.style.border = "5px solid red";
    }
}));

// storage control
function storageControl(word, main) {
    let storage = JSON.parse(localStorage.getItem("wordArr"));
    storage.forEach(elem => {
        if (elem[0] === word || elem.main[1] === main) {
            return false;
        } else {
            return true;
        };
    });
};

// add item to local storage
function addToStorage(word, main, boolean) {
    let storage = JSON.parse(localStorage.getItem("wordArr"));
    localStorage.clear();
    let newWord = [word, main, boolean];
    storage.push(newWord);
    localStorage.setItem("wordArr", JSON.stringify(storage));
};

// reflesh lists
function refleshList() {
    let storage = JSON.parse(localStorage.getItem("wordArr"));
    storage.forEach((elem) => {
        if (elem[2] === false) {
            addToDaily(elem[0],elem[1]);
        } else {
            addToAll(elem[0],elem[1]);
        }
    })
}


// add word to daily list
const dailyList = document.getElementById("daily-list");
function addToDaily(word,main){
    let div = document.createElement("div");
    div.className = "word-wrapper";
    div.innerHTML = `
    <i onclick="removeWord(wid-${word}-${main})" class="fa-solid fa-xmark"></i>
    <div class="wl-wrapper">
        <h5>${word}</h5>
        <h5>${main}</h5>
    </div>
    <i class="fa-solid fa-arrow-right"></i>
    `
    div.id=`wid-${word}-${main}`
}   

{/* 
<div class="word-wrapper">
    <i onclick="removeWord(1)" class="fa-solid fa-xmark"></i>
    <div class="wl-wrapper">
        <h5>word</h5>
        <h5>main</h5>
    </div>
    <i class="fa-solid fa-arrow-right"></i>
</div> 
*/}

function addToAll(word,main){
    let div = document.createElement("div");
    div.className = "word-wrapper";
    div.innerHTML = `
    <i class="fa-solid fa-arrow-left"></i>
    <div class="wl-wrapper">
        <h5>${word}</h5>
        <h5>${main}</h5>
    </div>
    <i onclick="removeWord(wid-${word}-${main})" class="fa-solid fa-xmark"></i>
    `
    div.id=`wid-${word}-${main}`
};

{/* 
<div class="word-wrapper">
    <i class="fa-solid fa-arrow-left"></i>
    <div class="wl-wrapper">
        <h5>word</h5>
        <h5>main</h5>
    </div>
    <i onclick="removeWord(1)" class="fa-solid fa-xmark"></i>
</div> 
*/}

// remove word
function removeWord(id){
    let removedWord = document.getElementById(`${id}`)
    removeWordStorage(word,main)

};

// remove word from storage
function removeWordStorage(word,main){

};

// background color dark
document.getElementById("hdr-dark").addEventListener("click",(()=>{
    document.getElementById("container").style="background:white;"

}));


// background color light
document.getElementById("hdr-dark").addEventListener("click",(()=>{
    document.getElementById("container").style="background:black;"
}));