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
    const card = copyBtn.closest(".card");
    const textToCopy = card.querySelector(".hotlineNumber").textContent;
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Hotline Number Copied❗");
      copyCount.textContent = parseInt(copyCount.textContent) + 1;
    });
  });
});

//Call Buttons
const callBtns = document.querySelectorAll(".callBtn");
const coinCount = document.getElementById("coinCount");
const outputContainer = document.getElementById("outputContainer");
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
  outputContainer.innerHTML = "";
})

callBtns.forEach((callbtn) => {
  callbtn.addEventListener("click", () => {
    if (parseInt(coinCount.textContent) < 20) {
      alert("You don't have sufficient coins");
      return;
    }
    

    let card = callbtn.closest(".card");
    let h1Text = card.querySelector(".hotlineNumber").textContent; // changed here
    let pText = card.querySelector("p").textContent;

    alert(`📞 Calling ${pText}... ${h1Text}`);
    coinCount.textContent = parseInt(coinCount.textContent) - 20;

    const newDiv = document.createElement("div");
    newDiv.className = "new-card bg-gray-50 p-4 rounded-md mb-3 flex justify-between items-center";

const now = new Date();
const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true });

 const leftContent =document.createElement("div")
    const newH1 = document.createElement("h1");
    newH1.textContent = h1Text;
    newH1.className = "text-gray-600 text-left ";

    const newP = document.createElement("p");
    newP.textContent = pText;
    newP.className = "text-xl font-bold text-gray-700  ";

    leftContent.appendChild(newP);
    leftContent.appendChild(newH1);

    const timeDiv = document.createElement("div");
    timeDiv.textContent = timeStr;
    timeDiv.className = "text-gray-900 text-sm";

    newDiv.appendChild(leftContent)
    newDiv.appendChild(timeDiv)

    outputContainer.appendChild(newDiv);
  });
});

