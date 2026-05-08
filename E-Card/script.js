document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0
    const slides = document.querySelectorAll(".slide")
    const forwardBtn = document.getElementById("forward");
    const backBtn = document.getElementById("back")

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "prev");

            if (i === index) {
                slide.classList.add("active");
            }
    });
    
        currentSlide = index;
    }

    function updateButtons() {
        if (currentSlide == 0) {
            backBtn.style.opacity = "0.3";
            backBtn.style.cursor = "not-allowed";
            backBtn.style.pointerEvents = "none";
        } else {
            backBtn.style.opacity = "1";
            backBtn.style.cursor = "pointer";
            backBtn.style.pointerEvents = "auto";
        }
    }

    forwardBtn.addEventListener("click", () => {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    })

    backBtn.addEventListener("click", () => {
        if (currentSlide <= 0) return;
     
        let prev = currentSlide - 1;
        showSlide(prev);
    })

    if (slides.length > 0) {
        showSlide(0);
    }
});