let swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    // centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {

        1200: {
            freemode:true,
            slidesPerView: 5,
            spaceBetween: 20,
        },
        900: {
            freemode:true,
            slidesPerView: 4,
            spaceBetween: 20,
        },
        600: {
            freemode:true,
            slidesPerView: 3,
            spaceBetween: 20,
        },

        400: {
            freemode:true,
            slidesPerView: 2,
            spaceBetween: 20,
        },
        300:{
            freemode:true,
            slidesPerView: 1,
        }
    }
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});



let swiper1 = new Swiper(".swiper1", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    }
});