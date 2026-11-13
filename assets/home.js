const windowNote = document.querySelector("#window-note");
const shotButtons = document.querySelectorAll("[data-shot]");

for (const button of shotButtons) {
  button.addEventListener("click", () => {
    windowNote.hidden = button.dataset.shot !== "wide-shot";
    windowNote.open = false;
    for (const option of shotButtons) {
      const selected = option === button;
      option.setAttribute("aria-pressed", String(selected));
      document.getElementById(option.dataset.shot).hidden = !selected;
    }
  });
}
