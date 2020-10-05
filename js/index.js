// animation part
const card = document.querySelectorAll(".card");
card.forEach((card) => {
  card.classList.add("magictime", "swashIn");
});

const mainPageCards = document.querySelectorAll(".main-page");
const emojis = document.querySelectorAll(".emoji");

const changeColor = () => {
  // color part
  // Random color creation
  var color = [
    "56D1D8",
    "0078D7",
    "EF584A",
    "FF5864",
    "ab0e86",
    "e01171",
    "2aaf74",
    "4ed99c",
    "f7aa00",
    "303841",
    "ffa5a5",
    "7579e7",
    "f08a5d",
    "132743",
    "1a1c20",
    "43658b",
    "16213e",
  ];

  // color is changing for every two seconds
  mainPageCards.forEach((mainPageCard) => {
    let selectedColor = "#" + color[Math.floor(Math.random() * color.length)];
    mainPageCard.style.backgroundColor = selectedColor;
  });
};

const changeEmoji = () => {
  // Random emoji creation
  var emojisList = [
    "😃",
    "😁",
    "🤣",
    "🙃",
    "🥳",
    "😝",
    "🤔",
    "😐",
    "😜",
    "🤨",
    "🙄",
    "😷",
    "😈",
    "🥱",
    "😏",
  ];

  emojis.forEach((emoji) => {
    let selectedEmoji = emojisList[Math.floor(Math.random() * emojis.length)];
    emoji.textContent = selectedEmoji;
  });
};

changeEmoji();
changeColor();

setInterval(() => {
  changeColor();
}, 2000);
