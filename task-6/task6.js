const gradients = document.querySelectorAll(".gradient");
const shoeImages = document.querySelectorAll(".shoe");
const shoeColorBtns = document.querySelectorAll(".colors .color");
const outprice = document.getElementById("outprice");
const sizes = document.querySelectorAll(".sizes .size");

let selectedPrice = 0;
let activeShoeColorBtn = shoeColorBtns[0];
let activeSize = sizes[0];
let color = "";

function updateDisplay() {
  color = activeShoeColorBtn.getAttribute("color");
  const price = parseFloat(activeShoeColorBtn.getAttribute("data-price"));
  const activeSizePrice = +activeSize.getAttribute("data-size");

  selectedPrice = price + activeSizePrice;
  outprice.innerHTML = selectedPrice.toFixed(2);

  changeClass(shoeColorBtns, "active");
  changeClass(gradients, "second");
  changeClass(shoeImages, "show");
  changeClass(sizes, "active");
}

function changeClass(elements, className) {
  elements.forEach((element) => {
    element.classList.remove(className);

    if (element.getAttribute("color") === color) {
      element.classList.add(className);
    } else {
      activeSize.classList.add(className);
    }
  });
}

shoeColorBtns.forEach((shoeColorBtn) => {
  shoeColorBtn.addEventListener("click", () => {
    activeShoeColorBtn = shoeColorBtn;
    updateDisplay();
  });
});

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    activeSize = size;
    updateDisplay();
  });
});

updateDisplay();
