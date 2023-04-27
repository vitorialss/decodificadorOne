const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const copyButton = document.querySelector("#copy_button");
const image = document.querySelector(".figure");
const asideTexts = document.querySelector(".texts");
const container = document.querySelector(".aside-container");
const encryptButton = document.querySelector("#encrypt_button");
const decryptButton = document.querySelector("#decrypt_button");



inputText.addEventListener("input", () => {
  image.style.visibility = "hidden";
  asideTexts.style.visibility = "hidden";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.height = "100%";
  container.style.justifyContent = "space-between";
  copyButton.style.display = "block";
  outputText.style.height = "200px";
});

function toNormalForm(text) {
  const lowerCaseText = text.toLowerCase();
  return lowerCaseText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
 
 encryptButton.addEventListener("click", () => {
  let value = inputText.value;
  let normalizeValue  = toNormalForm(value)
  const result = normalizeValue.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
  outputText.value =  result;

});

decryptButton.addEventListener("click", () => {
  let value = inputText.value;
  let normalizeValue  = toNormalForm(value)
  const textResult = normalizeValue.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
  outputText.value = textResult;
})

copyButton.addEventListener("click", () => {

  navigator.clipboard.writeText(outputText.value);

  inputText.value = "";

})