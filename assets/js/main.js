// Enable Global Bootstrap Tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) =>
    new bootstrap.Tooltip(tooltipTriggerEl, {
      container: "body",
      html: true,
    })
);

// Enable Global Bootstrap Popovers
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) =>
    new bootstrap.Popover(popoverTriggerEl, {
      container: "body",
      html: true,
      // customClass: "custom-popover",
    })
);

// Change tooltip title by manipulating Popper
function changeTooltipTitle(tooltip, newTitle) {
  tooltipList.find((tt) => tt._element.id == tooltip.id)._config.title =
    newTitle;
}

// Collapse responsive nav after link is clicked
$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// Copy email address to clipboard action
$("#copy-email-button").click(function () {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($("#contact-email").text()).select();
  document.execCommand("copy");
  $temp.remove();

  // change tooltip title
  var original_title = $(this).attr("data-bs-title");
  changeTooltipTitle(this, "Copied!");
  $(this).tooltip("show");
  changeTooltipTitle(this, original_title);
});


// Init Splide Carousel
document.addEventListener( 'DOMContentLoaded', function() {
  var projectsCarousel = new Splide('.splide', {
    perPage: 3,
    perMove: 1,
    gap: '1em',
    focus: 'center',
    trimSpace: false,
    breakpoints: {
      // sm (≤ 576px)
      576: {
        perPage: 1,
        arrows: false
      },
      // md (≤ 576px)
      768: {
        perPage: 2,
        arrows: false
      },
      // lg (≤ 576px)
      992: {
        perPage: 3
      },
      // xl (≤ 576px)
      1200: {
        perPage: 4
      },
      // xxl (≤ 1400px)
      1400: {
        perPage: 5
      }
    }
  });

  projectsCarousel.mount()
});