// animation part
const card = document.querySelectorAll(".card");
card.forEach((card) => {
  card.classList.add("magictime", "swashIn");
});

// color part
// Random color creation
var color = [
  "#56D1D8",
  "#0078D7",
  "#EF584A",
  "#FF5864",
  "#ab0e86",
  "#e01171",
  "#2aaf74",
  "#4ed99c",
  "#f7aa00",
  "#303841",
];

const mainPageCards = document.querySelectorAll(".main-page");
mainPageCards.forEach((mainPageCard) => {
  let selectedColor = color[Math.floor(Math.random() * color.length)];
  mainPageCard.style.backgroundColor = selectedColor;
});

// Random emoji creation
var emojisList = ["😃", "😁", "🤣", "🙃", "🥰", "😝", "🤔", "😐"];
const emojis = document.querySelectorAll(".emoji");
emojis.forEach((emoji) => {
  let selectedEmoji = emojisList[Math.floor(Math.random() * emojis.length)];
  emoji.textContent = selectedEmoji;
});
