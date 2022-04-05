const operationInput = document.getElementById("operation-input");
const layoutCalc = document.getElementById("layout-calc");
layoutCalc.addEventListener("click", (e) => {
  let text = e.target.innerText;
  if (text.length === 1) {
    operationInput.value += text;
  }
  if (text === "=" || text === "delete") {
    let inputValue = operationInput.value.replace("=", "");
    let result = Function("return " + inputValue)();
    operationInput.value = "";
    operationInput.value = result;
  }
  if (e.target.dataset.delete === "delete") {
    operationInput.value = "";
  }
});
