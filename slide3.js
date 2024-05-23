let billBlockEl = document.getElementById("billBlock");
let percentBlockEl = document.getElementById("percentBlock");
let tipBlockEl = document.getElementById("tipBlock");
let totalBlockEl = document.getElementById("totalBlock");
let elseBlockEl = document.getElementById("elseBlock");
function find() {
  let amount = billBlockEl.value;
  let percent = percentBlockEl.value;
  let tip = amount * (percent / 100);
  let total = parseInt(amount) + tip;
  tipBlockEl.value = tip;
  totalBlockEl.value = total;
  if (amount === "" || percent === "") {
    elseBlockEl.textContent = "Empty input feild, please fill all!";
  } else {
    elseBlockEl.textContent = "Your Bill Amount!";
  }
}
