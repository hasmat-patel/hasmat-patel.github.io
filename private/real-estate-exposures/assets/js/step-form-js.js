/* Script for tab steps */
$(".nav-cs-step .nav-link").on("shown.bs.tab", function (e) {
  var href = $(e.target).attr("data-bs-target");
  var $curr = $(
    ".nav-cs-step .nav-link[data-bs-target='" + href + "']"
  ).parent();

  $(".nav-cs-step li").removeClass();

  $curr.addClass("active");
  $curr.prevAll().addClass("done");
});

$(".btn-next-step").click(function (e) {
  e.preventDefault();
  var link = $(".nav-cs-step .active")
    .next()
    .children("button")
    .attr("data-bs-target");
  $('.nav-cs-step .nav-link[data-bs-target="' + link + '"]').tab("show");
});

$(".btn-previous-step").click(function (e) {
  e.preventDefault();
  var link = $(".nav-cs-step .active")
    .prev()
    .children("button")
    .attr("data-bs-target");
  $('.nav-cs-step .nav-link[data-bs-target="' + link + '"]').tab("show");
});
/* End of script for tab steps */
