const gradients = document.querySelectorAll(".gradient");
const shoeImages = document.querySelectorAll(".shoe");
const shoeColorBtns = document.querySelectorAll(".colors .color");
const outprice = document.getElementById("outprice");
const sizes = document.querySelectorAll(".sizes .size");

let selectedPrice = 0;
let activeShoeColorBtn = shoeColorBtns[0];
let activeSize = sizes[0];

function updateDisplay(shoeColorBtn, activeSize) {
  const color = shoeColorBtn.getAttribute("color");
  const price = parseFloat(shoeColorBtn.getAttribute("data-price"));
  const activeSizePrice = +activeSize.getAttribute("data-size");

  selectedPrice = price + activeSizePrice;
  outprice.innerHTML = selectedPrice.toFixed(2);

  shoeColorBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  shoeColorBtn.classList.add("active");

  shoeImages.forEach((img) => {
    img.classList.remove("show");

    if (img.getAttribute("color") === color) {
      img.classList.add("show");
    }
  });

  gradients.forEach((gradient) => {
    gradient.classList.remove("second");

    if (gradient.getAttribute("color") === color) {
      gradient.classList.add("second");
    }
  });

  sizes.forEach((size) => {
    size.classList.remove("active");
  });
  activeSize.classList.add("active");
}

shoeColorBtns.forEach((shoeColorBtn) => {
  shoeColorBtn.addEventListener("click", () => {
    activeShoeColorBtn = shoeColorBtn;
    updateDisplay(activeShoeColorBtn, activeSize);
  });
});

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    activeSize = size;
    updateDisplay(activeShoeColorBtn, activeSize);
  });
});

updateDisplay(activeShoeColorBtn, activeSize);
