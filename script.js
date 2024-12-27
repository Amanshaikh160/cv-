let name = document.querySelector(".name")
let fname = document.querySelector(".fname")
let age = document.querySelector(".age")
let select = document.querySelector(".select")
let lang = document.querySelectorAll(".lang[type='checkbox']")
let email = document.querySelector(".email")
let phone = document.querySelector(".phone")
let address = document.querySelector(".address")
let city = document.querySelector(".city")
let country = document.querySelector(".country")
let btn = document.querySelector(".btn")
let cv = document.querySelector(".cv")

let themes  = document.querySelectorAll(".Themes")
let black  = document.querySelectorAll(".black")
let blue  = document.querySelectorAll(".blue")
let white  = document.querySelectorAll(".white")


let name1 = document.querySelector(".name1")
let fname1 = document.querySelector(".fname1")
let age1 = document.querySelector(".age1")
let sel1 = document.querySelector(".sel1")
let lang1 = document.querySelector(".lang1")
let email1 = document.querySelector(".email1")
let phone1 = document.querySelector(".phone1")
let address1 = document.querySelector(".address1")
let city1 = document.querySelector(".city1")
let country1 = document.querySelector(".country1")


btn.addEventListener("click", () => {              
    name1.innerText = `Name : ${name.value.trim()}`
    fname1.innerText =`Father Name : ${fname.value.trim()}`
    age1.innerText = `Age : ${age.value.trim()}`
    sel1.innerText = select.value
    lang1.innerText = "";
    let selectedLanguages = []; 

    lang.forEach(l => {
    if (l.checked) {
        selectedLanguages.push(l.value);
        }
    });
    lang1.innerText = selectedLanguages.join(" ");

    email1.innerText = `Email : ${email.value.trim()}`
    phone1.innerText = `Phone : ${phone.value.trim()}`
    address1.innerText = `Address : ${address.value.trim()}`
    city1.innerText = `City : ${city.value.trim()}`
    country1.innerText = `Country : ${country.value.trim()};`
});


black.addEventListener("click", () => {
    cv.style.backgroundColor = "black";
    cv.style.color = "white";
});

blue.addEventListener("click", () => {
    cv.style.backgroundColor = "blue";
    cv.style.color = "white";
});

white.addEventListener("click", () => {
    cv.style.backgroundColor = "white";
    cv.style.color = "black";
});


if (btn === "click") {
    cv.style.display = "block"
}else{
    cv.style.display = "none"
}