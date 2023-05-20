function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed-custom");
  $("body").addClass("overflow-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".wrapper").removeClass("position-fixed-custom");
  $("body").removeClass("overflow-fixed");
}

$(document).ready(function () {
  $(".cd-shadow-layer").click(function () {
    closeNav();
  });

  $(window).scroll(function () {
    var sticky = $(".header-div"),
      scroll = $(window).scrollTop();

    if (scroll >= 190) {
      sticky.addClass("header-bgcolor slideInDown animated");
    } else {
      sticky.removeClass("header-bgcolor slideInDown animated");
    }
  });

  /* tooltips */
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  /* End of tooltips */
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

jQuery(window).on("load resize", function () {
  var header_height = jQuery(".header-div").outerHeight();
  var footer_height = jQuery("footer").outerHeight();
  var window_height = jQuery(window).outerHeight();
  var tot_height = window_height - footer_height;
  /* jQuery('.title-main-section').css('padding-top', header_height); */
  jQuery(".main-middle-area").css("min-height", tot_height);
});

/* Select2 */
$(".js-select2-custom").select2({
  placeholder: "Select here",
  dropdownPosition: "below",
  dropdownCssClass: "select2-dropdown-new01",
  minimumResultsForSearch: -1,
});

$(".js-select2-custom-multiple").select2({
  placeholder: "Select",
  dropdownPosition: "below",
  dropdownCssClass: "dropdown-custom-multiple2",
  minimumResultsForSearch: -1,
});
/* End of Select2 */

/* Copy clipboard */
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
/* End of Copy clipboard */

/* File Upload */
var readURL = function (input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(".profile-pic").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
};
$(".file-upload").on("change", function () {
  readURL(this);
});
$(".upload-button").on("click", function () {
  $(".file-upload").click();
});
/* End of File Upload */

/* Input */

$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

/* End of input */

flatpickr(".date-picker", {
  disableMobile: "true",
  minDate: "today",
  enableTime: false,
  altInput: true,
  // altFormat: "D j F Y",
});
