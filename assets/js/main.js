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
});
