document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
        for (let i = 0; i < 5; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.style.left = `${Math.random() * 100}%`;
            document.body.appendChild(balloon);

            setTimeout(() => {
                balloon.remove();
            }, 3000);
        }
    });
});

