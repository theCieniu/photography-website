let burger = document.getElementById("burger");
let menu = document.querySelector(".nav-links");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

burger.addEventListener("click", () => {
  menu.classList.toggle("mobile-menu");
  b1.classList.toggle("b1");
  b2.classList.toggle("b2");
  b3.classList.toggle("b3");
})

menu.addEventListener("click", () => {
  menu.classList.remove("mobile-menu");
  b1.classList.remove("b1");
  b2.classList.remove("b2");
  b3.classList.remove("b3");
})

let gallery = document.querySelectorAll(".gallery-section img");

for (item of gallery) {
  item.addEventListener("click", (e) => {
    console.log(item);
    e.target.classList.toggle("view-img");
  })
}
