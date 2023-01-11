let swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    // centeredSlides: true,
    spaceBetween: 50,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



let swiper1 = new Swiper(".swiper1", {
    effect: "cards",
    grabCursor: true,
});