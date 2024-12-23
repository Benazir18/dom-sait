let bnt = document.querySelector(".bnt button");
let model = document.querySelector(".modely");
model.style.display = "none";
console.log(bnt);


bnt.addEventListener("click", () => {
  if (model.style.display === "none") {
    model.style.display = "block";
    model.style.display = "flex"
  } else {
    model.style.display = "none";
  }
});

// bnt.addEventListener("click", () => {
//     if (bnt.style.background === "yellow") {
//       bnt.style.background = "green";
//     } else {
//       bnt.style.background = "yellow";
//     }
//   });
