function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteChar() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function appendChar(char) {
  const display = document.getElementById("display");
  display.value += char;
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
