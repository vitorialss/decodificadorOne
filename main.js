const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const copyButton = document.querySelector("#copy_button");
const image = document.querySelector(".figure");
const asideTexts = document.querySelector(".texts");
const container = document.querySelector(".aside-container");



inputText.addEventListener("input", () => {
  image.style.visibility = "hidden";
  asideTexts.style.visibility = "hidden";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.height = "100%";
  container.style.justifyContent = "space-between";
  copyButton.style.display = "block";



  const value = inputText.value;
  outputText.value =  inputText.value;

  const result = value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

  console.log(result);

  
});
