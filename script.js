
// Clicking on the 💗 heart icon 
const heartCount = document.getElementById("heartCount");
heartCount.textContent = 0
const hearts = document.querySelectorAll(".heartClick");
hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        heartCount.textContent = parseInt(heartCount.textContent) + 1;
    })
})

//Call Buttons
