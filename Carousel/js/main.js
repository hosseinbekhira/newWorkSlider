let firstNumber = document.querySelector(".number-part .f-number");
let secondNumber = document.querySelector(".number-part .s-number");

let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let product = document.getElementsByClassName("product");
let lengthProduct = product.length;
let product_page = Math.ceil(product.length / 1);
let l = 0;
let count = 1;

window.onload = () => {
  firstNumber.innerHTML = count;
  secondNumber.innerHTML = lengthProduct;
};

let movePer = 100;
let maxMove = movePer * (lengthProduct - 1);

let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};

let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};

rightArrow.onclick = () => {
  console.log("Right Clicked");
  if (count < lengthProduct) {
    count = count + 1;
    firstNumber.innerHTML = count;
  }

  right_mover();
};

leftArrow.onclick = () => {
  console.log("Left Clicked");
  if (count > 1) {
    count = count - 1;
  }
  firstNumber.innerHTML = count;
  left_mover();
};
