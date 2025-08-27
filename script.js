// Clicking on the 💗 heart icon
const heartCount = document.getElementById("heartCount");
heartCount.textContent = 0;
const hearts = document.querySelectorAll(".heartClick");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heartCount.textContent = parseInt(heartCount.textContent) + 1;
  });
});

//🧪 Challenges Part (10 Marks)
const copyCount = document.getElementById("copyCount");
copyCount.textContent = 0;
const copyBtns = document.querySelectorAll(".copyBtn");

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener("click", () => {
    const card =copyBtn.closest(".card")
    const textToCopy = card.querySelector(".hotlineNumber").textContent;
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Hotline Number Copied❗");
      copyCount.textContent = parseInt(copyCount.textContent) + 1;
    });
  });
});

//Call Buttons
