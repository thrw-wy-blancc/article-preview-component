const shareBtn = document.querySelector(".share-btn");
const socialMedia = document.querySelector(".social-media")

shareBtn.addEventListener("click", () => {
    socialMedia.classList.toggle("active");
})