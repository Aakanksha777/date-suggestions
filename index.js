const myDate = document.querySelector("#myDate");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn");

console.log(myDate);
console.log(btn);

function giveSuggestion () {
    const listsuggestion = document.createElement('li');
    listsuggestion.innerText = "Hi Beautiful, take rest for 3-4 days"
    document.body.append(listsuggestion)
    
}

btn.addEventListener("click", giveSuggestion)