$(document).ready(function () {
  $(".customer-list").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    infinite: false,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fas fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  });
});

const btnToggleMenu = document.querySelector(".header-toggle");
const headerList = document.querySelector(".header-list");
const isExpand = "is-expand";
btnToggleMenu.addEventListener("click", () => {
  headerList.classList.add(isExpand);
});

window.addEventListener("click", (e) => {
  if (!headerList.contains(e.target) && !e.target.matches(".header-toggle")) {
    headerList.classList.remove(isExpand);
  }
});
