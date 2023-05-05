const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let count = parseInt(localStorage.getItem("count")) || 0;
counter.textContent = count;

plusBtn.addEventListener("click", () => {
  count++;
  localStorage.setItem("count", count);
  counter.textContent = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  localStorage.setItem("count", count);
  counter.textContent = count;
});
