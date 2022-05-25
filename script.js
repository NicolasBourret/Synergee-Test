const ranges = {
  A: [0, 100],
  B: [25, 125],
  C: [50, 150],
  D: [75, 175],
  E: [100, 200],
  F: [10, 190],
  G: [20, 180],
  H: [30, 170],
  I: [40, 160],
  J: [0, 200],
};
let tags = [];

const textTags = document.querySelector("#tags");
let text = "";

const input = document.querySelector("#number");
let number;
input.addEventListener("change", (e) => {
  number = parseInt(e.target.value);
});

const button = document.querySelector("#show-tags");
button.addEventListener("click", () => {
  textTags.textContent = "";
  matchingLabels(number);
  tags = [];
});

const matchingLabels = (item) => {
  for (const range in ranges) {
    const min = ranges[range][0];
    const max = ranges[range][range.length];
    const items = [];

    if (item >= min && item < max) {
      for (let i = min; i < max; i++) {
        items.push(i);
      }
    }

    const include = items.includes(item);

    if (include) {
      text += " " + range + ",";
      tags.push(range);
    }
  }

  if (tags.length === 0) {
    textTags.textContent = "Il n'y a pas d'étiquettes pour ce nombre.";
  } else {
    textTags.textContent = text.replace(/,$/, ".");
  }
};
