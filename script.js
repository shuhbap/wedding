let count = 1;

function yes() {
  document.getElementById("countBox").style.display = "block";
}

function no() {
  document.getElementById("countBox").style.display = "none";
}

function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrease() {
  if (count > 1) {
    count--;
    document.getElementById("count").innerText = count;
  }
}
