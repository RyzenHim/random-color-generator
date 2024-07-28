// const colorCode = document.querySelectorAll(".color");

// colorCode.forEach((el) => {
//   let randomColor = parseInt(Math.random() * 1000000);

//   el.textContent = "#" + randomColor;
//   el.style.backgroundColor = "#" + randomColor;
// });

const containerEl = document.querySelector(".color_container");

for (let index = 0; index < 60; index++) {
  const color_div = document.createElement("div");
  color_div.classList.add("color");

  let randomCOlor = Math.floor(Math.random() * 16777215).toString(16);
  color_div.textContent = "#" + randomCOlor;
  color_div.style.backgroundColor = "#" + randomCOlor;
  containerEl.appendChild(color_div);
}
