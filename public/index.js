let randomBodyParts = [
  "head",
  "eye",
  "leg",
  "nose",
  "elbow",
  "neck",
  "face",
  "toe",
  "foot",
  "shoulder",
];
let randomAdjectives = [
  "impressive",
  "invigorating",
  "courageous",
  "admirable",
  "impressively",
  "charming",
  "smart",
  "first class",
  "estimated",
  "amiable",
];
let randomWords = [
  "rainy day",
  "salt shaker",
  "sink",
  "masher",
  "nerve",
  "pack",
  "stamp",
  "rubber",
  "pump",
  "glove",
];

function generateRandomCompliment() {
  let randomBodyPart =
    randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

  let randomAdjective =
    randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

  let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
  const vowels = ["a", "e", "i", "o", "u"];
  let article;
  if (vowels.includes(randomAdjective.slice(0, 1))) {
    article = "an";
  } else {
    article = "a";
  }
  const content = `Your ${randomBodyPart} is like ${article} ${randomAdjective} ${randomWord}`;
  txtTypingEffect(outputTxt, content);
}
function txtTypingEffect(element, txt, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }
  element.textContent += txt[i];
  if (i === txt.length - 1) {
    return;
  }
  setTimeout(() => txtTypingEffect(element, txt, i + 1), 50);
}
const getComplimentButton = document.getElementById("getComplimentButton");
getComplimentButton.addEventListener("click", function () {
  generateRandomCompliment();
});
